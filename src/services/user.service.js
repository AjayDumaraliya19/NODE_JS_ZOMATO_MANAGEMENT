const { User } = require("../models");

/**create user */
const createUser = async (reqBody) => {
    return User.create(reqBody);
}

/**Find user by email */
const findUserByEmail = async (email) => {
    return await User.findOne(email)
}

/**Find user and update */
const findUserAndUpdate = async (_id, token) => {
    return await User.findByIdAndUpdate(
        { _id },
        {
            $set: { token },
        },
        { new: true }
    );
};

/**Get all user */
const getAllUser = async (role) => {
    return await User.find(role);
}

/**get user list */
const getUserList = async (req, res) => {
    return User.find();
}

/**get user details by id */
const getUserById = async (userId) => {
    return User.findById(userId);
}

/**update user */
const updateUser = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody });
}

/**delete user */
const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUserList,
    getUserById,
    updateUser,
    deleteUser,
    findUserByEmail,
    findUserAndUpdate,
    getAllUser
}