import { BrowserRouter } from "react-router";
import AuthProvider  from "../context/AuthContextProvider";
import NotesProvider from "../context/notesContextProvider";

export default function AppProviders({children}) {
    return (
        <BrowserRouter>
            <AuthProvider>
                <NotesProvider>
                    {children}
                </NotesProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

