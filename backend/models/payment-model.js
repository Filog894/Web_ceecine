import mongoose from "mongoose";
import BookingModel from './booking-model.js'

const PaymentSchema = new mongoose.Schema (
    {
        booking_id:{type:mongoose.Types.ObjectId,ref:BookingModel,required:true},
        method:{type:String,required:true},
        time:{type:Date,required:true},
    }
)

const PaymentModel= mongoose.model("payments",PaymentSchema)
export default PaymentModel
