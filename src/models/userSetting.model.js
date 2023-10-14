const mongoose = require("mongoose");

/**user setting schema */
const userSettingSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        email_notifications: {
            type: Boolean,
            trim: true,
        },
        push_notifications: {
            type: Boolean,
            trim: true,
        },
        sms_notifications: {
            type: Boolean,
            trim: true,
        },
        language_preference: {
            type: String,
            trim: true,
        },
        theme_preference: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserSetting = mongoose.model("userSetting", userSettingSchema);
module.exports = UserSetting
