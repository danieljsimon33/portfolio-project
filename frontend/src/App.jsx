import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { fetchUserFromToken } from "./utilities/authFunctions";
import Projects from "./components/projects/Projects";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const token = localStorage.getItem("token");

      if (token) {
        const newUser = await fetchUserFromToken(token);
        console.log(newUser);
        if (!user) {
          setUser(newUser);
        } else {
          localStorage.removeItem("token");
        }
      }
    }
    checkUser();
  }, []);

  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

/* 
this file should basically just collect together the other files (and basically do nothing else)
this file is the router
*/
