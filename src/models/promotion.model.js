const mongoose = require("mongoose");

/**promotion schema */
const promotionSchema = new mongoose.Schema(
    {
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        marketingManager_id: {
            type: mongoose.Types.ObjectId,
            ref: "marketingManager"
        },
        description: {
            type: String,
            trim: true
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
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Promotion = mongoose.model("promotion", promotionSchema);
module.exports = Promotion