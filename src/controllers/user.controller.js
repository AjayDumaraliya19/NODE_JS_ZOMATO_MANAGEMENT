const { userService, emailService } = require("../services");
const { auth } = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const jwtSecretKey = "jwtsecretkeyhere";

/**Register */
const register = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        let option = {
            email,
            role,
            exp: moment().add(2, "days").unix(),
        };

        const token = await jwt.sign(option, jwtSecretKey);

        const filter = {
            email,
            role,
            password: hashPassword,
            token
        };

        const data = await userService.createUser(filter);

        res.status(200).json({
            success: true,
            message: data,
            token
        });
    } catch (error) {
        res.status(401).json({
            success: true,
            message: "Please authenticate !"
        });
    }
}

/**Login */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const findUser = await userService.findUserByEmail({ email });
        if (!findUser) {
            throw new Error("User not found !");
        }

        const successPassword = await bcrypt.compare(password, findUser.password);
        if (!successPassword) {
            throw new Error("Incorrect password !");
        }

        let option = {
            email,
            role: findUser.role,
            exp: moment().add(1, "days").unix()
        };

        let token;
        if (findUser && successPassword) {
            token = await jwt.sign(option, jwtSecretKey);
        }

        let data;
        if (token) {
            console.log("start")
            data = await userService.findUserAndUpdate(findUser._id, token);
        }

        res.status(200).json({
            success: true,
            message: data,
            token
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Incorrect email or password !"
        });
    }
}

/**Get all users */
const getAllUser = async (req, res) => {
    try {
        await auth(req.headers.token, ['adminUser']);
        const data = await userService.getAllUser({ role: "adminUser" });
        res.status(200).json({ data });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

/**Create user */
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);

        if (!user) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "User created !",
            data: user
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**Get user list */
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList();
        if (!getList) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get user list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**Get user details by id*/
const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const getDetails = await userService.getUserById(userId);

        if (!getDetails) {
            throw new Error("User not found !");
        }

        res.status(200).json({
            success: true,
            message: "User details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**User details update by id */
const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExist = await userService.getUserById(userId);

        if (!userExist) {
            throw new Error("User not found !");
        }

        await userService.updateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "User details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**Delete user */
const deleteUser = async (req, res) => {
    try {
        const userExists = await userService.getUserById(req.params.userId);
        if (!userExists) {
            throw new Error("User not found !");
        }

        await userService.deleteUser(req.params.userId);

        res.status(200).json({
            success: true,
            message: "User deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**Send mail */
const sendMail = async (req, res) => {
    try {
        const reqBody = req.body;
        const sendMail = await emailService.sendMail(
            reqBody.email,
            reqBody.subject,
            reqBody.text
        );

        if (!sendMail) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "Email send successfully !"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUser,
    sendMail,
    deleteUser,
    register,
    login,
    getAllUser
}