/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
module.exports.userController = require("./user.controller");
module.exports.adminUserController = require("./adminUser.controller");
module.exports.userSettingController = require("./userSetting.controller");
module.exports.deliveryAddressController = require("./deliveryAddress.controller");
module.exports.contentCreaterController = require("./contentCreater.controller");
module.exports.customerStoryController = require("./customerStory.controller");
module.exports.blogController = require("./blog.controller");
module.exports.userFaqController = require("./userFaq.controller");

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
module.exports.chatController = require("./chat.controller");
module.exports.chatMessageController = require("./chatMessage.controller");
module.exports.messageController = require("./message.controller");
module.exports.notificationController = require("./notification.controller");

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
module.exports.restaurantController = require("./restaurant.controller");
module.exports.restaurantOwnersController = require("./restaurantOwners.controller");
module.exports.restaurantHourController = require("./restaurantHour.controller");
module.exports.menuItemsController = require("./menuItems.controller");
module.exports.orderController = require('./orders.controller');
module.exports.favoriteController = require("./favorite.controller");
module.exports.specialController = require("./special.controller");
module.exports.reviewController = require("./review.controller");
module.exports.ratingController = require("./rating.controller");
module.exports.addressController = require("./address.controller");
module.exports.categoriesController = require("./categories.controller");
module.exports.orderItemController = require("./orderItem.controller");
module.exports.complaintController = require("./complaint.controller");
module.exports.promocodeController = require("./promocode.controller");

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
module.exports.deliveryDriverController = require("./deliveryDriver.controller");
module.exports.deliveryAssignmentController = require("./deliveryAssignment.controller");

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
module.exports.cityController = require("./city.controller");
module.exports.stateController = require("./state.controller");
module.exports.countryController = require("./country.controller");

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
module.exports.tokenController = require("./token.controller");

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
module.exports.promotionController = require("./promotion.controller");
module.exports.customerSupportAgentController = require("./customerSupportAgent.controller");
module.exports.marketingManagerController = require("./marketingManager.controller");
module.exports.dataAnalysisController = require("./dataAnalysis.controller");

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
module.exports.paymentMethodController = require("./paymentMethod.controller");
module.exports.paymentHistoryController = require("./paymentHistory.controller");

/* -------------------------------------------------------------------------- */
/*                            PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
module.exports.userPhotoController = require("./userPhoto.controller");
module.exports.restaurantPhotoController = require("./restaurantPhoto.controller");
