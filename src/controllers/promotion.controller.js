const { promotionService } = require("../services");

/**create record */
const createPromotion = async (req, res) => {
    try {
        const reqBody = req.body;
        const promotion = await promotionService.createPromotion(reqBody);
        if (!promotion) {
            throw new Error("Promotion not found !");
        }

        res.status(200).json({
            success: true,
            message: "Promotion created successfully !",
            data: promotion
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get promotion list */
const getPromotionList = async (req, res) => {
    try {
        const getList = await promotionService.getPromotionList();
        if (!getList) {
            throw new Error("Promotion not found !");
        }

        res.status(200).json({
            success: true,
            message: "Promotion list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get promotions by details */
const getPromotionDetails = async (req, res) => {
    try {
        const promotionId = req.params.promotionId;
        const promotionEx = await promotionService.getPromotionById(promotionId);
        if (!promotionEx) {
            throw new Error("Promotion not found !");
        }

        res.status(200).json({
            success: true,
            message: "Promotion get successsfully !",
            data: promotionEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update promotion details */
const updatePromotion = async (req, res) => {
    try {
        const promotionId = req.params.promotionId
        const promotionExist = await promotionService.getPromotionById(promotionId);
        if (!promotionExist) {
            throw new Error("Promotion not found !");
        }

        await promotionService.updatePromotion(promotionId, req.body);

        res.status(200).json({
            success: true,
            message: "Promotion is updated successfully !",
            data: promotionExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete promotion */
const deletePromotion = async (req, res) => {
    try {
        const promotionId = req.params.promotionId;
        const promotionExists = await promotionService.getPromotionById(promotionId);
        if (!promotionExists) {
            throw new Error("Promotion not found !");
        }

        await promotionService.deletePromotion(promotionId);

        res.status(200).json({
            success: true,
            message: "promotion record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createPromotion,
    getPromotionDetails,
    getPromotionList,
    updatePromotion,
    deletePromotion
}