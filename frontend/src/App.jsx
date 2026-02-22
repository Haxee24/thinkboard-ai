import { Routes, Route } from "react-router";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import { Home, SignUp, SignIn, NotesPreview, Create, Profile} from "./pages/index.js";
import Layout from "./pages/Layout.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes element={<Layout/>}>
        <Route path="/" element={<Layout/>}>
          <Route path="signup" element={<SignUp/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route element={<ProtectedRoute/>}>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="create" element={<Create/>} />
            <Route path="profile" element={<Profile/>} />
            <Route path="notes/:id" element={<NotesPreview/>} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
