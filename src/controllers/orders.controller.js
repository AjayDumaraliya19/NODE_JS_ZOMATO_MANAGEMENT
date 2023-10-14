const { orderService } = require("../services");

/**create record */
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;
        const order = await orderService.createOrder(reqBody);
        if (!order) {
            throw new Error("Order not found !");
        }

        res.status(200).json({
            success: true,
            message: "Order created successfully !",
            data: order
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get order list */
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList();
        if (!getList) {
            throw new Error("Order not found !");
        }

        res.status(200).json({
            success: true,
            message: "Order list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get orders by details */
const getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderEx = await orderService.getOrderById(orderId);
        if (!orderEx) {
            throw new Error("Order not found !");
        }

        res.status(200).json({
            success: true,
            message: "Order get successsfully !",
            data: orderEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update order details */
const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId
        const orderExist = await orderService.getOrderById(orderId);
        if (!orderExist) {
            throw new Error("Order not found !");
        }

        await orderService.updateOrder(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Order is updated successfully !",
            data: orderExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete order */
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderExists = await orderService.getOrderById(orderId);
        if (!orderExists) {
            throw new Error("Order not found !");
        }

        await orderService.deleteOrder(orderId);

        res.status(200).json({
            success: true,
            message: "Order record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createOrder,
    getOrderDetails,
    getOrderList,
    updateOrder,
    deleteOrder
}