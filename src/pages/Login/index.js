import PropTypes from "prop-types";
import React from "react";
import "./index.css";
function index(props) {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              className="img-fluid"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample img"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
                <label for="email">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Password"
                />
                <label for="pwd">Password</label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="remember-me"
                  />
                  <label className="form-check-label" for="remember-me">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-2 pt-2">
                <button type="button" className="btn btn-primary btn-lg px-3">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a href="#!" className="link-danger ms-1">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center py-4 px-4 px-xl-5 bg-primary text-white">
        Copyright © 2023. All rights reserved.
      </div>
    </section>
  );
}

index.propTypes = {};

export default index;
