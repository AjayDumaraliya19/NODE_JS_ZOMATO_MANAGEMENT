const { MarketingManager } = require("../models");

/**create MarketingManager */
const createMarketingManager = async (reqBody) => {
    return MarketingManager.create(reqBody);
}

/**get MarketingManager list */
const getMarketingManagerList = async (req, res) => {
    return MarketingManager.find().populate({path: "user_id" , select: "user_name"});
}

/**get MarketingManager details by id */
const getMarketingManagerById = async (marketingManagerId) => {
    return MarketingManager.findById(marketingManagerId);
}

/**update MarketingManager */
const updateMarketingManager = async (marketingManagerId, updateBody) => {
    return MarketingManager.findByIdAndUpdate(marketingManagerId, { $set: updateBody });
}

/**delete MarketingManager */
const deleteMarketingManager = async (marketingManagerId) => {
    return MarketingManager.findByIdAndDelete(marketingManagerId);
}

module.exports = {
    createMarketingManager,
    getMarketingManagerList,
    getMarketingManagerById,
    updateMarketingManager,
    deleteMarketingManager
}