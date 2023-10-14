const mongoose = require("mongoose");

/**special schema */
const specialSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        dish_name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
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
    }
);

const Special = mongoose.model("special", specialSchema);
module.exports = Special

// restaurant_id ref