const { Promotion } = require("../models");

/**create Promotion */
const createPromotion = async (reqBody) => {
    return Promotion.create(reqBody);
}

/**get Promotion list */
const getPromotionList = async (req, res) => {
    return Promotion.find()
        .populate({ path: "restaurant_id", select: "name" })
        .populate({ path: "marketingManager_id", select: "campaign_name , promotion_details" })
}

/**get Promotion details by id */
const getPromotionById = async (promotionId) => {
    return Promotion.findById(promotionId);
}

/**update Promotion */
const updatePromotion = async (promotionId, updateBody) => {
    return Promotion.findByIdAndUpdate(promotionId, { $set: updateBody });
}

/**delete Promotion */
const deletePromotion = async (promotionId) => {
    return Promotion.findByIdAndDelete(promotionId);
}

module.exports = {
    createPromotion,
    getPromotionList,
    getPromotionById,
    updatePromotion,
    deletePromotion
}