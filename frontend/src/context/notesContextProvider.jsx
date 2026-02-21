import notesContext from "./notesContext";
import { useState } from "react";

export default function NotesContextProvider({children}) {
    const [showNoteForm, setShowNoteForm] = useState(false);
    const [notes, setNotes] = useState([]);

    return (
        <notesContext.Provider value={{showNoteForm, setShowNoteForm, notes, setNotes}}>
            {children}
        </notesContext.Provider>
    )
};


