const express = require("express");
const { blogValidation } = require("../../validations");
const { blogController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create blog */
router.post(
  "/create-blog",
  validate(blogValidation.createBlog),
  blogController.createBlog
);

/** Get blog list */
router.get(
  "/list",
  blogController.getBlogList
);

/** Get blog details by id */
router.get(
  "/get-details/:blogId",
  blogController.getDetails
);

/** blog details update by id */
router.put(
  "/update-details/:blogId",
  blogController.updateDetails
);

/** Delete blog */
router.delete(
  "/delete-blog/:blogId",
  blogController.deleteBlog
);

module.exports = router;
