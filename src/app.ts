import express from "express";
import testRouter from "./routes/test.route";

const app = express();

app.use(express.json());
app.use("/test", testRouter);

app.get("/health", (_req, res) => {
    res.status(200).json({
        success: true,
        message: "API Running",
    });
});

export default app;