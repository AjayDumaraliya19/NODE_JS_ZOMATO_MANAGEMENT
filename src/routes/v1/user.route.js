const express = require("express");
const { userValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { userController } = require("../../controllers");
const { auth } = require("../../middlewares/auth");

const router = express.Router();

/**create user */
router.post(
    "/createUser",
    auth(),
    validate(userValidation.createUser),
    userController.createUser
);

/**get user list */
router.get(
    "/getUserList",
    userController.getUserList
);

/**get user details */
router.get(
    "/getUserDetails/:userId",
    userController.getUserDetails
);

/**update user */
router.put(
    "/updateUser/:userId",
    userController.updateUser
);

/**delete user */
router.delete(
    "/deleteUser/:userId",
    userController.deleteUser
);

/**send mail */
router.post(
    "/sendMail",
    userController.sendMail
);

/**User register */
router.post(
    "/register",
    userController.register
);

/**User login */
router.post(
    "/login",
    userController.login
);

/**Get all user */
router.get(
    "/allUsers",
    userController.getAllUser
);

module.exports = router;