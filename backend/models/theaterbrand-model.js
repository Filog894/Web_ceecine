import mongoose from "mongoose";

const TheaterBrandSchema = new mongoose.Schema (
    {
        name:{type:String,required:true},
        quantity:{type:Number,required:true}
    }
)

const TheaterBrandModel= mongoose.model("theaterBrands",TheaterBrandSchema)
export default TheaterBrandModel
