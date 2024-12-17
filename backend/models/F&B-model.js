import mongoose from "mongoose";

const FandBSchema = new mongoose.Schema (
    {
        name:{type:String,required:true},
        price:{type:Number,required:true},
        detail:{type:String,required:true},
        img:{type:String,required:true},
        category:
        {
            type:String,
            required:true,
            enum: ["Báp nước","Nước uống", "Snack"]
        }
    }
)

const FandBModel= mongoose.model("fandb",FandBSchema)
export default FandBModel
