const mongoose = require("mongoose");

/** Create the order schema model */
const order_Schema = new mongoose.Schema(
    {
        order_status :{
            type:String,
            enum:["place","cancel","reject"]
        },
        payment_method:{
            type:String,
            trim:true
        },
        cart:{
            type:mongoose.Types.ObjectId,
            ref:"cart"
        },
        user:{
            type:mongoose.Types.ObjectId,
            ref:"User"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Order = mongoose.model("order",order_Schema)
module.exports = Order;