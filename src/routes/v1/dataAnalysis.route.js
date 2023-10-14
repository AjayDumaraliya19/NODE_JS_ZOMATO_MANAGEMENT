const express = require("express");
const { dataAnalysisValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { dataAnalysisController } = require("../../controllers");

const router = express.Router();

/**create dataAnalysis */
router.post(
    "/createDataAnalysis",
    validate(dataAnalysisValidation.createDataAnalysis),
    dataAnalysisController.createDataAnalysis
);

/**get dataAnalysis list */
router.get(
    "/getDataAnalysisList",
    dataAnalysisController.getDataAnalysisList
);

/**get dataAnalysis details */
router.get(
    "/getDataAnalysisDetails/:dataAnalysisId",
    dataAnalysisController.getDataAnalysisDetails
);

/**update dataAnalysis */
router.put(
    "/updateDataAnalysis/:dataAnalysisId",
    dataAnalysisController.updateDataAnalysis
);

/**delete dataAnalysis */
router.delete(
    "/deleteDataAnalysis/:dataAnalysisId",
    dataAnalysisController.deleteDataAnalysis
)

module.exports = router;