const mongoose = require("mongoose");

/**UserFaq schema */
const userFaqSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        question: {
            type: String,
            trim: true
        },
        answer: {
            type: String,
            trim: true
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

const UserFaq = mongoose.model("userFaq" , userFaqSchema);
module.exports = UserFaq