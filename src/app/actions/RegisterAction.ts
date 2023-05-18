import { Dispatch } from "@reduxjs/toolkit";
import { RegisterUserInterface } from "../../interfaces/RegisterUserInterface";
import { HttpClient } from "../../services/HttpClient";
import { RegisterService } from "../../services/RegisterService";
import Swal from "sweetalert2";

export const authRegister = (body: RegisterUserInterface) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const registerService = new RegisterService(httpClient);
      const res = await registerService.registerAuth(body).then((res: any) => {
        if (res.message === "Email ya registrado.") {
          Swal.fire({
            icon: "error",
            title: "Oops... Algo salio mal",
            text: `${res.message}`,
          });
          return res;
        }
        
        return res;
      });
      console.log(res);

      return res;
    } catch (error) {}
  };
};
