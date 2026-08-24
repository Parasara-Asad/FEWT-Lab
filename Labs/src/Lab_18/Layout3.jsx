import { Link, Outlet } from "react-router-dom";

function Layout3() {
  return (
    <>
      <nav className="navbar bg-secondary-subtle">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="A">
              Lab 18 A
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="B">
              Lab 18 B
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="C">
              Lab 18 C
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout3;
