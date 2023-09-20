import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../services/HttpClient";
import { AuthService } from "../../services/AuthService";
import { RECIVE_AUTH_STATE } from "../reducers/AuthReducer";
import { LoginUserInterface } from "../../interfaces/LoginUserInterface";
import Swal from "sweetalert2";

export const authUser = (body: LoginUserInterface) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const authService = new AuthService(httpClient);
      const res = await authService.loginAuth(body);
      if (res.message === "email or password incorrectos.") {
        Swal.fire({
          icon: "error",
          title: "Oops... Algo salio mal",
          text: `${res.message}`,
        });

        return res;
      }
      
      localStorage.setItem("token", res.token);

      dispatch(RECIVE_AUTH_STATE(res));
      return res;
    } catch (error) {}
  };
};
