import { Link, useNavigate } from "react-router-dom";
import "../../index.css";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Me
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        {!localStorage.getItem("token") ? (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <button
              className="nav-button"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Log Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

/* 
import Button from "@mui/material/Button";

...
ex def func ButtonElement({children, ...props})

return <Button {...props}>{children}</Button>
*/
