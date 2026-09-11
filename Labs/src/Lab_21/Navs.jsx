
import { Link } from "react-router-dom";

function Navs() {
  return (
    <nav className="navbar navbar-expand bg-secondary">
      <div className="container">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/Lab21/A1">
              A1
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/Lab21/A2">
              A2
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Back to Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navs;
