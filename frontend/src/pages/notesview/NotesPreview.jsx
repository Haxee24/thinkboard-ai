import { useParams, useNavigate } from "react-router";
import { useNotesContext } from "../../context/notesContext";
import { useState, useEffect } from "react";
import AiButton from "../../components/Notes/AiButton";

export default function NotePreview() {
  const { id } = useParams();
  const { notes } = useNotesContext();
  const navigate = useNavigate();

  const note = notes.find((n) => n._id === id);

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [content, setContent] = useState("");

  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/api/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ title, info, content }),
      });
      if (!res.ok) {
        throw new Error("Failed to save note");
      }
      const data = await res.json();
      console.log("Note saved:", data);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setInfo(note.info);
      setContent(note.content);
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
      <form onSubmit={saveHandler} className="w-full max-w-4xl flex flex-col items-center">

        {/* Title */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          className="w-full bg-transparent text-4xl font-bold outline-none
                     placeholder-white/30 mb-6"
        />
        <input
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Untitled"
          className="w-full bg-transparent text-[#635f5f] outline-none
                     placeholder-white/30 -mt-4 mb-6"
        />

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Endless Textbox */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your thoughts here..."
          className="w-full min-h-[70vh] resize-none bg-transparent
                     text-lg leading-relaxed outline-none
                     placeholder-white/30"
        />
        <div className="w-full flex justify-end gap-4 mt-6">
          <input type="submit" className="w-35 cursor-pointer flex items-center bg-green-500 border hover:border-amber-100 font-semibold text-black px-5 py-3 rounded-3xl"  value="Save note" />
          <AiButton content={content} setContent={setContent} />
        </div>
      </form>
    </div>
  );
}