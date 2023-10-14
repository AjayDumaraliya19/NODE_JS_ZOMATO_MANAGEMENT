const express = require("express");
const { favoriteValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { favoriteController } = require("../../controllers");

const router = express.Router();

/**create favorite */
router.post(
    "/createFavorite",
    validate(favoriteValidation.createFavorite),
    favoriteController.createFavorite
);

/**get favorite list*/
router.get(
    "/getFavoriteList",
    favoriteController.getFavoriteList
);

/**get favorite details*/
router.get(
    "/favoriteDetails/:favoriteId",
    favoriteController.getFavoriteDetails
);

/**update favorite*/
router.put(
    "/update/:favoriteId",
    favoriteController.updateFavorite
);

/**delete favorite */
router.delete(
    "/delete/:favoriteId",
    favoriteController.deleteFavorite
);

module.exports = router