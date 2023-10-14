const fs = require("fs");
const { bannerService } = require("../services");

/** Create Banner */
const createBanner = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.banner_image = req.file.filename;
    } else {
      throw new Error("Banner image is required -!-");
    }

    const banner = await bannerService.createBanner(reqBody);

    res.status(200).json({
      success: true,
      message: "Banner create successfully :)",
      data: banner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later -!-",
    });
  }
};

/** Get Banner list */
const getBannerList = async (req, res) => {
  try {
    const bannerList = await bannerService.getBannerList();

    res.status(200).json({
      success: true,
      message: "Banner list dispatch successfully :)",
      data: bannerList,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later -!-",
    });
  }
};

module.exports = {
  createBanner,
  getBannerList,
};
