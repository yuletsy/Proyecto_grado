export interface QuestionState {
  questionLIst?: Array<Question>;
  isLoading:boolean;
}
export type Question = {
  idPreguntas: number;
  idActividades: number;
  nombre: string;
};
