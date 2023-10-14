const { contentCreaterService } = require("../services");

/**create contentCreater */
const createContentCreater = async (req, res) => {
    try {
        const reqBody = req.body;
        const contentCreater = await contentCreaterService.createContentCreater(reqBody);

        if (!contentCreater) {
            throw new Error("Content creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Content creater created !",
            data: contentCreater
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get contentCreater list */
const getContentCreaterList = async (req, res) => {
    try {
        const getList = await contentCreaterService.getContentCreaterList();
        if (!getList) {
            throw new Error("Content creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get content creater list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get contentCreater details by id*/
const getContentCreaterDetails = async (req, res) => {
    try {
        const contentCreaterId = req.params.contentCreaterId;
        const getDetails = await contentCreaterService.getContentCreaterById(contentCreaterId);

        if (!getDetails) {
            throw new Error("Content creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Content creater details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**contentCreater details update by id */
const updateContentCreater = async (req, res) => {
    try {
        const contentCreaterId = req.params.contentCreaterId;
        const contentCreaterExist = await contentCreaterService.getContentCreaterById(contentCreaterId);

        if (!contentCreaterExist) {
            throw new Error("Content creater not found !");
        }

        await contentCreaterService.updateContentCreater(contentCreaterId, req.body);

        res.status(200).json({
            success: true,
            message: "Content creater details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete contentCreater */
const deleteContentCreater = async (req, res) => {
    try {
        const contentCreaterExists = await contentCreaterService.getContentCreaterById(req.params.contentCreaterId);
        if (!contentCreaterExists) {
            throw new Error("Content creater not found !");
        }

        await contentCreaterService.deleteContentCreater(req.params.contentCreaterId);

        res.status(200).json({
            success: true,
            message: "Content creater deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createContentCreater,
    getContentCreaterList,
    getContentCreaterDetails,
    updateContentCreater,
    deleteContentCreater
}