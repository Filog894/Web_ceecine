import PromotionModel from  "../models/promotion-model.js";

export const getPromotionInHomepage = async (req, res) => {
    let promotions;
    try {
        promotions = await PromotionModel.find();
        res.status(200).json(promotions);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve promotions", error });
    }
};