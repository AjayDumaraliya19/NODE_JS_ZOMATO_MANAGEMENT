const { PaymentHistory } = require("../models");

/**create PaymentHistory */
const createPaymentHistory = async (reqBody) => {
    return PaymentHistory.create(reqBody);
}

/**get PaymentHistory list */
const getPaymentHistoryList = async (req, res) => {
    return PaymentHistory.find()
        .populate({ path: "user_id", select: "user_name" })
        .populate({ path: "order_id", select: "total_price" })
        .populate({ path: "paymentMethod_id", select: "card_number, card_holder_name" });
}

/**get PaymentHistory details by id */
const getPaymentHistoryById = async (paymentMethodId) => {
    return PaymentHistory.findById(paymentMethodId);
}

/**update PaymentHistory */
const updatePaymentHistory = async (paymentMethodId, updateBody) => {
    return PaymentHistory.findByIdAndUpdate(paymentMethodId, { $set: updateBody });
}

/**delete PaymentHistory */
const deletePaymentHistory = async (paymentMethodId) => {
    return PaymentHistory.findByIdAndDelete(paymentMethodId);
}

module.exports = {
    createPaymentHistory,
    getPaymentHistoryList,
    getPaymentHistoryById,
    updatePaymentHistory,
    deletePaymentHistory
}