const { deliveryAssignmentService } = require("../services");

/** create deliveryAssignment */
const createDeliveryAssignment = async (req, res) => {
  try {
    const reqBody = req.body;
    const deliveryAssignment = await deliveryAssignmentService.createDeliveryAssignment(reqBody);
    if (!deliveryAssignment) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { deliveryAssignment },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryAssignment list */
const getDeliveryAssignmentList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await deliveryAssignmentService.getDeliveryAssignmentList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of DeliveryAssignments successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get deliveryAssignment details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await deliveryAssignmentService.getDeliveryAssignmentById(req.params.deliveryAssignmentId);
    if (!getDetails) {
      throw new Error("ooppsss!... DeliveryAssignment not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of DeliveryAssignment successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** deliveryAssignment details update by id */
const updateDetails = async (req, res) => {
  try {
    const deliveryAssignmentId = req.params.deliveryAssignmentId;
    const deliveryAssignmentExists = await deliveryAssignmentService.getDeliveryAssignmentById(deliveryAssignmentId);
    if (!deliveryAssignmentExists) {
      throw new Error("DeliveryAssignment not found!");
    }

    await deliveryAssignmentService.updateDetails(deliveryAssignmentId, req.body);

    res
      .status(200)
      .json({ success: true, message: "DeliveryAssignment details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete deliveryAssignment by id */
const deleteDeliveryAssignment = async (req, res) => {
  try {
    const deliveryAssignmentId = req.params.deliveryAssignmentId;
    const deliveryAssignmentExists = await deliveryAssignmentService.getDeliveryAssignmentById(deliveryAssignmentId);
    if (!deliveryAssignmentExists) {
      throw new Error("DeliveryAssignment not found!");
    }

    await deliveryAssignmentService.deleteDeliveryAssignment(deliveryAssignmentId);

    res.status(200).json({
      success: true,
      message: "DeliveryAssignment delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createDeliveryAssignment,
  getDeliveryAssignmentList,
  getDetails,
  updateDetails,
  deleteDeliveryAssignment,
};
