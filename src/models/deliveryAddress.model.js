const mongoose = require("mongoose");

/**deliveryAddress model */
const deliveryAddressSchema = new mongoose.Schema(
    {
        delieverDrivery_id: {
            type: mongoose.Types.ObjectId,
            ref: "delieveryDriver"
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        address_line1: {
            type: String,
            trim: true,
        },
        address_line2: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
        postal_code: {
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
    }
);

const DeliveryAddress = mongoose.model("deliveryAddress", deliveryAddressSchema);
module.exports = DeliveryAddress
// user_id ref