const mongoose = require("mongoose");

/**menuItems schema */
const menuItemsSchema = new mongoose.Schema(
    {
        category_id: {
            type: mongoose.Types.ObjectId,
            ref : "categories"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref : "restaurant"
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        price: {
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

const MenuItems = mongoose.model("menuItems", menuItemsSchema);
module.exports = MenuItems