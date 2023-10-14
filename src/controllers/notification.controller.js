const { notificationService } = require("../services");

/**create record */
const createNotification = async (req, res) => {
    try {
        const reqBody = req.body;
        const notification = await notificationService.createNotification(reqBody);
        if (!notification) {
            throw new Error("Notification not found !");
        }

        res.status(200).json({
            success: true,
            message: "Notification created successfully !",
            data: notification
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get notification list */
const getNotificationList = async (req, res) => {
    try {
        const getList = await notificationService.getNotificationList();
        if (!getList) {
            throw new Error("Notification not found !");
        }

        res.status(200).json({
            success: true,
            message: "Notification list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get notifications by details */
const getNotificationDetails = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;
        const notificationEx = await notificationService.getNotificationById(notificationId);
        if (!notificationEx) {
            throw new Error("Notification not found !");
        }

        res.status(200).json({
            success: true,
            message: "Notification get successsfully !",
            data: notificationEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update notification details */
const updateNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId
        const notificationExist = await notificationService.getNotificationById(notificationId);
        if (!notificationExist) {
            throw new Error("Notification not found !");
        }

        await notificationService.updateNotification(notificationId, req.body);

        res.status(200).json({
            success: true,
            message: "Notification is updated successfully !",
            data: notificationExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete notification */
const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.notificationId;
        const notificationExists = await notificationService.getNotificationById(notificationId);
        if (!notificationExists) {
            throw new Error("Notification not found !");
        }

        await notificationService.deleteNotification(notificationId);

        res.status(200).json({
            success: true,
            message: "Notification record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createNotification,
    getNotificationDetails,
    getNotificationList,
    updateNotification,
    deleteNotification
}