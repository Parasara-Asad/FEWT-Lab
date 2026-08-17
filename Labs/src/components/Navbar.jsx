import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/Lab_19">
          My Labs
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/Lab_19"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Lab 19
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="lab20Dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 20
              </button>

              <ul className="dropdown-menu" aria-labelledby="lab20Dropdown">
                <li>
                  <Link className="dropdown-item" to="/Lab_20/part1">
                    Part 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Lab_20/part2">
                    Part 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Lab_20/part3">
                    Part 3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Lab_20/part4">
                    Part 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Lab_20/part5">
                    Part 5
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Lab_21"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Lab 21
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;