import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/commits"} className="nav-link active">
                Commits history
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
