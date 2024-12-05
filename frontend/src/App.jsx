import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

export default function App() {
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

/* 
this file should basically just collect together the other files (and basically do nothing else)
this file is the router
*/
