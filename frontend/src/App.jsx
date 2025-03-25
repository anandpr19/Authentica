import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Upload from "./components/Upload";
import Verify from "./components/Verify";
import Contact from "./components/contact";
import About from "./components/about";
import ParticipantForm from "./components/certificates/generate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gen-ce" element={<ParticipantForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
