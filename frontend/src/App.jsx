import { Routes, Route } from "react-router";
import { Home, SignUp, SignIn, Details, Create, Profile} from "./pages/index.js";
import Layout from "./pages/Layout.jsx";

export default function App() {
  return (
    <Routes element={<Layout/>}>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="signin" element={<SignIn/>} />
        <Route path="details" element={<Details/>} />
        <Route path="create" element={<Create/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
    </Routes>
  )
}
