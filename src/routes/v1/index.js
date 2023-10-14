const express = require("express");
/* -------------------------------------------------------------------------- */
/*                                    USERS                                   */
/* -------------------------------------------------------------------------- */
const userRoute = require("./user.route");
const adminUserRoute = require("./adminUser.route");
const userSettingRoute = require("./userSetting.route");
const deliveryAddressRoute = require("./deliveryAddress.route");
const contentCreaterRoute = require("./contentCreater.route");
const customerStoryRoute = require("./customerStory.route");
const blogRoute = require("./blog.route");
const userFaqRoute = require("./userFaq.route");

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
const chatRoute = require("./chat.route");
const chatMessageRoute = require("./chatMessage.route");
const messageRoute = require("./message.route");
const notificationRoute = require("./notification.route");

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
const restaurantRoute = require("./restaurant.route");
const restaurantOwnersRoute = require("./restaurantOwners.route");
const restaurantHourRoute = require("./restaurantHour.route");
const menuItemsRoute = require("./menuItems.route");
const orderRoute = require("./order.route");
const favoriteRoute = require("./favorite.route");
const specialRoute = require("./special.route");
const ratingRoute = require("./rating.route");
const reviewRoute = require("./review.route");
const addressRoute = require("./address.route");
const categoriesRoute = require("./categories.route");
const complaintRoute = require("./complaint.route");
const promocodeRoute = require("./promocode.route");
const orderItemRoute = require("./orderItem.route");

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
const deliveryDriverRoute = require("./deliveryDriver.route");
const deliveryAssignmentRoute = require("./deliveryAssignment.route");

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
const cityRoute = require("./city.route");
const stateRoute = require("./state.route");
const countryRoute = require("./country.route");

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
const tokenRoute = require("./token.route");

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
const promotionRoute = require("./promotion.route");
const customerSupportAgentRoute = require("./customerSupportAgent.route");
const marketingManagerRoute = require("./marketingManager.route");
const dataAnalysisRoute = require("./dataAnalysis.route");

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
const paymentMethodRoute = require("./paymentMethod.route");
const paymentHistoryRoute = require("./paymentHistoryroute");

/* -------------------------------------------------------------------------- */
/*                            PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
const userPhotoRoute = require("./userPhoto.route");
const restaurantPhotoRoute = require("./restaurantPhoto.Route");

const router = express.Router();

/* -------------------------------------------------------------------------- */
/*                                    USERS                                   */
/* -------------------------------------------------------------------------- */
router.use("/user", userRoute);
router.use("/adminUser" , adminUserRoute);
router.use("/userSetting", userSettingRoute);
router.use("/deliveryAddress", deliveryAddressRoute);
router.use("/contentCreater" , contentCreaterRoute);
router.use("/customerStory" , customerStoryRoute);
router.use("/blog" , blogRoute);
router.use("/userFaq" , userFaqRoute);

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
router.use("/chat", chatRoute);
router.use("/chatMessage", chatMessageRoute);
router.use("/message", messageRoute);
router.use("/notification" , notificationRoute);

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
router.use("/restaurants" , restaurantRoute);
router.use("/restaurantOwners", restaurantOwnersRoute);
router.use("/restaurantHour", restaurantHourRoute);
router.use("/menuItems" , menuItemsRoute);
router.use("/order" , orderRoute);
router.use("/favorite" , favoriteRoute);
router.use("/special", specialRoute);
router.use("/rating", ratingRoute);
router.use("/review" , reviewRoute);
router.use("/address" , addressRoute);
router.use("/categories" , categoriesRoute);
router.use("/complaint", complaintRoute);
router.use("/promocode", promocodeRoute);
router.use("/orderItem", orderItemRoute);

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
router.use("/deliveryDriver", deliveryDriverRoute);
router.use("/deliveryAssignment", deliveryAssignmentRoute);

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
router.use("/city", cityRoute);
router.use("/state", stateRoute);
router.use("/country", countryRoute);

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
router.use("/token", tokenRoute);

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
router.use("/promotion" , promotionRoute);
router.use("/customerSupportAgent" , customerSupportAgentRoute);
router.use("/marketingManager" , marketingManagerRoute);
router.use("/dataAnalysis" , dataAnalysisRoute);

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
router.use("/paymentMethod" , paymentMethodRoute);
router.use("/paymentHistory" , paymentHistoryRoute);

/* -------------------------------------------------------------------------- */
/*                            PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
router.use("/userPhoto", userPhotoRoute);
router.use("/restaurantPhoto", restaurantPhotoRoute);

module.exports = router;