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