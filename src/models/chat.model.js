const mongoose = require("mongoose");

/**chat schema */
const chatSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        sender: {
            type: String,
            trim: true
        },
        reciever: {
            type: String,
            trim: true
        },
        text: {
            type: String,
            trim: true
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

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat
