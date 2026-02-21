import NotesCard from "../../components/Notes/NoteCard"
import { useState, useEffect } from "react";

function Home() {
  const [notes, setNotes] = useState([]);

  async function fetchNotes(){
    try{
      const res = await fetch("http://localhost:4000/api/notes", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      return data.notes;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function loadNotes() {
      const userNotes = await fetchNotes();
      setNotes(userNotes);
    }
    loadNotes();
  }, []);

  return (
    <div className="flex gap-5 p-10 flex-wrap">
        {notes.map(note => (
          <NotesCard key={note._id} title={note.title} content={note.content} createdAt={note.createdAt} />
        ))}
    </div>
  )
}

export default Home