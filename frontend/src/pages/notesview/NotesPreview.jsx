import { useParams } from "react-router";
import { useNotesContext } from "../../context/notesContext";
import { useState, useEffect } from "react";

export default function NotePreview() {
  const { id } = useParams();
  const { notes } = useNotesContext();

  const note = notes.find((n) => n._id === id);

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setInfo(note.info);
    }
  }, [note]);

  if (!note) {
    return (
      <div className="p-10 text-white/60">
        Note not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#130d0d] text-white px-6 py-10 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          className="w-full bg-transparent text-4xl font-bold outline-none
                     placeholder-white/30 mb-6"
        />

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Endless Textbox */}
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Start writing your thoughts here..."
          className="w-full min-h-[70vh] resize-none bg-transparent
                     text-lg leading-relaxed outline-none
                     placeholder-white/30"
        />
      </div>
    </div>
  );
}