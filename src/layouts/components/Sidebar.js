import React from "react";
import { NavLink } from "react-router-dom";
import config from "../../config";

function Sidebar(props) {
  return (
    <div className="col-4 col-lg-2 sidebar min-vh-100">
      <ul className="nav flex-column">
        <li className="nav-item bg-success mb-2">
          <NavLink to={config.routes.home} className="nav-link text-white">
            Tổng quan
          </NavLink>
        </li>
        <li className="nav-item bg-success mb-2">
          <NavLink to={config.routes.account} className="nav-link text-white">
            Danh sách người dùng
          </NavLink>
        </li>
        <li className="nav-item bg-success">
          <NavLink
            to={config.routes.manage_song}
            className="nav-link text-white"
          >
            Quản lý bài hát
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
