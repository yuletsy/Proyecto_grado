import { Dispatch } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { HttpClient } from "../../services/HttpClient";
import { QuestionService } from "../../services/QuestionService";
// import { RECIVE_COMPANY_STATE } from "../reducers/CompanyReducer";
import { RECIVE_QUESTION_LIST_STATE } from "../reducers/QuestionReducer";

export const QuestionUser = () => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.getQuestionList();
      dispatch(RECIVE_QUESTION_LIST_STATE(res));
    } catch (error) {}
  };
};

export const SaveQuestionUser = (body: any) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const state = getState();
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.saveQuestionList(
        body,
        state.auth.token
      );
      if (res.result.success === false || res.result.message === "No esta autorizado.") {
        Swal.fire({
          icon: "error",
          title: "Debes calificar todas las preguntas",
          text: `${res.result.message}`,
        });
        return res;
      }
      localStorage.setItem("token", res.result.token);
      
      Swal.fire({
        icon: "success",
        title: "Haz calificado todas las preguntas, gracias!",
        text: `${res.result.message}`,
      });


      return res;
    } catch (error) {}
  };
};