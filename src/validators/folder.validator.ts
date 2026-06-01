import z from "zod"

export const createFolderSchema = z.object({
    name: z.string()
});
export type CreateFolderInput = z.infer<typeof createFolderSchema>;
