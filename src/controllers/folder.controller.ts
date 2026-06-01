import { CreateFolder } from "../services/folder.service";
import { asyncHandler } from "../utils/asyncHandler";
import { createFolderSchema } from "../validators/folder.validator";

export const create = asyncHandler(async (req, res) => {
    const data = createFolderSchema.parse(req.body)
    const folder = await CreateFolder(req.userId!, data.name)
    return res.status(201).json({
        success: true,
        folder,
    })
})