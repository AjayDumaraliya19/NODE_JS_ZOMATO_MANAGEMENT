const mongoose = require("mongoose");

/**orders schema */
const ordersSchema = new mongoose.Schema(
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
        total_price: {
            type: Number,
            trim: true
        },
        order_date: {
            type: Date,
            default: Date.now,
        },
        status: {
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

const Orders = mongoose.model("orders", ordersSchema);
module.exports = Orders