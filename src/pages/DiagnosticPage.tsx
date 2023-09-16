import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useAppDispatch } from "../app/store/hooks";
import { ResultUser, SaveCalification } from "../app/actions/ResultAction";
import ContainerDiagnostic from "../components/ContainerDiagnostic";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export const Diagnostic = () => {
  const dispatch = useAppDispatch();

  const [results, setResult] = useState<
    { idActividades: number; nombre: string; promedio: number }[]
  >([]);
  
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(ResultUser()).then((res: any) => {
      setResult(res);
    });
  }, [token, setResult, dispatch]);

  useEffect(() => {
    dispatch(SaveCalification()).then((res: any) => {
      setResult(res);
    });
  }, [token, setResult, dispatch]);
  
  // let sumaTotal = 0;

  // results.forEach((item) => {
  //   sumaTotal += item.promedio;
    
  // });
  // const promedioGeneral = sumaTotal / results.length ;
  

  return (
    <Box
      sx={{
        alignItems: "center",

        flexDirection: "column",
        display: "flex",
        width: "100%",
        pt: "2%",
        pb:"4%"
      }}
    >
      <Box sx={{ bgcolor: "#ffeddf", pl: "4%", width: "100%" }}>
        <ContainerDiagnostic />
      </Box>
      <Box sx={{ width: "100%", pt: "2%" }}>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 25,
            fontWeight: "bolder",
          }}
        >
          Promedio general : 
        </Typography>
        
      </Box> 
      </Box>
      <Box sx={{ bgcolor: "black" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 980 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"> N° </TableCell>
                <TableCell align="center">Actividad</TableCell>
                <TableCell align="center">Cualitativa</TableCell>
                <TableCell align="center">Ideal</TableCell>
                <TableCell align="center">Promedio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{alignItems:"center"}}>
              {results.map((item: any) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {item.idActividades}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.nombre}
                  </TableCell>
                 
                  <TableCell component="th" scope="row">
                    Cualitativo
                  </TableCell>
                  <TableCell component="th" scope="row">
                    10
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.promedio}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
