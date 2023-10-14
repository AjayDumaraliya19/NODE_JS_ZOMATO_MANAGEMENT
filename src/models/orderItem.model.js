const mongoose = require("mongoose");

/**order item schema */
const orderItemSchema = new mongoose.Schema(
    {
        order_id: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        menu_item_id: {
            type: mongoose.Types.ObjectId,
            ref: "menuItems"
        },
        quantity: {
            type: Number,
            trim: true,
        },
        subtotal_price: {
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

const OrderItem = mongoose.model("orderItem", orderItemSchema);
module.exports = OrderItem