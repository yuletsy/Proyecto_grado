import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { QuestionUser, SaveQuestionUser } from "../app/actions/QuestionAction";
import ContainerQuestion from "../components/ContentQuestion";
import Slider from "@mui/material/Slider";
import CardQuestion from "../components/CarrdQuestion";
import { AplicationState } from "../interfaces/ApplicationState";
import useForm from "../hooks/useForm/useForm";

function valuetext(value: number) {
  return `${value}°C`;
}
export const Questions = () => {
  const dispatch = useAppDispatch();
  // const navigate = useAppNavigate();
  const questionList = useAppSelector(
    (state: AplicationState) => state.question.questionLIst
  );
  const isLoading = useAppSelector(
    (state: AplicationState) => state.question.isLoading
  );

  const companyId = useAppSelector(
    (state: AplicationState) => state.company.company
  );

  const token = useAppSelector((state: AplicationState) => state.auth.token);

  useEffect(() => {
    console.log("se ejecuto");
    dispatch(QuestionUser());
  }, [token, dispatch]);

  const initialStateQuestions: Record<string, any> = {};

  const saveQuestion = async () => {
    console.log("VALUES", values);
    const res = await dispatch(
      SaveQuestionUser(transformToObjectArray(values))
    );

    saveSubmitForm(false);
  };

  function transformToObjectArray(inputObj: any) {
    const resultArray = [];

    for (const key in inputObj) {
      if (inputObj.hasOwnProperty(key)) {
        resultArray.push(inputObj[key]);
      }
    }

    return resultArray;
  }

  const { values, handleChangeQuestion, handleSubmit, saveSubmitForm } =
    useForm(initialStateQuestions, saveQuestion);

  return (
    <Box
      sx={{
        alignItems: "center",

        flexDirection: "column",
        display: "flex",
        width: "100%",
        pt: "3%",
      }}
    >
      <Box sx={{ bgcolor: "#ffeddf", pl: "4%", width: "100%" }}>
        <ContainerQuestion />
      </Box>
      <Box sx={{ pl: "4%" }}>
        <CardQuestion />
      </Box>

      <Box sx={{ pl: "6%" }}>
        {isLoading && questionList ? (
          // <p>cargando</p>  // TODO: Añadir el progress bar
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" variant="determinate" />
          </Stack>
        ) : (
          <Box>
            {questionList?.map((question: any, index: number) => (
              <Box key={question.idPreguntas}>
                <h3>{question.nombre}</h3>
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Always visible"
                    getAriaValueText={valuetext}
                    name={`Q${index}`}
                    marks
                    defaultValue={0}
                    value={values[`Q${index}`]?.calificacion ?? 0}
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    onChange={(event, newValue) => {
                      const updatedValue = {
                        [`Q${index}`]: {
                          idEmpresa: companyId.idEmpresa,
                          idPregunta: question.idPreguntas,
                          calificacion: newValue,
                        },
                      };
                      handleChangeQuestion(updatedValue);
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box sx={{ p: "2%" }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#fb5a73",
            borderRadius: "18px",
            "&:hover": { backgroundColor: "#fb7a8f" },
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};
