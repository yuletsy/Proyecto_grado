import { Dispatch } from "@reduxjs/toolkit";
import { HttpClient } from "../../services/HttpClient";
import { QuestionService } from "../../services/QuestionService";
import { RECIVE_QUESTION_LIST_STATE } from "../reducers/QuestionReducer";

export const QuestionUser = () => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.getQuestionList(); 
      dispatch(RECIVE_QUESTION_LIST_STATE(res))
    } catch (error) {}
  };
};

export const SaveQuestionUser = (body:any) => {
  return async (dispatch: Dispatch<any>, getState: any) => {
    try {
      const state = getState();
      const httpClient = new HttpClient();
      const questionService = new QuestionService(httpClient);
      const res = await questionService.saveQuestionList(body, state.auth.token) ;
      
     return res;
    } catch (error) {}
  };
};

