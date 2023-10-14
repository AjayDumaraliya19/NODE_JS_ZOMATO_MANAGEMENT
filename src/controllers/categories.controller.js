const { categoriesService } = require("../services");

/**create categories */
const createCategories = async (req, res) => {
    try {
        const reqBody = req.body;
        const categories = await categoriesService.createCategories(reqBody);

        if (!categories) {
            throw new Error("Categories creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Categories creater created !",
            data: categories
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get categories list */
const getCategoriesList = async (req, res) => {
    try {
        const getList = await categoriesService.getCategoriesList();
        if (!getList) {
            throw new Error("Categories creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get Categories creater list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get categories details by id*/
const getCategoriesDetails = async (req, res) => {
    try {
        const categoriesId = req.params.categoriesId;
        const getDetails = await categoriesService.getCategoriesById(categoriesId);

        if (!getDetails) {
            throw new Error("Categories creater not found !");
        }

        res.status(200).json({
            success: true,
            message: "Categories creater details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**categories details update by id */
const updateCategories = async (req, res) => {
    try {
        const categoriesId = req.params.categoriesId;
        const categoriesExist = await categoriesService.getCategoriesById(categoriesId);

        if (!categoriesExist) {
            throw new Error("Categories creater not found !");
        }

        await categoriesService.updateCategories(categoriesId, req.body);

        res.status(200).json({
            success: true,
            message: "Categories creater details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete categories */
const deleteCategories = async (req, res) => {
    try {
        const categoriesExists = await categoriesService.getCategoriesById(req.params.categoriesId);
        if (!categoriesExists) {
            throw new Error("Categories creater not found !");
        }

        await categoriesService.deleteCategories(req.params.categoriesId);

        res.status(200).json({
            success: true,
            message: "Categories creater deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createCategories,
    getCategoriesList,
    getCategoriesDetails,
    updateCategories,
    deleteCategories
}