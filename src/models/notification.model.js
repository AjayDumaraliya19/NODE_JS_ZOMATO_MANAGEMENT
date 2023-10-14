const mongoose = require("mongoose");

/**notification schema */
const notificationSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        message_id: {
            type: mongoose.Types.ObjectId,
            ref: "message"
        },
        chat_id: {
            type: mongoose.Types.ObjectId,
            ref: "chat"
        },
        chatMessage_id: {
            type: mongoose.Types.ObjectId,
            ref: "chateMessage"
        },
        content: {
            type: String,
            trim: true
        },
        read_status: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Notification = mongoose.model("notification", notificationSchema);
module.exports = Notification