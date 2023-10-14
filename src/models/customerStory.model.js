const mongoose = require("mongoose");

/**Faq schema */
const customerStorySchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        customer_name: {
            type: String,
            trim: true
        },
        story_title: {
            type: String,
            trim: true
        },
        story_content: {
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

const Faq = mongoose.model("faq", customerStorySchema);
module.exports = Faq
