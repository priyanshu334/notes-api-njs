import { prisma } from "../lib/prisma";

export async function CreateTag(userId: string, name: string) {
    return prisma.tag.create({
        data: {
            name,
            userId
        }
    })

}

export async function getTags(userId: string) {
    return prisma.tag.findMany({
        where: {
            userId
        },
        orderBy: {
            name: 'asc'
        }
    })
}