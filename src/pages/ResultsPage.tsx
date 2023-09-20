import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/store/hooks";
import { GetCalificationsSumary } from "../app/actions/ResultAction";
import ContainerDiagnostic from "../components/Diagnostic/ContainerDiagnostic";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import ChartDashboard from "../components/Chart/ChartComponent";
import { AplicationState } from "../interfaces/ApplicationState";

export const ResultsPage = () => {
  const dispatch = useAppDispatch();

  const idEmpresa = useAppSelector(
    (state: AplicationState) => state.company.company.idEmpresa
  );
  const token = useAppSelector((state: AplicationState) => state.auth.token);

  const [results, setResult] = useState<
    { idActividades: number; nombre: string; promedio: number }[]
  >([]);

  const data = {
    labels: results
      ? results.map((item, index) => `Actividad ${index + 1}`)
      : [],
    datasets: [
      {
        label: "Promedio Calificaciones",
        data: results ? results.map((item) => item.promedio) : [],
        backgroundColor: [
          "#fb7a8f",
          "#00aeef",
          " #d6006e",
          "#75d1e0",
          "#7dba00",
          "#cc292b",
          "#00a950",
          "#f8971d",
          "#4400f3",
          "#4a245e",
          "#f26649",
        ],
        borderColor: [
          "#fb7a8f",
          "#00aeef",
          " #d6006e",
          "#75d1e0",
          "#7dba00",
          "#cc292b",
          "#00a950",
          "#f8971d",
          "#4400f3",
          "#4a245e",
          "#f26649",
        ],
        tension: 0.3,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgba(255, 99, 132)",
        },
      },
    },
  };

  useEffect(() => {
    if (!token) return;
    dispatch(GetCalificationsSumary(idEmpresa)).then((res: any) => {
      setResult(res);
    });
  }, [token, idEmpresa, dispatch]);

  const calcularPromedioGeneral = () => {
    if (results.length === 0) {
      return 0; // En caso de que no haya resultados, el promedio es 0.
    }
  
    const sumaTotal = results.reduce((accumulator, item) => {
      // No es necesario convertir promedio a número si es de tipo number
      return accumulator + item.promedio;
    }, 0);
    // Calcular el promedio general
    const promedioGeneral = sumaTotal / results.length;
    return promedioGeneral;
  
  };
  

  return (
    <Box
      sx={{
        alignItems: "center",

        flexDirection: "column",
        display: "flex",
        width: "100%",
        pt: "2%",
        pb: "4%",
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
            Promedio general : {calcularPromedioGeneral().toFixed(2)}
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
            <TableBody sx={{ alignItems: "center" }}>
              {results?.map((item: any) => (
                <TableRow
                  key={item.idActividades}
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
      <Box sx={{ pt: "6%", width: "1000px", height: "1000px" }}>
        <ChartDashboard data={data} options={options} />
      </Box>
    </Box>
  );
};
