const express = require("express");
const { contentCreaterValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { contentCreaterController } = require("../../controllers");

const router = express.Router();

/**create contentCreater */
router.post(
    "/createContentCreater",
    validate(contentCreaterValidation.createContentCreater),
    contentCreaterController.createContentCreater
);

/**get contentCreater list */
router.get(
    "/getContentCreaterList",
    contentCreaterController.getContentCreaterList
);

/**get contentCreater details */
router.get(
    "/getContentCreaterDetails/:contentCreaterId",
    contentCreaterController.getContentCreaterDetails
);

/**update contentCreater */
router.put(
    "/updateContentCreater/:contentCreaterId",
    contentCreaterController.updateContentCreater
);

/**delete contentCreater */
router.delete(
    "/deleteContentCreater/:contentCreaterId",
    contentCreaterController.deleteContentCreater
)

module.exports = router;