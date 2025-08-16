import { userModel } from "../models/userModel.js";
import { meetingModel } from "../models/meetingModel";
const addToHistory = async (req, res) => {
    const { token, meeting_code } = req.body;

    try {
        const user = await userModel.findOne({ token: token });

        const newMeeting = new meetingModel({
            user_id: user.username,
            meetingCode: meeting_code
        })

        await newMeeting.save();

        res.status(httpStatus.CREATED).json({ message: "Added code to history" })
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}
export{addToHistory}