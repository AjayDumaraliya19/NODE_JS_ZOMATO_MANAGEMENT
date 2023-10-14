const express = require("express");
const { categoriesValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { categoriesController } = require("../../controllers");

const router = express.Router();

/**create categories */
router.post(
    "/createCategories",
    validate(categoriesValidation.createCategories),
    categoriesController.createCategories
);

/**get categories list */
router.get(
    "/getCategoriesList",
    categoriesController.getCategoriesList
);

/**get categories details */
router.get(
    "/getCategoriesDetails/:categoriesId",
    categoriesController.getCategoriesDetails
);

/**update categories */
router.put(
    "/updateCategories/:categoriesId",
    categoriesController.updateCategories
);

/**delete categories */
router.delete(
    "/deleteCategories/:categoriesId",
    categoriesController.deleteCategories
)

module.exports = router;