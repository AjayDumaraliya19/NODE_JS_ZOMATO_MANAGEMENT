const { User } = require("../models");

/** Create User service */
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

/** Get User list service */
const getUserList = async () => {
  return await User.find();
};

/** Get User by id service */
const getUserById = async (userId) => {
  return await User.findById(userId);
};

/** Get user By email service */
const getUserByEmail = async (email) => {
  return await User.findOne(email);
};

/** Update User details By Id service */
const updateUser = async (userId, updateBody) => {
  return await User.findByIdAndUpdate(
    userId,
    { $set: updateBody },
    { new: true }
  );
};

/** Delete user list service */
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

/** Get all user service */
const getAllUser = async (role) => {
  return await User.find(role);
};

/** Exports all modules here */
module.exports = {
  createUser,
  getUserList,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  getAllUser,
};
