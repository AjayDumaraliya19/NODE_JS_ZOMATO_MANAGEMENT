const { orderItemService } = require("../services");

/** create orderItem */
const createOrderItem = async (req, res) => {
  try {
    const reqBody = req.body;
    const orderItem = await orderItemService.createOrderItem(reqBody);
    if (!orderItem) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { orderItem },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get orderItem list */
const getOrderItemList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await orderItemService.getOrderItemList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of OrderItems successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get orderItem details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await orderItemService.getOrderItemById(req.params.orderItemId);
    if (!getDetails) {
      throw new Error("ooppsss!... OrderItem not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of OrderItem successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** orderItem details update by id */
const updateDetails = async (req, res) => {
  try {
    const orderItemId = req.params.orderItemId;
    const orderItemExists = await orderItemService.getOrderItemById(orderItemId);
    if (!orderItemExists) {
      throw new Error("OrderItem not found!");
    }

    await orderItemService.updateDetails(orderItemId, req.body);

    res
      .status(200)
      .json({ success: true, message: "OrderItem details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete orderItem by id */
const deleteOrderItem = async (req, res) => {
  try {
    const orderItemId = req.params.orderItemId;
    const orderItemExists = await orderItemService.getOrderItemById(orderItemId);
    if (!orderItemExists) {
      throw new Error("OrderItem not found!");
    }

    await orderItemService.deleteOrderItem(orderItemId);

    res.status(200).json({
      success: true,
      message: "OrderItem delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createOrderItem,
  getOrderItemList,
  getDetails,
  updateDetails,
  deleteOrderItem,
};
