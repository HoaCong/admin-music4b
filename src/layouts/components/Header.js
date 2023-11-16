import config from "config";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionLogout } from "store/Login/action";
function Header() {
  const {
    data: { user_details },
  } = useSelector((state) => state.loginReducer);

  const dispatch = useDispatch();
  const onLogout = () => dispatch(actionLogout());

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate(config.routes.login);
  };
  return (
    <nav className="navbar navbar-expand-lg px-3 navbar-light bg-secondary">
      <a className="navbar-brand" href="/#">
        Admin Dashboard
      </a>
      <div className="dropdown ms-auto">
        <a
          href="/#"
          className="d-flex align-items-center text-decoration-none dropdown-toggle text-white"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="img avatar"
            width="30"
            height="30"
            className="rounded-circle"
          />
          <span className="ms-1">{user_details.Name}</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-light text-small shadow">
          <li onClick={handleLogout}>
            <span className="dropdown-item text-danger">Sign out</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
