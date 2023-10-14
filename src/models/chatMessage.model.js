const mongoose = require("mongoose");

/**chat message schema */
const chatMessageSchema = new mongoose.Schema(
    {
        chat_id: {
            type: mongoose.Types.ObjectId,
            ref: "chat"
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        content: {
            type: String,
            trim: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
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

const ChatMessage = mongoose.model("chatMessage", chatMessageSchema);
module.exports = ChatMessage
