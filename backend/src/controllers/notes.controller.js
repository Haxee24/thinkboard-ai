import Note from "../models/notes.model.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes =await Note.find({maker: req.user._id}).sort({createdAt: -1});
        return res
        .status(200)
        .json({
            notes
        });
    } catch (err) {
        return res
        .status(500)
        .json({message: "Error fetching all notes"});
    }
}

export const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const user = req.user;  
        const note = await Note.findOne({_id: noteId, maker: user._id});
        if (!note) {
            return res.status(404).json({message: "Note not found"});
        }
        await note.deleteOne({_id: noteId});
        user.notes.pull(noteId);
        await user.save();
        return res.status(200).json({message: "Note deleted successfully", deletedNoteId: noteId});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error deleting note"});
    }
}

export const aiEnhanceNote = async (req, res) => {
    try {
        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
        const prompt = `You are a personal journaling assistant.
                        Your job is to turn messy, unorganized, stream-of-consciousness thoughts into a clean, readable journal entry.

                        Rules:
                        - Keep the user's tone, personality, and emotional intensity.
                        - Do NOT sound like a therapist, coach, or AI.
                        - Do NOT add advice unless the user explicitly asks for it.
                        - Do NOT judge, moralize, or reframe emotionally.
                        - Preserve slang, casual language, and imperfections when appropriate.
                        - Organize thoughts naturally into paragraphs, but keep it human.
                        - If the user is angry, sad, excited, or numb, reflect that honestly.
                        - Do not invent events or emotions that the user did not mention.

                        Write in first-person, as if the user wrote it themselves.`
        const {content} = req.body;
        const response = await client.responses.create({
            model: "gpt-5.2",
            input: `${content}\n ${prompt}`
        });

        const aiContent = response.choices[0].text.trim();
        return res.status(200).json({aiContent, message: "Note enhanced with AI successfully"});

    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error enhancing note with AI"});
    }
}

export const updateNote = async (req, res) => {
    try {
        const noteId = req.params.id;
        const {title, content, info} = req.body;
        const user = req.user;  
        const note = await Note.findOne({_id: noteId, maker: user._id});
        if (!note) {
            return res.status(404).json({message: "Note not found"});
        }
        note.title = title || note.title;
        note.content = content || note.content;
        note.info = info || note.info;
        await note.save();
        return res.status(200).json({message: "Note updated successfully", updatedNote: note});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Error updating note"});
    }
}

export const createNote = async (req, res) => {
    try {
        const {title, content, info} = req.body;
        const user = req.user;
        if (!title){
            return res.status(400).json({message: "Title not entered"});
        }
        const newNote = await Note.create({
            title,
            info,
            content,
            maker: user._id
        });
        user.notes.push(newNote._id);
        await user.save();
        return res
        .status(201)
        .json({newNote, message: "Note created Successfully"});
    } catch (err) {
        console.error(err);
        return res
        .status(500)
        .json({message: "Internal Server Error"});
    }
}