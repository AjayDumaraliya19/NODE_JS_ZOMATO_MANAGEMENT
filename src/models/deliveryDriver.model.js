const mongoose = require("mongoose");

/**delivery driver schema */
const deliveryDriversSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        vehicle_number: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true
        },
        license_number: {
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

const DeliveryDrivers = mongoose.model("deliveryDrivers", deliveryDriversSchema);
module.exports = DeliveryDrivers
