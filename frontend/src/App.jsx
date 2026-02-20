import { Routes, Route } from "react-router";
import { Home, SignUp, SignIn, Details, Create, Profile} from "./pages/index.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/home" element={Home} />
      <Route path="signup" element={} />
    </Routes>
  )
}
