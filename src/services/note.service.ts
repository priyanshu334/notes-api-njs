import { prisma } from "../lib/prisma";

export async function CreateNote(userId: string, title: string, content?: string) {
    return prisma.note.create({
        data: {
            title,
            content,
            userId,
        },
    });
}