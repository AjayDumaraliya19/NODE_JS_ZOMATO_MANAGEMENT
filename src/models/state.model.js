const mongoose = require("mongoose");

/**state schema */
const stateSchema = new mongoose.Schema(
    {
        country_id: {
            type: mongoose.Types.ObjectId,
            ref: "country"
        },
        State_name: {
            type: String,
            trim: true,
        },
        capital_city: {
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

const State = mongoose.model("state", stateSchema);
module.exports = State
