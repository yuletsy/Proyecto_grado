import { Home } from "../../pages/Home";
import { Login} from "../../pages/Login";
import {Register} from "../../pages/Register";


const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/Login",
    component: Login
  },
  {
    path: "/Register",
    component: Register
  }
];

export default routes;
