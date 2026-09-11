import { Link, Outlet } from "react-router-dom";

function Layout6() {
  return (
    <>
      <nav className="navbar bg-secondary">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/Lab23/A23">
              A1
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

export default Layout6;
