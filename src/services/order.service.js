const { Orders } = require("../models");

/**create order */
const createOrder = async (reqBody) => {
    return Orders.create(reqBody);
}

/**get order list */
const getOrderList = async (req, res) => {
    return Orders.find()
        .populate({
            path: "user_id",
            select: "user_name , profile_info"
        })
        .populate({
            path: "restaurant_id",
            select: "name , location"
        });
}

/**get order by id */
const getOrderById = async (orderId) => {
    return Orders.findById(orderId);
}

/**update record */
const updateOrder = async (orderId, updateBody) => {
    return Orders.findByIdAndUpdate(orderId, { $set: updateBody });
}

/**delete order */
const deleteOrder = async (orderId) => {
    return Orders.findByIdAndDelete(orderId);
}

module.exports = {
    createOrder,
    getOrderById,
    getOrderList,
    updateOrder,
    deleteOrder
}