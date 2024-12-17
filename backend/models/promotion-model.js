import mongoose from "mongoose";

const PromotionSchema = new mongoose.Schema(
    {
        Exp:{type:Date, required:true},
        Promotion:{type:String, required:true}
    }
)

const PromotionModel= mongoose.model("promotions",PromotionSchema)
export default PromotionModel