const { paymentHistoryService } = require("../services");

/**create record */
const createPaymentHistory = async (req, res) => {
    try {
        const reqBody = req.body;
        const paymentHistory = await paymentHistoryService.createPaymentHistory(reqBody);
        if (!paymentHistory) {
            throw new Error("Payment history not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentHistory created successfully !",
            data: paymentHistory
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something wents wring , please try again or later !"
        });
    }
}

/**get paymentHistory list */
const getPaymentHistoryList = async (req, res) => {
    try {
        const getList = await paymentHistoryService.getPaymentHistoryList();
        if (!getList) {
            throw new Error("Payment history not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentHistory list get successfully !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get paymentHistorys by details */
const getPaymentHistoryDetails = async (req, res) => {
    try {
        const paymentHistoryId = req.params.paymentHistoryId;
        const paymentHistoryEx = await paymentHistoryService.getPaymentHistoryById(paymentHistoryId);
        if (!paymentHistoryEx) {
            throw new Error("Payment history not found !");
        }

        res.status(200).json({
            success: true,
            message: "PaymentHistory get successsfully !",
            data: paymentHistoryEx
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**update paymentHistory details */
const updatePaymentHistory = async (req, res) => {
    try {
        const paymentHistoryId = req.params.paymentHistoryId
        const paymentHistoryExist = await paymentHistoryService.getPaymentHistoryById(paymentHistoryId);
        if (!paymentHistoryExist) {
            throw new Error("Payment history not found !");
        }

        await paymentHistoryService.updatePaymentHistory(paymentHistoryId, req.body);

        res.status(200).json({
            success: true,
            message: "PaymentHistory is updated successfully !",
            data: paymentHistoryExist
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete paymentHistory */
const deletePaymentHistory = async (req, res) => {
    try {
        const paymentHistoryId = req.params.paymentHistoryId;
        const paymentHistoryExists = await paymentHistoryService.getPaymentHistoryById(paymentHistoryId);
        if (!paymentHistoryExists) {
            throw new Error("Payment history not found !");
        }

        await paymentHistoryService.deletePaymentHistory(paymentHistoryId);

        res.status(200).json({
            success: true,
            message: "paymentHistory record is deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createPaymentHistory,
    getPaymentHistoryDetails,
    getPaymentHistoryList,
    updatePaymentHistory,
    deletePaymentHistory
}