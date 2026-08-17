import { Link } from "react-router-dom";

function LabNavs() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <ul className="nav justify-content-center w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/Lab19">
              Lab 19
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Lab20">
              Lab 20
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Lab21">
              Lab 21
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default LabNavs;
