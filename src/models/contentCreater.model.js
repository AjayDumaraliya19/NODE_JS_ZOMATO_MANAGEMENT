const mongoose = require("mongoose");

/**Content creater schema */
const contentCreaterSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref : "user"
        },
        content_type: {
            type: String,
            trim: true
        },
        content_details: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ContentCreater = mongoose.model("contentCreater", contentCreaterSchema);
module.exports = ContentCreater;