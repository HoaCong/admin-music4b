import React from "react";

function Header(props) {
  return (
    <nav
      className="navbar navbar-expand-lg px-3 navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <a className="navbar-brand" href="/#">
        Admin Dashboard
      </a>
      <div className="dropdown ms-auto">
        <a
          href="/#"
          className="d-flex align-items-center text-decoration-none dropdown-toggle"
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
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-light text-small shadow">
          <li>
            <a className="dropdown-item" href="/#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
