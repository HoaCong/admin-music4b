import PropTypes from "prop-types";
import React from "react";
import Header from "../layouts/components/Header";
import Sidebar from "../layouts/components/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div
            className="col-4 col-lg-2 sidebar min-vh-100"
            style={{ background: "rgb(219, 219, 219)" }}
          >
            <Sidebar />
          </div>
          <div className="col-8 col-lg-10 main-content mt-2">{children}</div>
        </div>
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
