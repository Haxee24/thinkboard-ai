import NotesCard from "../../components/Notes/NoteCard"
import { useEffect } from "react";
import { useNotesContext } from "../../context/notesContext";

function Home() {
  const {notes, setNotes} = useNotesContext();

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
  }, [notes]);

  return (
    <div className="flex gap-5 p-10 flex-wrap">
        {notes.map(note => (
          <NotesCard key={note._id} title={note.title} info={note.info} createdAt={note.createdAt} />
        ))}
    </div>
  )
}

export default Home