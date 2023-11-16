// Pages
import NotFoundPage from "pages/NotFoundPage";
import config from "../config";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageSong from "../pages/ManageSong";
// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.account, component: Account },
  { path: config.routes.manage_song, component: ManageSong },
  { path: config.routes.login, component: Login },
  { path: "*", component: NotFoundPage },
];

// Private routes
const privateRoutes = [];

export { privateRoutes, publicRoutes };
