import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import ImageLogisticBg from "../assets/images/logistic_bg.jpg";

export const Login = () => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        height:"100vh",
        
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "4% 4% 4% 4%",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: `url(${ImageLogisticBg})`,
          
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
              Iniciar sesión
            </Typography>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 16,
                fontWeight: "normal",
                pb: "4%",
              }}
            >
              Ingresa a tu cuenta
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
          

          <Box sx={{ p: "2%" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fb5a73",
                borderRadius: "18px",
                "&:hover": { backgroundColor: "#fb7a8f" },
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Iniciar sesión
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
              ¿No tienes cuenta?{" "}
              <Link
                sx={{ pt: "1%", color: "black",fontWeight:"bold" }}
                href="/Register"
                underline="always"
              >
                Registrate aquí
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
