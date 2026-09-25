import { Link, Outlet } from "react-router-dom";

function Layout7() {
  return (
    <>
      <nav className="navbar bg-secondary">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/Lab24/A24">
              A1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Lab24/B24">
              A2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Back to Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout7;
