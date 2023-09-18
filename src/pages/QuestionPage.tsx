import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { QuestionUser, SaveQuestionUser } from "../app/actions/QuestionAction";
import ContainerQuestion from "../components/Result/ContentQuestion";
import Slider from "@mui/material/Slider";
import { AplicationState } from "../interfaces/ApplicationState";
import useForm from "../hooks/useForm/useForm";
import { useNavigate } from "react-router-dom";

import ActivitiesCard from "../components/Diagnostic/Cards/ActivitiesCard";

import image_logistic from "../assets/images/act_01.jpg";
import image_logistic_two from "../assets/images/act_02.jpg";
import image_logistic_three from "../assets/images/act_03.jpg";
import image_logistic_four from "../assets/images/act_04.jpg";
import image_logistic_five from "../assets/images/act_05.jpg";
import image_logistic_six from "../assets/images/act_06.jpg";
import image_logistic_seven from "../assets/images/act_07.jpg";
import image_logistic_eigth from "../assets/images/act_08.jpg";
import image_logistic_nine from "../assets/images/act_09.jpg";
import image_logistic_ten from "../assets/images/act_10.jpg";

import { isLoginActive } from "../middleware/auth";

function valuetext(value: number) {
  return `${value}°C`;
}
export const QuestionPage = () => {
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

  React.useEffect(() => {
    if (!isLoginActive()) {
      navigate("/login");
    }
  }, [navigate]);

  const initialStateQuestions: Record<string, any> = {};

  const saveQuestion = async () => {
    console.log("VALUES", values);
    const res = await dispatch(
      SaveQuestionUser(transformToObjectArray(values))
    );

    console.log(res);
    setItems(res);
    if (res.result.success === true ) {
      navigate("/Results")};

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

  const showCardAfter = 5;

  const CardContent = [
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_two}
        title="Sistemas de separación, alistamiento y despacho"
        description="Responde cada enunciado para calificar los riesgos logísticos en tus sistemas de separación, alistamiento y despacho"
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_three}
        title="Equipos de manejo de materiales y medios de almacenamiento"
        description="Responde cada enunciado para calificar los riesgos logísticos en tus equipos de manejo de materiales y medios de almacenamiento"
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_four}
        title="Distribución física y layout"
        description="Responde cada enunciado para calificar los riesgos logísticos en tu distribución física y layout "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_five}
        title="Gestión de inventarios"
        description="Responde cada enunciado para calificar los riesgos logísticos en tu gestión de inventarias
         "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_six}
        title="Indicadores de gestión"
        description=" Responde cada enunciado para calificar los riesgos logísticos en tus indicadores de gestión "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_seven}
        title="Sistemas de seguridad y salud ocupacional"
        description=" Responde cada enunciado para calificar los riesgos logísticos en tus sistemas de seguridad y salud ocupacional "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_eigth}
        title="  Sistemas de aseguramiento de calidad"
        description=" Responde cada enunciado para calificar los riesgos logísticos en tus sistemas de aseguramiento de calidad "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_nine}
        title="Recurso humano"
        description="  Responde cada enunciado para calificar los riesgos logísticos en el recurso humano de tu empresa
        "
      />
    </Box>,
    <Box>
      <ActivitiesCard
        srcImage={image_logistic_ten}
        title="Sistemas de información y tecnologías de apoyo"
        description=" Responde cada enunciado para calificar los riesgos logísticos en tus sistemas de información y tecnologías de apoyo  "
      />
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
        <ActivitiesCard
          srcImage={image_logistic}
          title="Sistemas de recibo y almacenamiento"
          description=" Responde cada enunciado para calificar los riesgos logísticos en tus sistemas de recibo y almacenamiento"
        />
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
        {showButton &&  (
          <Button
            disabled={transformToObjectArray(values).length < 51}
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
