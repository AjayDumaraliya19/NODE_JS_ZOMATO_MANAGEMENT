const { RestaurantOwners } = require("../models");

/**create RestaurantOwners */
const createRestaurantOwners = async (reqBody) => {
    return RestaurantOwners.create(reqBody);
}

/**get RestaurantOwners list */
const getRestaurantOwnersList = async (req, res) => {
    return RestaurantOwners.find()
        .populate({
            path: "user_id",
            select: "user_name"
        })
        .populate({
            path: "restaurant_id",
            select: "name , location"
        });
}

/**get RestaurantOwners details by id */
const getRestaurantOwnersById = async (restaurantOwnersId) => {
    return RestaurantOwners.findById(restaurantOwnersId);
}

/**update RestaurantOwners */
const updateRestaurantOwners = async (restaurantOwnersId, updateBody) => {
    return RestaurantOwners.findByIdAndUpdate(restaurantOwnersId, { $set: updateBody });
}

/**delete RestaurantOwners */
const deleteRestaurantOwners = async (restaurantOwnersId) => {
    return RestaurantOwners.findByIdAndDelete(restaurantOwnersId);
}

module.exports = {
    createRestaurantOwners,
    getRestaurantOwnersList,
    getRestaurantOwnersById,
    updateRestaurantOwners,
    deleteRestaurantOwners
}