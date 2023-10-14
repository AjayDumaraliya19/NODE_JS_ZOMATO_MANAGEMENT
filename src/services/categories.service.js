const { Categories } = require("../models");

/**create Categories */
const createCategories = async (reqBody) => {
    return Categories.create(reqBody);
}

/**get Categories list */
const getCategoriesList = async (req, res) => {
    return Categories.find()
        .populate({
            path: "menuItems_id",
            select: "name , description"
        });
}

/**get Categories details by id */
const getCategoriesById = async (categoriesId) => {
    return Categories.findById(categoriesId);
}

/**update Categories */
const updateCategories = async (categoriesId, updateBody) => {
    return Categories.findByIdAndUpdate(categoriesId, { $set: updateBody });
}

/**delete Categories */
const deleteCategories = async (categoriesId) => {
    return Categories.findByIdAndDelete(categoriesId);
}

module.exports = {
    createCategories,
    getCategoriesList,
    getCategoriesById,
    updateCategories,
    deleteCategories
}