const { reviewService } = require("../services");

/**create review */
const createReview = async (req, res) => {
    try {
        const reqBody = req.body;
        const review = await reviewService.createReview(reqBody);

        if (!review) {
            throw new Error("Review not found !");
        }

        res.status(200).json({
            success: true,
            message: "Review created !",
            data: review
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get review list */
const getReviewList = async (req, res) => {
    try {
        const getList = await reviewService.getReviewList();
        if (!getList) {
            throw new Error("Review not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get Review list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get review details by id*/
const getReviewDetails = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const getDetails = await reviewService.getReviewById(reviewId);

        if (!getDetails) {
            throw new Error("Review not found !");
        }

        res.status(200).json({
            success: true,
            message: "Review details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**review details update by id */
const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.reviewId;
        const reviewExist = await reviewService.getReviewById(reviewId);

        if (!reviewExist) {
            throw new Error("Review not found !");
        }

        await reviewService.updateReview(reviewId, req.body);

        res.status(200).json({
            success: true,
            message: "Review details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete review */
const deleteReview = async (req, res) => {
    try {
        const reviewExists = await reviewService.getReviewById(req.params.reviewId);
        if (!reviewExists) {
            throw new Error("Review not found !");
        }

        await reviewService.deleteReview(req.params.reviewId);

        res.status(200).json({
            success: true,
            message: "Review deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createReview,
    getReviewList,
    getReviewDetails,
    updateReview,
    deleteReview
}