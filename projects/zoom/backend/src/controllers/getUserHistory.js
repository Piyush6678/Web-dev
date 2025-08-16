import { meetingModel } from "../models/meetingModel";
import { userModel } from "../models/userModel.js";
const getUserHistory = async (req, res) => {
    const { token } = req.query;

    try {
        const user = await userModel.findOne({ token: token });
        const meetings = await meetingModel.find({ user_id: user.username })
        res.json(meetings)
    } catch (e) {
        res.json({ message: `Something went wrong ${e}` })
    }
}
export {getUserHistory}