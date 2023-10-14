const { marketingManagerService } = require("../services");

/**create marketingManager */
const createMarketingManager = async (req, res) => {
    try {
        const reqBody = req.body;
        const marketingManager = await marketingManagerService.createMarketingManager(reqBody);

        if (!marketingManager) {
            throw new Error("Marketing manager not found !");
        }

        res.status(200).json({
            success: true,
            message: "Marketing manager created !",
            data: marketingManager
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get marketingManager list */
const getMarketingManagerList = async (req, res) => {
    try {
        const getList = await marketingManagerService.getMarketingManagerList();
        if (!getList) {
            throw new Error("Marketing manager not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get marketing manager list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get marketingManager details by id*/
const getMarketingManagerDetails = async (req, res) => {
    try {
        const marketingManagerId = req.params.marketingManagerId;
        const getDetails = await marketingManagerService.getMarketingManagerById(marketingManagerId);

        if (!getDetails) {
            throw new Error("Marketing manager not found !");
        }

        res.status(200).json({
            success: true,
            message: "Marketing manager details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**marketingManager details update by id */
const updateMarketingManager = async (req, res) => {
    try {
        const marketingManagerId = req.params.marketingManagerId;
        const marketingManagerExist = await marketingManagerService.getMarketingManagerById(marketingManagerId);

        if (!marketingManagerExist) {
            throw new Error("Marketing manager not found !");
        }

        await marketingManagerService.updateMarketingManager(marketingManagerId, req.body);

        res.status(200).json({
            success: true,
            message: "Marketing manager details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete marketingManager */
const deleteMarketingManager = async (req, res) => {
    try {
        const marketingManagerExists = await marketingManagerService.getMarketingManagerById(req.params.marketingManagerId);
        if (!marketingManagerExists) {
            throw new Error("Marketing manager not found !");
        }

        await marketingManagerService.deleteMarketingManager(req.params.marketingManagerId);

        res.status(200).json({
            success: true,
            message: "marketingManager deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createMarketingManager,
    getMarketingManagerList,
    getMarketingManagerDetails,
    updateMarketingManager,
    deleteMarketingManager
}