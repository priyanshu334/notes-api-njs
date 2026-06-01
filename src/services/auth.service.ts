import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

export async function RegisterUser(email: string, password: string) {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("user already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });
    return user;

}

export async function LoginUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
        where: { email }
    })
    if (!user) {
        throw new Error("invalid credentials")
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        throw new Error("invalid credentials")
    }
    const token = generateToken(user.id)
    return {
        token,
        user
    }

}