import { Box, Button, Typography } from "@mui/material";
import React from "react";
import image_logistic from "../assets/images/logistica.jpg";
import { useNavigate } from "react-router-dom";
function Main() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#ffeddf",
        width: "100%",
        height:"100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "40%",
          flexDirection: "column",
          p: "12% 4% 4% 4%",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 45,
                fontWeight: "bolder",
              }}
            >
              Mejora los
              <span style={{ color: "#fb7a8f" }}> procesos </span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 45,
                fontWeight: "bolder",
              }}
            >
              en la
              <span style={{ color: "#fb7a8f" }}> cadena de </span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 45,
                fontWeight: "bolder",
              }}
            >
              <span style={{ color: "#fb7a8f" }}> abastecimiento</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "sans-serif",
                fontSize: 45,
                fontWeight: "bolder",
              }}
            >
              de tu empresa
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", pt: "4%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 23,
              fontWeight: "normal",
            }}
          >
            Recibe asistencia logística en los procesos de la
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 23,
              fontWeight: "normal",
            }}
          >
            cadena de suministros de tu empresa,
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 23,
            }}
          >
            {" "}
            microempresa o PYME
          </Typography>
        </Box>
        <Box sx={{ width: "100%", pt: "10%" }}>
          <Button
            variant="contained"
            onClick={() => navigate("/Register")}
            sx={{
              backgroundColor: "#fb5a73",
              borderRadius: "18px",
              "&:hover": { backgroundColor: "#fb7a8f" },
              fontFamily: "sans-serif",
            }}
          >
            ¡Haz el diagnostico ahora!
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image_logistic}
          width={700}
          height={600}
          style={{ borderRadius: "2.5rem" }}
          alt="image_1"
        />
      </Box>
    </Box>
  );
}
export default Main;
