import express from "express";
import testRouter from "./routes/test.route";
import AuthRouter from "./routes/auth.route";
import UserRouter from "./routes/user.route";
import { errorMiddleware } from "./middlewares/error.middleware";
import NotesRouter from "./routes/notes.routes";

const app = express();

app.use(express.json());
app.use(errorMiddleware)
app.use("/test", testRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/", UserRouter);

app.use("/api/notes", NotesRouter)
app.get("/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "API Running",
    });
});

export default app;