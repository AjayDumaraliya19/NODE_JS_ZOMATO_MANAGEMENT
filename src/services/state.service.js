const { State } = require("../models");

// Create state
const createState = async (reqBody) => {
  return State.create(reqBody);
};

/** Get state list */
const getStateList = async () => {
  return State.find({ $or: [{ is_active: true }] })
    .populate({
      path: "country_id",
      select: "country_name , currency"
    })
};

/** Get state details by id */
const getStateById = async (stateId) => {
  return State.findById(stateId);
};

/** State details update by id */
const updateDetails = async (stateId, updateBody) => {
  return State.findByIdAndUpdate(stateId, { $set: updateBody });
};

/** Delete state */
const deleteState = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
  createState,
  getStateList,
  getStateById,
  updateDetails,
  deleteState,
};
