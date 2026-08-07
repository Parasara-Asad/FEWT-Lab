import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav class="navbar bg-black">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVexxzbg3jvRGCioSPljjTfsjn7CWC45h3L40QZwXjQ&s=10"
              alt="Bootstrap"
              width="40"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul class="nav justify-content-end">
            <li class="nav-item me-5">
              <Link to="" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li class="nav-item me-5">
              <Link to="/Movie" className="nav-link text-light">
                Movie
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
