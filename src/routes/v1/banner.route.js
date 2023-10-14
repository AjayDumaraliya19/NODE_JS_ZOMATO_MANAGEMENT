const express = require("express");
const { bannerValidation } = require("../../validations");
const { bannerController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create banner route */
router.post(
  "/create_banner",
  //   auth(),
  upload.single("banner_image"),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);

/** Get banner list route */
router.get(
  "/get_banner_list",
  validate(bannerValidation.getDetails),
  bannerController.getBannerList
);

/** Exports all data here */
module.exports = router;
