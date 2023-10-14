const { paymentMethodService } = require("../services");

/**create record */
const createPaymentMethod = async (req, res) => {
    try {
        const reqBody = req.body;
        const paymentMethod = await paymentMethodService.createPaymentMethod(reqBody);
        if (!paymentMethod) {
            throw new Error("PaymentMethod not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentMethod created successfully !",
            data: paymentMethod
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get paymentMethod list */
const getPaymentMethodList = async (req, res) => {
    try {
        const getList = await paymentMethodService.getPaymentMethodList();
        if (!getList) {
            throw new Error("PaymentMethod not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentMethod list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get paymentMethods by details */
const getPaymentMethodDetails = async (req, res) => {
    try {
        const paymentMethodId = req.params.paymentMethodId;
        const paymentMethodEx = await paymentMethodService.getPaymentMethodById(paymentMethodId);
        if (!paymentMethodEx) {
            throw new Error("PaymentMethod not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentMethod get successsfully !",
            data: paymentMethodEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update paymentMethod details */
const updatePaymentMethod = async (req, res) => {
    try {
        const paymentMethodId = req.params.paymentMethodId
        const paymentMethodExist = await paymentMethodService.getPaymentMethodById(paymentMethodId);
        if (!paymentMethodExist) {
            throw new Error("PaymentMethod not found !");
        }

        await paymentMethodService.updatePaymentMethod(paymentMethodId, req.body);

        res.status(200).json({
            success: true,
            message: "PaymentMethod is updated successfully !",
            data: paymentMethodExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete paymentMethod */
const deletePaymentMethod = async (req, res) => {
    try {
        const paymentMethodId = req.params.paymentMethodId;
        const paymentMethodExists = await paymentMethodService.getPaymentMethodById(paymentMethodId);
        if (!paymentMethodExists) {
            throw new Error("PaymentMethod not found !");
        }

        await paymentMethodService.deletePaymentMethod(paymentMethodId);

        res.status(200).json({
            success: true,
            message: "paymentMethod record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createPaymentMethod,
    getPaymentMethodDetails,
    getPaymentMethodList,
    updatePaymentMethod,
    deletePaymentMethod
}