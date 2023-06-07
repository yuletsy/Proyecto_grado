import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../services/HttpClient";
import { QuestionService } from "../../services/QuestionService";
import Swal from "sweetalert2";

export const QuestionUser = () => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.QuestionAuth();
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
