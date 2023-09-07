import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch } from "../app/store/hooks";
import ImageLogisticBg from "../assets/images/logistic_bg.jpg";
import useForm from "../hooks/useForm/useForm";
import { LoginUserInterface } from "../interfaces/LoginUserInterface";
import { authUser } from "../app/actions/AuthAction";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const initialState: LoginUserInterface = {
    email: "",
    contraseña: "",
  };

  const sendAuthInfo = () => {
    dispatch(authUser(values)).then((res:any)=> {
      console.log(res)
      setItems(res);
      if(res.message === "Ok")
        navigate("/MyAccount")
        navigate(0)
    });
    saveSubmitForm(false);
  };

  const { handleChange, handleSubmit, values, saveSubmitForm } = useForm(
    initialState,
    sendAuthInfo
  );

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        height: "100vh",

        width: "100%",
        display: "flex",
      }}
    >
    {/* {
      items.map(item =>(<h3>{item}</h3>))
    } */}
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
              type="text"
              autoComplete="current-email"
              required
              onChange={handleChange}
              value={values.email}
              name="email"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-password-input"
              label="Tu contraseña"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleChange}
              value={values.contraseña}
              name="contraseña"
            />
          </Box>

          <Box sx={{ p: "2%" }}>
            <Button
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
                sx={{ pt: "1%", color: "black", fontWeight: "bold" }}
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
  );
};
