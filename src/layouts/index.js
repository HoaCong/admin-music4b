import PropTypes from "prop-types";
import React from "react";
import Header from "../layouts/components/Header";
import Sidebar from "../layouts/components/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div
          className="sidebar min-vh-100 px-2"
          style={{ background: "rgb(219, 219, 219)", minWidth: 250 }}
        >
          <Sidebar />
        </div>
        <div className="main-content mt-2 px-2  flex-grow-1">{children}</div>
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
