const { stateService } = require("../services");

/** Create state controller */
const createState = async (req, res) => {
  try {
    const reqBody = req.body;

    const stateExist = await stateService.getStateByName(reqBody.state_name);
    if (!stateExist) {
      throw new Error("State name is already exist -!-");
    }

    const state = await stateService.createState(reqBody);
    if (!state) {
      throw new Error("Sothing went wrong, try again or later -!-");
    }

    res.status(200).json({
      success: true,
      message: "State create successfully :)",
      date: state,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
      stack: error?.stack,
    });
  }
};

/** Get state list controller */
const getStateList = async (req, res) => {
  try {
    const stateList = await stateService.getStateList();
    if (!stateList) {
      throw new Error("State data not found -!-");

      res.state(200).json({
        sucess: true,
        message: "Get state list successfully :)",
        data: stateList,
      });
    }
  } catch (error) {
    res.state(400).json({
      success: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

/** Update state by Id controller */
const updateState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExist = await stateService.gtestateById(stateId);
    if (!stateExist) {
      throw new Error("State does not exist -!-");
    }
    const state = await stateService.updateState(stateId, updateBody);
    if (!state) {
      throw new Error("Something went wrong, try again or later -!-");
    }
    res.status(200).json({
      succcess: true,
      message: "State updated successfully :)",
      data: state,
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

/** Delet state by Id controller */
const deleteState = async (req, res) => {
  try {
    const stateId = req.params.stateId;
    const stateExist = await stateService.gtestateById(stateId);
    if (!stateExist) {
      throw new Error("State does not exist -!-");
    }
    const statedelete = await stateService.deleteState(stateId);
    if (!statedelete) {
      throw new Error("Something went wrong, try again or later -!-");
    }
    res.status(200).json({
      succcess: true,
      message: "State deleted successfully :)",
    });
  } catch (error) {
    res.status(400).json({
      succcess: false,
      message: error?.message || "Something went wrong -!-",
    });
  }
};

module.exports = {
  createState,
  getStateList,
  updateState,
  deleteState,
};
