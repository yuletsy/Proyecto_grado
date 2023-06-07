import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/store/hooks";
import { QuestionUser } from "../app/actions/QuestionAction";
import ContainerQuestion from "../components/ContentQuestion";
import Slider from '@mui/material/Slider';
import CardQuestion from "../components/CarrdQuestion";
export const Questions = () => {
  const dispatch = useAppDispatch();
  const [questions, setQuestion] = useState<
    { idPreguntas: number; nombre: string }[]
  >([]);

  useEffect(() => {
    dispatch(QuestionUser()).then((res: any) => {
      setQuestion(res);
    });
  }, [setQuestion, dispatch]);

  return (
    <Box
      sx={{ 
           alignItems: 'center',
           
           flexDirection: "column", 
           display: "flex", 
           width: "100%", 
           pt: "3%" }}
    >
    <Box  sx={{ bgcolor: "#ffeddf" , pl:"4%", width: "100%", }}>
    <ContainerQuestion/>
    </Box>
    <Box  sx={{  pl:"4%"}}>
    <CardQuestion/>
    </Box>
    <Box sx={{  pl:"6%"}}>
    {questions.map((item) => (
        <h3 key={item.idPreguntas}>{item.nombre}</h3>
        ))}
        <Slider  step={20} marks min={5} max={100} disabled />
      </Box>
      
      
    </Box>
  );
};
