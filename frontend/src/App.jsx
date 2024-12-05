import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import {} from "./utilities/authFunctions";

/* 
const [user, setUser] = useState(null);

useEffect()
- on every loop, try to figure out if there is an authenticated user or not

  - try and get the token

  yes token?
  - get user from token

    does user exist (and is therefore authorized bc token exists in local storage already)?
    - setUser()

    no?
    - remove token from local storage


## In the return statement ##
is there a user?
- hide the register and login tabs
- show a new tab, logout

no?
- redirect to the landing page
- show the sign up and log in tabs

*/

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
