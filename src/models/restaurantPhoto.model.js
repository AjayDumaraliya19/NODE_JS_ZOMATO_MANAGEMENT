const mongoose = require("mongoose");
const config = require("../config/config")

/**Restaurant schema */
const restaurantPhotoSchema = new mongoose.Schema(
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
                if (data?.resaturantPhoto_image) {
                    data.restaurantPhoto_image = `${config.base_url}restaurantPhoto_images/${data.restaurantPhoto_image}`;
                }
            },
        },
    }
);

const RestaurantPhoto = mongoose.model("restaurantPhoto", restaurantPhotoSchema);
module.exports = RestaurantPhoto
