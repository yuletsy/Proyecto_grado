import { Home } from "../../pages/Home";
import { Login} from "../../pages/Login";
import { MiCuenta } from "../../pages/MiCuenta";
import { PrivatePage } from "../../pages/PrivatePage";
import {Register} from "../../pages/Register";


const routes = [
  {
    path: "/",
    component: Home,
    isPrivated:false
  },
  {
    path: "/Login",
    component: Login,
    isPrivated:false
  },
  {
    path: "/Register",
    component: Register,
    isPrivated:false
  },
  {
    path: "/MiCuenta",
    component: MiCuenta,
    isPrivated:true
  },
  {
    path:"/private",
    component: PrivatePage,
    isPrivated:true
  }
  
];

export default routes;
