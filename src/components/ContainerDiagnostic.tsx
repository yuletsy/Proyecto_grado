import { Typography } from "@mui/material";
import { Box } from "@mui/system";


function ContainerDiagnostic() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        
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
          bgcolor: "#ffeddf",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          Resultados
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 22,
          }}
        >Resumen de calificación del diagnóstico realizado
        </Typography>
      </Box> 
  
      
    </Box>
    
  );
}
export default ContainerDiagnostic;