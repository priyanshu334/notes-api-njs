import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { success } from "zod";

const UserRouter = Router()

UserRouter.get("/me", authMiddleware, async (req, res) => {
    res.json({
        success: true,
        userID: req.userId
    })
})

export default UserRouter