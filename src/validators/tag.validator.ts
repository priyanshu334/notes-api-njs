import { z } from "zod";

export const createTagSchema = z.object({
    name: z.string()
});

export type CreateTagInput = z.infer<typeof createTagSchema>;