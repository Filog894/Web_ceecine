import express from "express"
import { getPromotionInHomepage } from "../controllers/promotion-controller.js";
const PromotionRouter = express.Router();
    PromotionRouter.get("/",getPromotionInHomepage);
export default PromotionRouter;