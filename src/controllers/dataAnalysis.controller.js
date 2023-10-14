const { dataAnalysisService } = require("../services");

/**create dataAnalysis */
const createDataAnalysis = async (req, res) => {
    try {
        const reqBody = req.body;
        const dataAnalysis = await dataAnalysisService.createDataAnalysis(reqBody);

        if (!dataAnalysis) {
            throw new Error("Data Analysis not found !");
        }

        res.status(200).json({
            success: true,
            message: "Data Analysis created !",
            data: dataAnalysis
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get dataAnalysis list */
const getDataAnalysisList = async (req, res) => {
    try {
        const getList = await dataAnalysisService.getDataAnalysisList();
        if (!getList) {
            throw new Error("Data Analysis not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get data analysis list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get dataAnalysis details by id*/
const getDataAnalysisDetails = async (req, res) => {
    try {
        const dataAnalysisId = req.params.dataAnalysisId;
        const getDetails = await dataAnalysisService.getDataAnalysisById(dataAnalysisId);

        if (!getDetails) {
            throw new Error("Data Analysis not found !");
        }

        res.status(200).json({
            success: true,
            message: "Data analysis details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**dataAnalysis details update by id */
const updateDataAnalysis = async (req, res) => {
    try {
        const dataAnalysisId = req.params.dataAnalysisId;
        const dataAnalysisExist = await dataAnalysisService.getDataAnalysisById(dataAnalysisId);

        if (!dataAnalysisExist) {
            throw new Error("Data Analysis not found !");
        }

        await dataAnalysisService.updateDataAnalysis(dataAnalysisId, req.body);

        res.status(200).json({
            success: true,
            message: "Data analysis details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete dataAnalysis */
const deleteDataAnalysis = async (req, res) => {
    try {
        const dataAnalysisExists = await dataAnalysisService.getDataAnalysisById(req.params.dataAnalysisId);
        if (!dataAnalysisExists) {
            throw new Error("Data Analysis not found !");
        }

        await dataAnalysisService.deleteDataAnalysis(req.params.dataAnalysisId);

        res.status(200).json({
            success: true,
            message: "Data analysis deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createDataAnalysis,
    getDataAnalysisList,
    getDataAnalysisDetails,
    updateDataAnalysis,
    deleteDataAnalysis
}