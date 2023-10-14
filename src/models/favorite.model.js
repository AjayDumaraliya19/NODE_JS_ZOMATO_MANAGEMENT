const mongoose = require("mongoose");

/**favorite schema */
const favoriteSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        menuItems_id: {
            type: mongoose.Types.ObjectId,
            ref: "menuItems"
        },
        favItem_name: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const favorite = mongoose.model("favorite", favoriteSchema);
module.exports = favorite