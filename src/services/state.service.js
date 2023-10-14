const { State } = require("../models");

/** Create state service */
const createState = async (reqBody) => {
  return await State.create(reqBody);
};

/** Get state list service */
const getStateList = async () => {
  return await State.find();
};

/** Get state by Id service */
const gtestateById = async (stateId) => {
  return await State.findById(stateId);
};

/** Get state by name service */
const getStateByName = async (state_name) => {
  return await State.findOne({ state_name });
};

/** Update state by Id service */
const updateState = async (stateuId, updateBody) => {
  return await State.findByIdAndUpdate(
    stateuId,
    { $set: updateBody },
    { new: true }
  );
};

/** Delete state by Id service */
const deleteState = async (stateId) => {
  return await State.findByIdAndDelete(stateId);
};

module.exports = {
  createState,
  getStateList,
  gtestateById,
  getStateByName,
  updateState,
  deleteState,
};
