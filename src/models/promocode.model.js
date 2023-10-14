const mongoose = require("mongoose");

/**promocode schema */
const promocodeSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        menuItem_id:{
            type: mongoose.Types.ObjectId,
            ref: "menuItems"
        },
        code: {
            type: Number,
            trim: true,
        },
        discount: {
            type: Number,
            trim: true,
        },
        start_date: {
            type: Date,
            default: Date.now,
        },
        end_date: {
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

const Promocode = mongoose.model("promocode", promocodeSchema)
module.exports = Promocode