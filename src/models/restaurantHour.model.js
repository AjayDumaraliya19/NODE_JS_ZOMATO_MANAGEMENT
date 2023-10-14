const mongoose = require("mongoose");

/**restaurant hour schema */
const restaurantHourSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        day_of_week: {
            type: String,
            trim: true,
        },
        open_time: {
            type: Date,
            default: Date.now,
        },
        close_time: {
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

const RestaurantHour = mongoose.model("restaurantHour", restaurantHourSchema);
module.exports = RestaurantHour
