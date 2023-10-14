const { Special } = require("../models");

/** Create special */
const createSpecial = async (reqBody) => {
  return Special.create(reqBody);
};

/** Get special list */
const getSpecialList = async () => {
  return Special.find({ $or: [{ is_active: true }] })
    .populate({
      path: "restaurant_id",
      select: "name"
    })
};

/** Get special details by id */
const getSpecialById = async (specialId) => {
  return Special.findById(specialId);
};

/** special details update by id */
const updateDetails = async (specialId, updateBody) => {
  return Special.findByIdAndUpdate(specialId, { $set: updateBody });
};

/** Delete special */
const deleteSpecial = async (specialId) => {
  return Special.findByIdAndDelete(specialId);
};

module.exports = {
  createSpecial,
  getSpecialList,
  getSpecialById,
  updateDetails,
  deleteSpecial,
};
