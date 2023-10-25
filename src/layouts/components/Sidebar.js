import React from "react";
import { NavLink } from "react-router-dom";
import config from "../../config";

function Sidebar(props) {
  return (
    <ul className="nav flex-column mt-2">
      <NavLink
        to={config.routes.home}
        className="nav-item mb-2 btn btn-secondary text-start"
      >
        <i className="fas fa-home text-center" style={{ width: "24px" }}></i>{" "}
        Tổng quan
      </NavLink>
      <NavLink
        to={config.routes.account}
        className="nav-item mb-2 btn btn-secondary text-start"
      >
        <i className="fas fa-users text-center" style={{ width: "24px" }}></i>{" "}
        Danh sách người dùng
      </NavLink>

      <NavLink
        to={config.routes.manage_song}
        className="nav-item btn btn-secondary text-start"
      >
        <i
          className="fas fa-sliders-h text-center"
          style={{ width: "24px" }}
        ></i>{" "}
        Quản lý bài hát
      </NavLink>
    </ul>
  );
}

export default Sidebar;
