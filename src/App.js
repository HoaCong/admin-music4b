import { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
