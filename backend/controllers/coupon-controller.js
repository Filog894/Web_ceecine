import Coupon from "../models/coupon-model.js";

export const getCoupons = async (req, res) => {
    let coupons;
    try {
        coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve coupons", error });
    }
};