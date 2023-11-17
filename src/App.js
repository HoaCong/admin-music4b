/* eslint-disable react-hooks/exhaustive-deps */
import ToastSnackbar from "components/ToastSnackbar";
import CheckLoginMiddleware from "middleware/checkToken";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { actionGetList, resetData } from "store/Category/action";
import DefaultLayout from "./layouts";
import { publicRoutes } from "./routes";
function App() {
  const { isLoading } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();
  const onGetCategory = () => dispatch(actionGetList());
  const onResetData = () => dispatch(resetData());

  useEffect(() => {
    if (!isLoading) {
      onGetCategory();
    }
    return () => {
      onResetData();
    };
  }, []);

  return (
    <div className="App">
      <CheckLoginMiddleware>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Wrapper = DefaultLayout;
            if (route.path === "/login") Wrapper = Fragment;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Wrapper>
                    <Page />
                  </Wrapper>
                }
              />
            );
          })}
        </Routes>
      </CheckLoginMiddleware>
      <ToastSnackbar />
    </div>
  );
}

export default App;
