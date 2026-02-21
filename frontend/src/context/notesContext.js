import { createContext, useContext } from "react";

const notesCreateContext = createContext();

export default notesCreateContext;

export function useNotesContext() {
    return useContext(notesCreateContext);
}


