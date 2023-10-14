const { DataAnalysis } = require("../models");

/**create DataAnalysis */
const createDataAnalysis = async (reqBody) => {
    return DataAnalysis.create(reqBody);
}

/**get DataAnalysis list */
const getDataAnalysisList = async (req, res) => {
    return DataAnalysis.find().populate({ path: "user_id", select: "user_name" });
}

/**get DataAnalysis details by id */
const getDataAnalysisById = async (dataAnalysisId) => {
    return DataAnalysis.findById(dataAnalysisId);
}

/**update DataAnalysis */
const updateDataAnalysis = async (dataAnalysisId, updateBody) => {
    return DataAnalysis.findByIdAndUpdate(dataAnalysisId, { $set: updateBody });
}

/**delete DataAnalysis */
const deleteDataAnalysis = async (dataAnalysisId) => {
    return DataAnalysis.findByIdAndDelete(dataAnalysisId);
}

module.exports = {
    createDataAnalysis,
    getDataAnalysisList,
    getDataAnalysisById,
    updateDataAnalysis,
    deleteDataAnalysis
}