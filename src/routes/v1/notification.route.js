const express = require("express");
const { notificationValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { notificationController } = require("../../controllers");

const router = express.Router();

/**create notification */
router.post(
    "/createNotification",
    validate(notificationValidation.createNotification),
    notificationController.createNotification
);

/**get notification list */
router.get(
    "/getNotificationList",
    notificationController.getNotificationList
);

/**get notification details */
router.get(
    "/getNotificationDetails/:notificationId",
    notificationController.getNotificationDetails
);

/**update notification */
router.put(
    "/updateNotification/:notificationId",
    notificationController.updateNotification
);

/**delete notification */
router.delete(
    "/deleteNotification/:notificationId",
    notificationController.deleteNotification
);

module.exports = router;