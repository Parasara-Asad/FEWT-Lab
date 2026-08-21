import { Link } from "react-router-dom";

function Navs() {
  return (
    <>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link" to="/Lab21/A1">
            A1
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Lab21/A2">
            A2
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">
            Back to home
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navs;
