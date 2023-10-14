/* -------------------------------------------------------------------------- */
/*                                    USERS                                   */
/* -------------------------------------------------------------------------- */
module.exports.User = require("./user.model");
module.exports.AdminUser = require("./adminUser.model");
module.exports.UserSetting = require("./userSetting.model");
module.exports.DeliveryAddress = require("./deliveryAddress.model");
module.exports.ContentCreater = require("./contentCreater.model");
module.exports.customerStory = require("./customerStory.model");
module.exports.blog = require("./blog.model");
module.exports.UserFaq = require("./userFaq.model");

/* -------------------------------------------------------------------------- */
/*                                    CHAT                                    */
/* -------------------------------------------------------------------------- */
module.exports.Chat = require("./chat.model");
module.exports.ChatMessage = require("./chatMessage.model");
module.exports.Message = require("./message.model");
module.exports.Notification = require("./notification.model");

/* -------------------------------------------------------------------------- */
/*                                 RESTAURANT                                 */
/* -------------------------------------------------------------------------- */
module.exports.Restaurant = require("./restaurants.model");
module.exports.RestaurantOwners = require("./restaurantOwners.model");
module.exports.RestaurantHour = require("./restaurantHour.model");
module.exports.MenuItems = require("./menuItems.model");
module.exports.Orders = require("./orders.model");
module.exports.Favorite = require("./favorite.model");
module.exports.Special = require("./special.model");
module.exports.Review = require("./review.model");
module.exports.Rating = require("./rating.model");
module.exports.Address = require("./address.model");
module.exports.Categories = require("./categories.model");
module.exports.OrderItem = require("./orderItem.model");
module.exports.Complaint = require("./complaint.model");
module.exports.Promocode = require("./promocode.model");

/* -------------------------------------------------------------------------- */
/*                                  DELIVERY                                  */
/* -------------------------------------------------------------------------- */
module.exports.DeliveryDriver = require("./deliveryDriver.model");
module.exports.DeliveryAssignment = require("./deliveryAssignment.model");

/* -------------------------------------------------------------------------- */
/*                                  LOCATION                                  */
/* -------------------------------------------------------------------------- */
module.exports.City = require("./city.model");
module.exports.State = require("./state.model");
module.exports.Country = require("./country.model");

/* -------------------------------------------------------------------------- */
/*                                    TOKEN                                   */
/* -------------------------------------------------------------------------- */
module.exports.Token = require("./token.model");

/* -------------------------------------------------------------------------- */
/*                                  PROMOTION                                 */
/* -------------------------------------------------------------------------- */
module.exports.Promotion = require("./promotion.model");
module.exports.CustomerSupportAgent = require("./customerSupportAgent.model");
module.exports.MarketingManager = require("./marketingManager.model");
module.exports.DataAnalysis = require("./dataAnalysis.model");

/* -------------------------------------------------------------------------- */
/*                                   PAYMENT                                  */
/* -------------------------------------------------------------------------- */
module.exports.PaymentMethods = require("./paymentMethod.model");
module.exports.PaymentHistory = require("./paymentHistory.model");

/* -------------------------------------------------------------------------- */
/*                            PUBLIC FOLDER                                   */
/* -------------------------------------------------------------------------- */
module.exports.UserPhoto = require("./userPhoto.model");
module.exports.RestaurantPhoto = require("./restaurantPhoto.model");