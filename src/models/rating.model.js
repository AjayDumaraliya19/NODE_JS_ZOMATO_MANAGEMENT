const mongoose = require("mongoose");

/**rating schema */
const ratingSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref: "restaurant"
        },
        rating: {
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

const Rating = mongoose.model("rating", ratingSchema);
module.exports = Rating
