import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { create } from "../controllers/folder.controller";

const FolderRouter = Router()

FolderRouter.post("/", authMiddleware, create)