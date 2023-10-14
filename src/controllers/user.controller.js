const { userService } = require("../services");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const bcrypt = require("bcryptjs");

/** Register/Create user controller */
const createUser = async (req, res) => {
  try {
    const reqBody = req.body;

    let option = {
      first_name: reqBody.first_name,
      last_name: reqBody.last_name,
      password: reqBody.password,
      email: reqBody.email,
      address: reqBody.address,
      role: reqBody.role,
      exp: moment().add(1, "days").unix(),
    };

    const hasPassword = await bcrypt.hash(reqBody.password, 10);

    const token = await jwt.sign(option, config.jwt.secret_key);

    const filterData = {
      first_name: reqBody.first_name,
      last_name: reqBody.last_name,
      password: hasPassword,
      email: reqBody.email,
      address: reqBody.address,
      role: reqBody.role,
      token: token,
    };

    const userExist = await userService.createUser(filterData);
    if (!userExist) {
      throw new Error("Something went wrong --!--");
    }

    res.status(200).json({
      success: true,
      message: "User created successfully :)",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Something went wrong --!--",
      stack: error.stack,
    });
  }
};

/** Get User list controller */
const getUserList = async (req, res) => {
  try {
    const getList = await userService.getUserList();
    res.status(200).json({
      success: true,
      message: "Get user successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/** Get User by Id controller */
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing Went wrong!",
    });
  }
};

/** User update by Id controller */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);

    if (!userExist) {
      throw new Error("User not found!");
    }

    userService.updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!",
      data: userExist,
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/** Delete User controller */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userExist = await userService.getUserById(userId);
    if (!userExist) {
      throw new Error("User not found!");
    }

    userService.deleteUser(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details delete successfully!",
    });
  } catch (error) {
    res.status(error?.status || 400).json({
      success: false,
      message: error?.message || "Somthing went wrong!",
    });
  }
};

/* ------------------------ Exports all modules here ------------------------ */
module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateUser,
  deleteUser,
};
