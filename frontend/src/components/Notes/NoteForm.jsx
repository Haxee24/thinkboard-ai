import { useState } from "react";
import { useNotesContext } from "../../context/notesContext";

export default function NoteForm() {
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const {setShowNoteForm, setNotes} = useNotesContext();

    const onClose = () => {
        setTitle("");
        setInfo("");
        setShowNoteForm(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:4000/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({title, info})
            });
            const data = await res.json();
            console.log(data);
            const newNote = data.newNote;


            setNotes(prev => [...prev, newNote]);
            console.log(newNote);
        } catch (err) {
            console.log(err);
        }

        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-[#242425] text-white w-full max-w-md rounded-xl p-6 shadow-lg">

                <h2 className="text-xl font-bold mb-4">New Note</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Info</label>
                    <textarea
                    required
                    rows={4}
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-[#1a1a1b] border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                    <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400"
                    >
                    Save
                    </button>
                </div>

                </form>
            </div>
        </div>
    )
}