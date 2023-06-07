import { Typography } from "@mui/material";
import { Box } from "@mui/system";


function ContainerQuestion() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        pb:"2%",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          p: "2%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          Calificación de Riesgos Logísticos en Bodegas y Centros de Distribución{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 22,
          }}
        >Evaluación con base en las mejores prácticas en almacenamiento de clase mundial
        </Typography>
      </Box> 
    </Box>
  );
}
export default ContainerQuestion;