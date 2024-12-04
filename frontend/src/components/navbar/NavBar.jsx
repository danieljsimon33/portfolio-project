import { Link } from "react-router-dom";
import "../../index.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About Me
          </Link>
        </li>
        <li>
          {/* dropdown menu ideally goes here */}
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

/* 

*/
