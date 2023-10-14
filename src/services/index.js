/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */
module.exports.userService = require("./user.service");
module.exports.adminUserService = require("./adminUser.service");
module.exports.userSettingService = require("./userSetting.service");
module.exports.deliveryAddressService = require("./deliveryAddress.service");
module.exports.contentCreaterService = require("./contentCreater.service");
module.exports.customerStoryService = require("./customerStory.service");
module.exports.blogService = require("./blog.service");
module.exports.userFaqService = require("./userFaq.service");

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
module.exports.chatService = require("./chat.service");
module.exports.chatMessageService = require("./chatMessage.service");
module.exports.messageService = require("./message.service");
module.exports.notificationService = require("./notification.service");

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
module.exports.restaurantService = require("./restaurant.service");
module.exports.restaurantOwnersService = require("./restaurantOwners.service");
module.exports.restaurantHourService = require("./restaurantHour.service");
module.exports.menuItemsService = require("./menuItems.service");
module.exports.orderService = require("./order.service");
module.exports.favoriteService = require("./favorite.service");
module.exports.specialService = require("./special.service");
module.exports.reviewService = require("./review.service");
module.exports.ratingService = require("./rating.service");
module.exports.addressService = require("./address.service");
module.exports.categoriesService = require("./categories.service");
module.exports.orderItemService = require("./orderItem.service");
module.exports.complaintService = require("./complaint.service");
module.exports.promocodeService = require("./promocode.service");

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
module.exports.deliveryDriverService = require("./deliveryDriver.service");
module.exports.deliveryAssignmentService = require("./deliveryAssignment.service");

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
module.exports.cityService = require("./city.service");
module.exports.stateService = require("./state.service");
module.exports.countryService = require("./country.service");

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
module.exports.tokenService = require("./token.service");

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
module.exports.promotionService = require("./promotion.service");
module.exports.customerSupportAgentService = require("./customerSupportAgent.service");
module.exports.marketingManagerService = require("./marketingManager.service");
module.exports.dataAnalysisService = require("./dataAnalysis.service");

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
module.exports.paymentMethodService = require("./paymentMethod.service");
module.exports.PaymentHistoryService = require("./PaymentHistory.service");

/* -------------------------------------------------------------------------- */
/*                             PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
module.exports.userPhotoService = require("./userPhoto.service");
module.exports.restaurantPhotoService = require("./restaurantPhoto.service");

/* -------------------------------------------------------------------------- */
/*                                    EMAIL                                   */
/* -------------------------------------------------------------------------- */
module.exports.emailService = require("./email.service");