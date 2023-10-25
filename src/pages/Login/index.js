import React from "react";
import "./index.css";
function Login(props) {
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
              <div className="divider d-flex align-items-center my-4">
                <h1 className="text-center mx-3 mb-0 font-bold">ĐĂNG NHẬP</h1>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" />
                <label for="email">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="pwd" />
                <label for="pwd">Password</label>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-3 w-100"
                  style={{ width: 200 }}
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center py-4 px-4 px-xl-5 bg-secondary text-white">
        Copyright © 2023. All rights reserved.
      </div>
    </section>
  );
}

export default Login;
