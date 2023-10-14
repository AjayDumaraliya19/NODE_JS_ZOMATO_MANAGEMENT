const mongoose = require("mongoose");

/**country schema */
const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type: String,
            trim: true,
        },
        continent_name: {
            type: String,
            trim: true,
        },
        official_language: {
            type: String,
            trim: true,
        },
        currency: {
            type: String,
            trim: true
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

const Country = mongoose.model("country", countrySchema);
module.exports = Country