const mongoose = require("mongoose");

/**delivery assignment schema */
const deliveryAssignmentSchema = new mongoose.Schema(
    {
        order_id: {
            type: mongoose.Types.ObjectId,
            ref: "order"
        },
        driver_id: {
            type: mongoose.Types.ObjectId,
            ref: "deliveryDrivers"
        },
        assignment_at: {
            type: Date,
            default: Date.now,
        },
        delivered_at: {
            type: Date,
            default: Date.now,
        },
        status: {
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

const DeliveryAssignment = mongoose.model("deliveryAssignment", deliveryAssignmentSchema);
module.exports = DeliveryAssignment
