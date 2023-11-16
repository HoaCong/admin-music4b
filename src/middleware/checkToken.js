/* eslint-disable react-hooks/exhaustive-deps */
import config from "config";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const CheckLoginMiddleware = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    data: { user_details },
  } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    const isLoginPage = [config.routes.login].includes(pathname);
    if (!user_details?.Name) {
      if (isLoginPage) return;
      return navigate(config.routes.login);
    } else if (isLoginPage) {
      return navigate(config.routes.home);
    }
  }, [user_details, pathname]);

  return children;
};

export default CheckLoginMiddleware;
