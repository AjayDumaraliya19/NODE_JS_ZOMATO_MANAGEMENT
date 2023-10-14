const { Blog } = require("../models");

/**Create blog */
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};

/**Get blog list */
const getBlogList = async () => {
  return Blog.find({ $or: [{ is_active: true }] })
    .populate({
      path: "contentCreater_id"
    })
};

/**Get blog details by id */
const getBlogById = async (blogId) => {
  return Blog.findById(blogId);
};

/**blog details update by id */
const updateDetails = async (blogId, updateBody) => {
  return Blog.findByIdAndUpdate(blogId, { $set: updateBody });
};

/**Delete blog */
const deleteBlog = async (blogId) => {
  return Blog.findByIdAndDelete(blogId);
};

module.exports = {
  createBlog,
  getBlogList,
  getBlogById,
  updateDetails,
  deleteBlog,
};
