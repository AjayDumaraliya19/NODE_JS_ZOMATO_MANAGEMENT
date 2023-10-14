const mongoose = require("mongoose");

/**Data analysts schema */
const dataAnalysisSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref : "user"
        },
        analyst_project: {
            type: String,
            trim: true
        },
        analysis_results: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const DataAnalysis = mongoose.model("dataAnalysis", dataAnalysisSchema);
module.exports = DataAnalysis