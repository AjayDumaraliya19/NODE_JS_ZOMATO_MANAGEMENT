const { CustomerStory } = require("../models");

/**Create customerStory */
const createCustomerStory = async (reqBody) => {
  return CustomerStory.create(reqBody);
};

/**Get customerStory list */
const getCustomerStoryList = async () => {
  return CustomerStory.find({ $or: [{ is_active: true }] })
    .populate({
      path: "user_id",
      select: "user_name , email"
    })
};

/**Get customerStory details by id */
const getCustomerStoryById = async (customerStoryId) => {
  return CustomerStory.findById(customerStoryId);
};

/**customerStory details update by id */
const updateDetails = async (customerStoryId, updateBody) => {
  return CustomerStory.findByIdAndUpdate(customerStoryId, { $set: updateBody });
};

/**Delete customerStory */
const deleteCustomerStory = async (customerStoryId) => {
  return CustomerStory.findByIdAndDelete(customerStoryId);
};

module.exports = {
  createCustomerStory,
  getCustomerStoryList,
  getCustomerStoryById,
  updateDetails,
  deleteCustomerStory,
};
