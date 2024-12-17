import mongoose from "mongoose";

const couponSchema = new mongoose.Schema (
    {
        coupon_expire:{type:Date,required:true},
        coupon_balance: {type:Number, required:true},
    }
)

const CouponModel= mongoose.model("coupons",couponSchema)
export default CouponModel;