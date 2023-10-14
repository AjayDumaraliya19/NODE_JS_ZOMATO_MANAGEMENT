const mongoose = require("mongoose");

/**restaurant owners schema */
const restaurantOwners = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        name: {
            type: String,
            trim: true
        },
        role: {
            type: String,
            trim: true
        },
        ownership_percentage: {
            type: Number,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const RestaurantOwners = mongoose.model("restaurantOwners", restaurantOwners);
module.exports = RestaurantOwners;