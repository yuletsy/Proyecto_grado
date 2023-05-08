import { Home } from "../../pages/Home";
import { Login} from "../../pages/Login";
import { MiCuenta } from "../../pages/MiCuenta";
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
  },
  {
    path: "/MiCuenta",
    component: MiCuenta
  },
];

export default routes;
