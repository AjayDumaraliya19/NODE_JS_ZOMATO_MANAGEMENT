const mongoose = require("mongoose");

const restroTypeSchema = mongoose.Schema(
    {
        restaurant_type:{
            type:String,
            trim:true
        },
        type_desc:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const RestroType = mongoose.model("restroType",restroTypeSchema);
module.exports = RestroType;