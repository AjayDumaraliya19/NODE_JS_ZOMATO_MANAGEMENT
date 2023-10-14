const { addressService } = require("../services");

/**create record */
const createAddress = async (req, res) => {
    try {
        const reqBody = req.body;
        const address = await addressService.createAddress(reqBody);
        if (!address) {
            throw new Error("Address not found !");
        }

        res.status(200).json({
            success: true,
            message: "Address created successfully !",
            data: address
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get address list */
const getAddressList = async (req, res) => {
    try {
        const getList = await addressService.getAddressList();
        if (!getList) {
            throw new Error("Address not found !");
        }

        res.status(200).json({
            success: true,
            message: "Address list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

message: error?.message || "Something wents wrong , please try again or later !"
/**get addresss by details */
const getAddressDetails = async (req, res) => {
    try {
        const addressId = req.params.addressId;
        const addressEx = await addressService.getAddressById(addressId);
        if (!addressEx) {
            throw new Error("Address not found !");
        }

        res.status(200).json({
            success: true,
            message: "Address get successsfully !",
            data: addressEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
        });
    }
}

/**update address details */
const updateAddress = async (req, res) => {
    try {
        const addressId = req.params.addressId
        const addressExist = await addressService.getAddressById(addressId);
        if (!addressExist) {
            throw new Error("Address not found !");
        }

        await addressService.updateAddress(addressId, req.body);

        res.status(200).json({
            success: true,
            message: "Address is updated successfully !",
            data: addressExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete address */
const deleteAddress = async (req, res) => {
    try {
        const addressId = req.params.addressId;
        const addressExists = await addressService.getAddressById(addressId);
        if (!addressExists) {
            throw new Error("Address not found !");
        }

        await addressService.deleteAddress(addressId);

        res.status(200).json({
            success: true,
            message: "address record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createAddress,
    getAddressDetails,
    getAddressList,
    updateAddress,
    deleteAddress
}