const mongoose = require("mongoose");
const config = require("../config/config")

/**user photo schema */
const userPhotoSchema = new mongoose.Schema(
    {
        photo_url: {
            type: String,
            trim: true,
        },
        caption: {
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
        toJSON: {
            transform: function (doc, data) {
                if (data?.userPhoto_image) {
                    data.userPhoto_image = `${config.base_url}userPhoto_images/${data.userPhoto_image}`;
                }
            },
        },
    }
);

const UserPhoto = mongoose.model("userPhoto", userPhotoSchema);
module.exports = UserPhoto

// user_id ref