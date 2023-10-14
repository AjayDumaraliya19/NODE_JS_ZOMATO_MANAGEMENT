const { Review } = require("../models");

/**create Review */
const createReview = async (reqBody) => {
    return Review.create(reqBody);
}

/**get Review list */
const getReviewList = async (req, res) => {
    return Review.find()
        .populate({
            path: "user_id",
            select: "user_name , preferences"
        })
        .populate({
            path: "restaurant_id",
            select: "name"
        });
}

/**get Review details by id */
const getReviewById = async (reviewId) => {
    return Review.findById(reviewId);
}

/**update Review */
const updateReview = async (reviewId, updateBody) => {
    return Review.findByIdAndUpdate(reviewId, { $set: updateBody });
}

/**delete Review */
const deleteReview = async (reviewId) => {
    return Review.findByIdAndDelete(reviewId);
}

module.exports = {
    createReview,
    getReviewList,
    getReviewById,
    updateReview,
    deleteReview
}