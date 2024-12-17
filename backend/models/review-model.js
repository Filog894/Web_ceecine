import mongoose from "mongoose";
import Member from './member-model.js'
import MovieModel from './movie-model.js'

const ReviewSchema = new mongoose.Schema (
    {
        user_id:{type:mongoose.Types.ObjectId,ref:Member,required:true},
        movie_id:{type:mongoose.Types.ObjectId,ref:MovieModel,required:true},
        rating:{type:Number,required:true},
        comment:{type:String,required:true}
    }
)

const ReviewModel= mongoose.model("reviews",ReviewSchema)
export default ReviewModel
