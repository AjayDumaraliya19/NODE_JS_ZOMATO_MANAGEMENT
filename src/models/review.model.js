const mongoose = require("mongoose");

/**review schema */
const reviewSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        restaurant_id: {
            type: mongoose.Types.ObjectId,
            ref : "restaurant"
        },
        rating: {
            type: Number,
            trim: true
        },
        comment: {
            type: String,
            trim: true
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

const Review = mongoose.model("review", reviewSchema);
module.exports = Review