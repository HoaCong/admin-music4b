import PropTypes from "prop-types";
import React from "react";

function TemplateContent({ title, children }) {
  return (
    <div className="d-grid gap-3">
      <div className="col-12 card">
        <div className="card-body">
          <h5 className="m-0">{title}</h5>
        </div>
      </div>

      <div className="col-12 card">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

TemplateContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default TemplateContent;
