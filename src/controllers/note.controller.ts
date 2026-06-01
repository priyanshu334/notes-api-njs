import { CreateNote } from "../services/note.service";
import { asyncHandler } from "../utils/asyncHandler";
import { createNoteSchema } from "../validators/note.validator";

export const create = asyncHandler(async (req, res) => {
    const data = createNoteSchema.parse(req.body)
    const note = await CreateNote(req.userId!, data.title, data.content)
    return res.status(201).json({
        success: true,
        note,
    })
})