const mongoose = require("mongoose");

/**customer support agent schema */
const customerSupportAgent = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        department: {
            type: String,
            trim: true
        },
        shift_hours: {
            type: String,
            trim: true
        },
        is_active: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const CustomerSupportAgent = mongoose.model("customerSupportAgent", customerSupportAgent);
module.exports = CustomerSupportAgent;