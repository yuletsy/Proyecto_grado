import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../services/HttpClient";
import Swal from "sweetalert2";
import { QuestionService } from "../../services/QuestionService";


export const GetCalificationsSumary = (idEmpresa:string) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const state = getState();
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.resultCalification(state.auth.token, idEmpresa);
      
      if (res.message === "No esta autorizado.") {
        Swal.fire({
          icon: "error",
          title: "Oops... Algo salio mal",
          text: `${res.message}`,
        });

        return res;
      }

      return res;
    } catch (error) {}
  };
};
