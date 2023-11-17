/* eslint-disable react-hooks/exhaustive-deps */
import config from "config";
import imageLogin from "images/image-login.webp";
import _capitalize from "lodash/capitalize";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionLogin } from "store/Login/action";
function Login() {
  // state store
  const loginState = useSelector((state) => state.loginReducer);
  // action store
  const dispatch = useDispatch();
  const onLogin = (body) => dispatch(actionLogin(body));
  const {
    loginStatus: { isLoading, isSuccess, isFailure },
    data,
  } = loginState;

  // state local
  const navigate = useNavigate();
  const [dataLogin, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(config.routes.home);
    }
  }, [navigate, isSuccess]);

  useEffect(() => {
    if (isFailure)
      setError((prevError) => ({
        ...prevError,
        password: data?.error,
      }));
  }, [isFailure]);

  // function local
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
    if (isFailure) setError((prevError) => ({ ...prevError, password: "" }));
  };

  const handleSubmit = () => {
    const tmpKey = Object.keys(dataLogin);
    let validates = true;
    let formData = new FormData();

    tmpKey.forEach((key) => {
      if (dataLogin[key] === "") {
        setError((prevError) => ({
          ...prevError,
          [key]: `${_capitalize(key)} required`,
        }));
        validates = false;
      }
    });
    if (validates) {
      formData.append("taikhoan", dataLogin.username);
      formData.append("matkhau", dataLogin.password);
      onLogin(formData);
      // onLogin({ taikhoan: dataLogin.username, matkhau: dataLogin.password });
    }
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img className="img-fluid" src={imageLogin} alt="Sample img" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="divider d-flex align-items-center my-4">
                <h1 className="text-center mx-3 mb-0 font-bold">ĐĂNG NHẬP</h1>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={`form-control ${!!error.username && "is-invalid"}`}
                  name="username"
                  id="username"
                  onChange={handleChange}
                />
                <label htmlFor="username">Username</label>
              </div>
              {!!error.username && (
                <small className="d-block text-danger -mt-3">
                  {error.username}
                </small>
              )}

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    !!error.password && !isFailure && "is-invalid"
                  }`}
                  name="password"
                  id="pwd"
                  onChange={handleChange}
                />
                <label htmlFor="pwd">Password</label>
              </div>
              {!!error.password && (
                <small className="d-block text-danger -mt-3">
                  {error.password}
                </small>
              )}

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-3 w-100 d-flex justify-content-center"
                  style={{ width: 200 }}
                  onClick={handleSubmit}
                >
                  {isLoading && (
                    <div
                      className="spinner-border text-white me-2 align-middle"
                      role="status"
                    ></div>
                  )}
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
