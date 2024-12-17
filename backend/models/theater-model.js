import mongoose from "mongoose";
import TheaterBrandModel from './theaterbrand-model.js'

const TheaterSchema = new mongoose.Schema (
    {
        name:{type:String,required:true},
        location:{type:String,required:true},
        brand_id:{type:mongoose.Types.ObjectId, ref:TheaterBrandModel,required:true}
    }
)

const TheaterModel= mongoose.model("theaters",TheaterSchema)
export default TheaterModel
