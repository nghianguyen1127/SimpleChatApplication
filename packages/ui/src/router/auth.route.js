import SigninPage from "../components/pages/SigninPage/index.js";
import SignupPage from "../components/pages/SignupPage/index.js";
import { ROUTES } from "../constants/routesKey";

export const authRoutes = [
  {
    path: ROUTES.SIGNIN,
    component: SigninPage,
    exact: true,
  },
  {
    path: ROUTES.SIGNUP,
    component: SignupPage,
    exact: true,
  },
];
