import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { create } from "../controllers/note.controller";

const NotesRouter = Router()

NotesRouter.post("/", authMiddleware, create)

export default NotesRouter