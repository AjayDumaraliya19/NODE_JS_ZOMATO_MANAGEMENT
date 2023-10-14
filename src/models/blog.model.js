const mongoose = require("mongoose");

/**Blog schema */
const blogSchema = new mongoose.Schema(
    {
        contentCreater_id: {
            type: mongoose.Types.ObjectId,
            ref: "contentCreater"
        },
        title: {
            type: String,
            trim: true
        },
        content: {
            type: String,
            trim: true
        },
        author: {
            type: String,
            trim: true
        },
        tag: {
            type: String,
            trim: true
        },
        published_date: {
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

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog
