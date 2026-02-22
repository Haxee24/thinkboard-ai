import { useNotesContext } from "../../context/notesContext";

export default function DeleteButton({noteId}) {
    const {setNotes} = useNotesContext();
    const deleteNote = async (e) => {
        e.stopPropagation();
        try {
            const res = await fetch(`http://localhost:4000/api/notes/${noteId}`, {
                method: "DELETE",
                credentials: "include",
            });
            const data = await res.json();
            const deletedNoteId = data.deletedNoteId;
            if (res.ok) {
                setNotes(prev => prev.filter(note => note._id !== deletedNoteId));
            } else {
                throw new Error("Failed to delete note");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <button onClick={deleteNote} className="text-red-500 hover:text-red-700 text-2xl transition -mt-5">
            🗑
        </button>
    )
}