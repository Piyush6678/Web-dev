import User from "../models/user.models.js";
import AppError from "../utils/error.utils.js";

export const userStats = async (req, res, next) => {
    try {
        const allUsersCount = await User.countDocuments();
        const subscribedUsersCount = await User.countDocuments({
            "subscription.status": "active",
        });

        res.status(200).json({
            success: true,
            message: "All registered users count",
            allUsersCount,
            subscribedUsersCount,
        });
    } catch (e) {
        return next(new AppError(e.message, 500));
    }
};
