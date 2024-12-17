import express from "express"
import { getCoupons } from "../controllers/coupon-controller.js";

const couponRouter = express.Router();
    couponRouter.get("/",getCoupons);
export default couponRouter;