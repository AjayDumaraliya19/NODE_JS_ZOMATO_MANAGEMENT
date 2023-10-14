const express = require("express");
const { addressValidation } = require("../../validations")
const validate = require("../../middlewares/validate");
const { addressController } = require("../../controllers");

const router = express.Router();

/**create address */
router.post(
    "/createAddress",
    validate(addressValidation.createAddress),
    addressController.createAddress
);

/**get address list */
router.get(
    "/getaddressList",
    addressController.getAddressList
);

/**get address details */
router.get(
    "/getAddressDetails/:addressId",
    addressController.getAddressDetails
);

/**update address */
router.put(
    "/updateAddress/:addressId",
    addressController.updateAddress
);

/**delete address */
router.delete(
    "/deleteAddress/:addressId",
    addressController.deleteAddress
)

module.exports = router;