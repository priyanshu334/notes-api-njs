import type { Request, Response } from "express";
import { loginSchema, registerSchema } from "../validators/auth.validator";
import { LoginUser, RegisterUser } from "../services/auth.service";

export async function register(
    req: Request,
    res: Response
) {
    try {
        const data = registerSchema.parse(req.body);

        const user = await RegisterUser(
            data.email,
            data.password
        );

        return res.status(201).json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Something went wrong",
        });
    }
}

export async function login(req: Request, res: Response) {
    try {
        const data = loginSchema.parse(req.body)
        const result = await LoginUser(data.email, data.password)
        return res.status(200).json({
            success: true,
            token: result.token,
            user: {
                id: result.user.id,
                email: result.user.email
            }
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message:
                error instanceof Error
                    ? error.message
                    : "Something went wrong",
        });
    }
}