import express, { Router } from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user-router.js";
import movieRouter from "./routers/movie-router.js"
import couponRouter from "./routers/coupon-router.js"
import AccountRouter from "./routers/auth-router.js";
import SeatRouter from "./routers/seat-router.js";
import PromotionRouter from "./routers/promotion-router.js";
import FoodRouter from "./routers/food-router.js";
import FandBModel from "./models/F&B-model.js";
dotenv.config();

const app = express();
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.1qcpp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => 
    app.listen(8081,() => {
    console.log("Connected to Database and Server is running")}
    )
)
.catch((e) => console.log(e));
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/movie", movieRouter);
app.use("/coupon", couponRouter);
app.use("/account", AccountRouter);
app.use("/seat",SeatRouter);
app.use("/promotion",PromotionRouter)
app.use("/food",FoodRouter)



