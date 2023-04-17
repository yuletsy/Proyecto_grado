import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ImageLogisticBg from "../assets/images/logistic_bg.jpg";

export const Register = () => {
const navigate = useNavigate();
  
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: "100%",
        display: "flex",
        bgcolor:"red"
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "10% 4% 4% 4%",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${ImageLogisticBg})`,
          backgroundSize: 'cover',
          height:"100%",
          
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: "1.5rem",
            p: "2%",
            width: "40%",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
            
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Crea tu cuenta
            </Typography>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 16,
                fontWeight: "normal",
                pb: "4%",
              }}
            >
              Crea tu cuenta para obtener los resultados de tu diagnóstico
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              p: "2%",
            }}
          >
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-name-input"
              label="Nombre de tu empresa"
              type="name"
              autoComplete="current-name"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-name-input"
              label="Tu nombre"
              type="name"
              autoComplete="current-name"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-phone-input"
              label="Tu teléfono de contacto"
              type="name"
              autoComplete="current-name"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-email-input"
              label="Tu correo electrónico"
              type="name"
              autoComplete="current-email"
              required
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-password-input"
              label="Tu contraseña"
              type="name"
              autoComplete="current-password"
              required
            />
          </Box>
          <Box sx={{ alignItems: "center" }}>
            <FormGroup sx={{ flexDirection: "row", justifyContent: "center" }}>
              <FormControlLabel
                sx={{ fontFamily: "unset", fontSize: 17 }}
                control={<Checkbox />}
                label="   He leído y Acepto los"
              />
              <Link
                sx={{ pt: "3%", color: "black" }}
                href="#"
                underline="always"
              >
                Terminos y condiciones
              </Link>
            </FormGroup>
          </Box>

          <Box sx={{ p: "2%" }}>
            <Button
              onClick={() => navigate('/Register')}
              variant="contained"
              sx={{
                backgroundColor: "#fb5a73",
                borderRadius: "18px",
                "&:hover": { backgroundColor: "#fb7a8f" },
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Crear cuenta
            </Button>
          </Box>
          <Box sx={{ pt: "2%" }}>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 17,
                flexDirection: "row",
              }}
            >
              ¿Ya tienes cuenta?{" "}
              <Link
                sx={{ pt: "1%", color: "black" ,  fontWeight: "bold"}}
                href="/login"
                underline="always"
              >
                Inicia sesión
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
