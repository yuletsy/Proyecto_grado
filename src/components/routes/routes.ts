import { HomePage } from "../../pages/Home";
import { LoginPage} from "../../pages/LoginPage";
import { MyAccountPage } from "../../pages/MyAccountPage";
import { PrivatePage } from "../../pages/PrivatePage";
import {RegisterPage} from "../../pages/RegisterPage";
import {QuestionPage} from "../../pages/QuestionPage";
import {DiagnosticPage } from "../../pages/DiagnosticPage";
const routes = [
  {
    path: "/",
    component: HomePage,
    isPrivated:false
  },
  {
    path: "/Login",
    component: LoginPage,
    isPrivated:false
  },
  {
    path: "/Register",
    component: RegisterPage,
    isPrivated:false
  },
  {
    path: "/MyAccount",
    component: MyAccountPage,
    isPrivated:true
  },
  {
    path:"/private",
    component: PrivatePage,
    isPrivated:true
  },
  {
    path: "/Question",
    component: QuestionPage,
    isPrivated: true
  },

  {
    path: "/Results",
    component: DiagnosticPage,
    isPrivated: true
  },
  
];

export default routes;
