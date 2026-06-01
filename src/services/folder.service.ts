import { prisma } from "../lib/prisma";

export async function CreateFolder(userId: string, name: string) {
    return prisma.folder.create({
        data: {
            name,
            userId
        }
    })

}