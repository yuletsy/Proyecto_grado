import { Home } from "../../pages/Home";
import { Login} from "../../pages/Login";
import { MyAccount } from "../../pages/MyAccount";
import { PrivatePage } from "../../pages/PrivatePage";
import {Register} from "../../pages/Register";
import {Questions} from "../../pages/QuestionPage";
import {Results} from "../../pages/ResultsPage";
import {Diagnostic } from "../../pages/DiagnosticPage";
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
    path: "/MyAccount",
    component: MyAccount,
    isPrivated:true
  },
  {
    path:"/private",
    component: PrivatePage,
    isPrivated:true
  },
  {
    path: "/Question",
    component: Questions,
    isPrivated: true
  },
  {
    path: "/Results",
    component: Results,
    isPrivated: false
  },
  {
    path: "/Diagnostic",
    component: Diagnostic,
    isPrivated: true
  },
  
];

export default routes;
