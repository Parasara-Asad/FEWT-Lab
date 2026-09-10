import { Link } from "react-router-dom";

function Navs() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/Lab21/A1">
            A1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Lab21/A2">
            A2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Back to home
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navs;
