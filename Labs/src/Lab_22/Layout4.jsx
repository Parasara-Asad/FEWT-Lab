import { Link, Outlet } from "react-router-dom";

function Layout4() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/Lab22/A1">
              A1
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout4;
