const { CustomerSupportAgent } = require("../models");

/**create CustomerSupportAgent */
const createCustomerSupportAgent = async (reqBody) => {
    return CustomerSupportAgent.create(reqBody);
}

/**get CustomerSupportAgent list */
const getCustomerSupportAgentList = async (req, res) => {
    return CustomerSupportAgent.find().populate({ path: "user_id", select: "user_name" });
}

/**get CustomerSupportAgent details by id */
const getCustomerSupportAgentById = async (customerSupportAgentId) => {
    return CustomerSupportAgent.findById(customerSupportAgentId);
}

/**update CustomerSupportAgent */
const updateCustomerSupportAgent = async (customerSupportAgentId, updateBody) => {
    return CustomerSupportAgent.findByIdAndUpdate(customerSupportAgentId, { $set: updateBody });
}

/**delete CustomerSupportAgent */
const deleteCustomerSupportAgent = async (customerSupportAgentId) => {
    return CustomerSupportAgent.findByIdAndDelete(customerSupportAgentId);
}

module.exports = {
    createCustomerSupportAgent,
    getCustomerSupportAgentList,
    getCustomerSupportAgentById,
    updateCustomerSupportAgent,
    deleteCustomerSupportAgent
}