import express from "express"

const userRouter = express.Router();
userRouter.get("/",(req,res,next) => {
    res.send("User");
});

export default userRouter;