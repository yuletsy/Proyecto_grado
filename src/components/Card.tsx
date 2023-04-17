import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

function Card() {
  return (
    <Box
      sx={{
        p: "2%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 22,
            fontWeight: "bolder",
            justifyContent: "center"
          }}
        >
          Nuestro consultorio logístico
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 22,
            fontWeight: "bolder",
          }}
        >
          favorece <span style={{ color: "#fb7a8f" }}>diferentes áreas </span>
        </Typography>
        
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: 17,
          }}
        >
          Recibe asesorías para diferentes áreas de tu empresa, microempresa o
          PYME
        </Typography>
      </Box>
      
    </Box>
  );
}
export default Card;
