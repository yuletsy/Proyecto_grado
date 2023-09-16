import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { QuestionUser, SaveQuestionUser } from "../app/actions/QuestionAction";
import ContainerQuestion from "../components/ContentQuestion";
import Slider from "@mui/material/Slider";
import { AplicationState } from "../interfaces/ApplicationState";
import useForm from "../hooks/useForm/useForm";
import { useNavigate } from "react-router-dom";
import ActivitieOne from "../components/ActivitieOne";
import ActivitieTwo from "../components/ActivitieTwo";
import ActivitieThree from "../components/ActivitieThree";
import ActivitieFour from "../components/ActivitieFour";
import ActivitieFive from "../components/ActivitieFive";
import ActivitieSix from "../components/ActivitieSix";
import ActivitieSeven from "../components/ActivitieSeven";
import ActivitieEight from "../components/ActivitieEigth";
import ActivitieNine from "../components/ActivitieNine";
import ActivitieTen from "../components/ActivitieTen";
function valuetext(value: number) {
  return `${value}°C`;
}
export const Questions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [, setItems] = useState([]);
  const [showButton] = React.useState(true);

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
    dispatch(QuestionUser());
  }, [token, dispatch]);

  const initialStateQuestions: Record<string, any> = {};

  const saveQuestion = async () => {
    console.log("VALUES", values);
    const res = await dispatch(
      SaveQuestionUser(transformToObjectArray(values))
    );

    console.log(res);
    setItems(res);
    if (res.result.success === true) navigate("/Diagnostic");

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

  const areAllRatingsComplete = () => {
    if (!questionList) {
      return false;
    }
    return questionList.every((question: any, index: number) => {
      const rating = values[`Q${index}`]?.calificacion;
      return rating !== undefined && rating !== 0;
    });
  };
  const showCardAfter = 5;

  const CardContent = [
       <Box>
      <ActivitieTwo />
    </Box>,
    <Box>
      <ActivitieThree />
    </Box>,
    <Box>
      <ActivitieFour />
    </Box>,
    <Box>
      <ActivitieFive />
    </Box>,
    <Box>
      <ActivitieSix />
    </Box>,
    <Box>
      <ActivitieSeven />
    </Box>,
    <Box>
      <ActivitieEight />
    </Box>,
    <Box>
      <ActivitieNine />
    </Box>,
    <Box>
      <ActivitieTen />
    </Box>,
  ];
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
        <ActivitieOne />
      </Box>

      <Box sx={{ pl: "6%", pt: "3%" }}>
        {isLoading && questionList ? (
          // TODO: Añadir el progress bar
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
          </Stack>
        ) : (
          <Box sx={{}}>
            {questionList?.map((question: any, index: number) => (
              <Box
                sx={{ display: "flex", flexDirection: "column" }}
                key={question.idPreguntas}
              >
                <Box sx={{ display: "flex", pt: "4%", pb: "1%" }}>
                  <Typography
                    sx={{
                      fontFamily: "sans-serif",
                      fontSize: 17,
                    }}
                  >
                    {question.nombre}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pt: "2%",
                    display: "flex",
                    width: 350,
                    alignItems: "center",
                    pl: "5%",
                  }}
                >
                  <Slider
                    sx={{
                      color: "#fb5a73",
                      "& .MuiSlider-valueLabel": {
                        color: "black",
                        backgroundColor: "transparent",
                        pt: "0%",
                        fontFamily: "unset",
                        display: "flex",
                        pl: "10%",
                      },
                    }}
                    aria-label="Always visible"
                    getAriaValueText={valuetext}
                    name={`Q${index}`}
                    marks={false}
                    defaultValue={0}
                    value={values[`Q${index}`]?.calificacion ?? 0}
                    valueLabelDisplay="on"
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
                <Box>
                  {(index + 1) % showCardAfter === 0 && (
                    <Box>{CardContent[(index + 1) / showCardAfter - 1]}</Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      <Box sx={{ p: "2%" }}>
        {showButton && (
          <Button
          disabled={
            !areAllRatingsComplete() &&
            transformToObjectArray(values).length <= 0
          }
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
            Obtener Diagnostico
          </Button>
        )}
      </Box>
    </Box>
  );
};
