const { blogService } = require("../services");

/** create blog*/
const createBlog = async (req, res) => {
  try {
    const reqBody = req.body;
    const blog = await blogService.createBlog(reqBody);
    if (!blog) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { blog },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get blog list*/
const getBlogList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await blogService.getBlogList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Blogs successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get blog details by id*/
const getDetails = async (req, res) => {
  try {
    const getDetails = await blogService.getBlogById(req.params.blogId);
    if (!getDetails) {
      throw new Error("ooppsss!... Blog not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Blog successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** blog details update by id*/
const updateDetails = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("Blog not found!");
    }

    await blogService.updateDetails(blogId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Blog details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete blog by id*/
const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blogExists = await blogService.getBlogById(blogId);
    if (!blogExists) {
      throw new Error("Blog not found!");
    }

    await blogService.deleteBlog(blogId);

    res.status(200).json({
      success: true,
      message: "Blog delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogList,
  getDetails,
  updateDetails,
  deleteBlog,
};
