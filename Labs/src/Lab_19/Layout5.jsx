import { Link, Outlet } from "react-router-dom";

function Layout5() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/Lab19/A19">
              A1
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout5;
