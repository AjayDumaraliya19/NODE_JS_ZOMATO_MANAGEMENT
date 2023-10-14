const mongoose = require("mongoose");

/**complaint schema */
const complaintSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        content: {
            type: String,
            trim: true,
        },
        created_at: {
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

const Complaint = mongoose.model("complaint", complaintSchema);
module.exports = Complaint
