import mongoose from "mongoose";

const movieSchema = new mongoose.Schema ({
    title: {type: String, required:true},
    description: {type:String, required:true},
    duration: {type:String, required:true},
    genre: {type:String, required:true},
    rating: { type: String, required:true},
    limit_age: {type:Number, required:true},
    poster_url: {type:String, required:true},
    release_date:{type:Date,required:true},
    cast: { type: String, require: true},
    crew: { type: String, require: true}
});
movieSchema.index({ title: 1 }); 
movieSchema.index({ genre: 1 }); 
movieSchema.index({ releaseDate: -1 });
const MovieModel = mongoose.model("movies", movieSchema);
export default MovieModel