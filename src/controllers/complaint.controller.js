const { complaintService } = require("../services");

/** create complaint */
const createComplaint = async (req, res) => {
  try {
    const reqBody = req.body;
    const complaint = await complaintService.createComplaint(reqBody);
    if (!complaint) {
      throw new Error("oppsss!..., seems like something went wrong, please try again later");
    }

    res.status(200).json({
      success: true,
      message: "New record added to the database!",
      data: { complaint },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get complaint list */
const getComplaintList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await complaintService.getComplaintList(filter, options);

    res.status(200).json({
      success: true,
      message: "Got list of Complaints successfully!...",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get complaint details by id */
const getDetails = async (req, res) => {
  try {
    const getDetails = await complaintService.getComplaintById(req.params.complaintId);
    if (!getDetails) {
      throw new Error("ooppsss!... Complaint not found.");
    }

    res.status(200).json({
      success: true,
      message: "Got details of Complaint successfully!...",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** complaint details update by id */
const updateDetails = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;
    const complaintExists = await complaintService.getComplaintById(complaintId);
    if (!complaintExists) {
      throw new Error("Complaint not found!");
    }

    await complaintService.updateDetails(complaintId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Complaint details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete complaint by id */
const deleteComplaint = async (req, res) => {
  try {
    const complaintId = req.params.complaintId;
    const complaintExists = await complaintService.getComplaintById(complaintId);
    if (!complaintExists) {
      throw new Error("Complaint not found!");
    }

    await complaintService.deleteComplaint(complaintId);

    res.status(200).json({
      success: true,
      message: "Complaint delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createComplaint,
  getComplaintList,
  getDetails,
  updateDetails,
  deleteComplaint,
};
