import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "../utils/ApiError";

export function errorMiddleware(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    if (error instanceof ApiError) {
        return res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }

    if (error instanceof ZodError) {
        return res.status(400).json({
            success: false,
            errors: error.issues,
        });
    }

    console.error(error);

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
    });
}