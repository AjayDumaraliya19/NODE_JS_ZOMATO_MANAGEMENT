/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
module.exports.userValidation = require("./user.validation");
module.exports.adminUserValidation = require("./adminUser.validation");
module.exports.userSettingValidation = require("./userSetting.validation");
module.exports.deliveryAddressValidation = require("./deliveryAddress.validation");
module.exports.contentCreaterValidation = require("./contentCreater.validation");
module.exports.customerStoryValidation = require("./customerStory.validation");
module.exports.blogValidation = require("./blog.validation");
module.exports.userFaqValidation = require("./userFaq.validation");

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
module.exports.chatValidation = require("./chat.validation");
module.exports.chatMessageValidation = require("./chatMessage.validation");
module.exports.messageValidation = require("./message.validation");
module.exports.notificationValidation = require("./notification.validation");

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
module.exports.restaurantValidation = require("./restaurant.validation");
module.exports.restaurantOwnersValidation = require("./restaurantOwners.validation");
module.exports.restaurantHourValidation = require("./restaurantHour.validation");
module.exports.menuItemsValidation = require("./menuItems.validation");
module.exports.ordersValidation = require("./orders.validation");
module.exports.favoriteValidation = require("./favorite.validation");
module.exports.specialValidation = require("./special.validation");
module.exports.reviewValidation = require("./review.validation");
module.exports.ratingValidation = require("./rating.validation");
module.exports.addressValidation = require("./address.validation");
module.exports.categoriesValidation = require("./categories.validation");
module.exports.orderItemValidation = require("./orderItem.validation");
module.exports.complaintValidation = require("./complaint.validation");
module.exports.promocodeValidation = require("./promocode.validation");

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
module.exports.deliveryDriverValidation = require("./deliveryDriver.validation");
module.exports.deliveryAssignmentValidation = require("./deliveryAssignment.validation");

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
module.exports.cityValidation = require("./city.validation");
module.exports.stateValidation = require("./state.validation");
module.exports.countryValidation = require("./country.validation");

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
module.exports.tokenValidation = require("./token.validation");

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
module.exports.promotionValidation = require("./promotion.validation");
module.exports.customerSupportAgentValidation = require("./cutomerSupportAgent.validation");
module.exports.marketingManagerValidation = require("./marketingManager.validation");
module.exports.dataAnalysisValidation = require("./dataAnalysis.validation");

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
module.exports.paymentMethodValidation = require("./paymentMethod.validation");
module.exports.paymentHistoryValidation = require("./paymentHistory.validation");

/* -------------------------------------------------------------------------- */
/*                            PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
module.exports.userPhotoValidation = require("./userPhoto.validation");
module.exports.restaurantPhotoValidation = require("./restaurantPhoto.validation");
