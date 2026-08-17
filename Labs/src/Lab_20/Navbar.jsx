import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <ul className="nav justify-content-center w-100">

        <li className="nav-item">
          <Link className="nav-link" to="/Lab20">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Lab20/Contact">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Lab20/About">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Lab20/Info">
            Info
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Lab20/MoreDatails">
            Details
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Back to Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;