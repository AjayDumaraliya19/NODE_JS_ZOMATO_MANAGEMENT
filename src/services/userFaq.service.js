const { UserFaq } = require("../models");

/**Create userfaq */
const createUserFaq = async (reqBody) => {
  return UserFaq.create(reqBody);
};

/**Get userfaq list */
const getUserFaqList = async () => {
  return UserFaq.find({ $or: [{ is_active: true }] })
    .populate({
      path: "user_id",
      select: "user_name"
    });
};

/**Get userfaq details by id */
const getUserFaqById = async (userFaqId) => {
  return UserFaq.findById(userFaqId);
};

/** userfaq details update by id */
const updateDetails = async (userFaqId, updateBody) => {
  return UserFaq.findByIdAndUpdate(userFaqId, { $set: updateBody });
};

/**Delete userfaq */
const deleteUserFaq = async (userFaqId) => {
  return UserFaq.findByIdAndDelete(userFaqId);
};

module.exports = {
  createUserFaq,
  getUserFaqList,
  getUserFaqById,
  updateDetails,
  deleteUserFaq,
};
