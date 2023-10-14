const { Address } = require("../models");

/**create Address */
const createAddress = async (reqBody) => {
    return Address.create(reqBody);
}

/**get Address list */
const getAddressList = async (req, res) => {
    return Address.find()
        .populate({ path: "user_id", select: "user_name" });
}

/**get Address details by id */
const getAddressById = async (addressId) => {
    return Address.findById(addressId);
}

/**update Address */
const updateAddress = async (addressId, updateBody) => {
    return Address.findByIdAndUpdate(addressId, { $set: updateBody });
}

/**delete Address */
const deleteAddress = async (addressId) => {
    return Address.findByIdAndDelete(addressId);
}

module.exports = {
    createAddress,
    getAddressList,
    getAddressById,
    updateAddress,
    deleteAddress
}