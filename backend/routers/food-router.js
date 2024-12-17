import { getFoodList } from "../controllers/food-controller.js";
import express from "express"

const FoodRouter =express.Router() ;
    FoodRouter.get("/",getFoodList)
export default FoodRouter