const mongoose = require("mongoose");

/**city schema */
const citySchema = new mongoose.Schema(
    {
        country_id: {
            type: mongoose.Types.ObjectId,
            ref: "country"
        },
        state_id: {
            type: mongoose.Types.ObjectId,
            ref: "state"
        },
        city_name: {
            type: String,
            trim: true,
        },
        population: {
            type: Number,
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

const City = mongoose.model("city", citySchema);
module.exports = City
