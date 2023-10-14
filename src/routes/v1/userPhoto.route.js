const express = require("express");
const { userPhotoValidation } = require("../../validations");
const { userPhotoController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");

const router = express.Router();

/** create UserPhoto */
router.post(
  "/create-UserPhoto",
  upload.single("userPhoto_image"),
  validate(userPhotoValidation.createUserPhoto),
  userPhotoController.createUserPhoto
);

/** Get UserPhoto list */
router.get(
  "/list",
  userPhotoController.getUserPhotoList
);

/** Get UserPhoto details by id */
router.get(
  "/get-details/:userPhotoId",
  userPhotoController.getDetails
);

/** UserPhoto details update by id */
router.put(
  "/update-details/:userPhotoId",
  userPhotoController.updateDetails
);

/** Delete UserPhoto */
router.delete(
  "/delete-UserPhoto/:userPhotoId",
  userPhotoController.deleteUserPhoto
);

module.exports = router;
