import FandBModel from "../models/F&B-model.js";

export const getFoodList = async(req,res) =>{
    let menu;
    try {
        menu = await FandBModel.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve coupons", error });
    }
}
