const { customerSupportAgentService } = require("../services");

/**create customerSupportAgent */
const createCustomerSupportAgent = async (req, res) => {
    try {
        const reqBody = req.body;
        const customerSupportAgent = await customerSupportAgentService.createCustomerSupportAgent(reqBody);

        if (!customerSupportAgent) {
            throw new Error("customerSupportAgent not found !");
        }

        res.status(200).json({
            success: true,
            message: "Customer support agent created !",
            data: customerSupportAgent
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            data: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get customerSupportAgent list */
const getCustomerSupportAgentList = async (req, res) => {
    try {
        const getList = await customerSupportAgentService.getCustomerSupportAgentList();
        if (!getList) {
            throw new Error("customerSupportAgent not found !");
        }

        res.status(200).json({
            success: true,
            message: "Get customer support agent list succssfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**get customerSupportAgent details by id*/
const getCustomerSupportAgentDetails = async (req, res) => {
    try {
        const customerSupportAgentId = req.params.customerSupportAgentId;
        const getDetails = await customerSupportAgentService.getCustomerSupportAgentById(customerSupportAgentId);

        if (!getDetails) {
            throw new Error("customerSupportAgent not found !");
        }

        res.status(200).json({
            success: true,
            message: "customer support agent details get successfully !",
            data: getDetails
        })
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**customerSupportAgent details update by id */
const updateCustomerSupportAgent = async (req, res) => {
    try {
        const customerSupportAgentId = req.params.customerSupportAgentId;
        const customerSupportAgentExist = await customerSupportAgentService.getCustomerSupportAgentById(customerSupportAgentId);

        if (!customerSupportAgentExist) {
            throw new Error("customer support agent not found !");
        }

        await customerSupportAgentService.updateCustomerSupportAgent(customerSupportAgentId, req.body);

        res.status(200).json({
            success: true,
            message: "customer support agent details update successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        })
    }
}

/**delete customerSupportAgent */
const deleteCustomerSupportAgent = async (req, res) => {
    try {
        const customerSupportAgentExists = await customerSupportAgentService.getCustomerSupportAgentById(req.params.customerSupportAgentId);
        if (!customerSupportAgentExists) {
            throw new Error("customer support agent not found !");
        }

        await customerSupportAgentService.deleteCustomerSupportAgent(req.params.customerSupportAgentId);

        res.status(200).json({
            success: true,
            message: "customer support agent deleted !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: true,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createCustomerSupportAgent,
    getCustomerSupportAgentList,
    getCustomerSupportAgentDetails,
    updateCustomerSupportAgent,
    deleteCustomerSupportAgent
}