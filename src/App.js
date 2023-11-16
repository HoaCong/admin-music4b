import CheckLoginMiddleware from "middleware/checkToken";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import { publicRoutes } from "./routes";

function App() {
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
    </div>
  );
}

export default App;
