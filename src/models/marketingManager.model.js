const mongoose = require("mongoose");

/**Marketing manager schema */
const marketingManagerSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref : "user"
        },
        campaign_name: {
            type: String,
            trim: true
        },
        promotion_details: {
            type: String,
            trim: true
        },
        start_date: {
            type: Date,
            default: Date.now()
        },
        end_date: {
            type: Date,
            default: Date.now()
        },
        is_active: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const MarketingManager = mongoose.model("marketingManager", marketingManagerSchema);
module.exports = MarketingManager