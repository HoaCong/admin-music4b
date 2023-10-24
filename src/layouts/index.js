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
          <div className="mt-3"></div>
          <Sidebar />
          <div className="col-8 col-lg-10 main-content">{children}</div>
        </div>
      </div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
