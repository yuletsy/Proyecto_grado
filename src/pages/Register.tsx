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
import { useAppDispatch } from "../app/store/hooks";
import { useNavigate } from "react-router-dom";
import ImageLogisticBg from "../assets/images/logistic_bg.jpg";
import { RegisterUserInterface } from "../interfaces/RegisterUserInterface";
import { authRegister } from "../app/actions/RegisterAction";
import useForm from "../hooks/useForm/useForm";

export const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isDisabled, setDisabled] = React.useState(false);
  const initialState: RegisterUserInterface = {
    nombre: "",
    contactoPrincipal: "",
    telefono: "",
    email: "",
    contraseA: "",
    rol: 2,
  };

  const sendRegisterInfo = () => {
    console.log(values);
    dispatch(authRegister(values)).then((res:any)=>{
      console.log(res)
    if(res.message === "Cuenta creada exitosamente."){
      navigate("/Login")
      navigate(0);
    }
    });
    saveSubmitForm(false);
  };
  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(event.target.checked);
  };
  const { handleChange, handleSubmit, values, saveSubmitForm } = useForm(
    initialState,
    sendRegisterInfo
  );
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        width: "100%",
        display: "flex",
        bgcolor: "red",
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
          backgroundSize: "cover",
          height: "100%",
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
              type="text"
              autoComplete="current-name"
              onChange={handleChange}
              value={values.nombre}
              name="nombre"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-name-input"
              label="Tu nombre"
              type="text"
              autoComplete="current-name"
              onChange={handleChange}
              value={values.contactoPrincipal}
              name="contactoPrincipal"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-phone-input"
              label="Tu teléfono de contacto"
              type="name"
              autoComplete="current-name"
              onChange={handleChange}
              value={values.telefono}
              name="telefono"
            />
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
              value={values.contraseA}
              name="contraseA"
            />
          </Box>
          <Box sx={{ alignItems: "center" }}>
            <Checkbox
              checked={isDisabled}
              onChange={handleChangeChecked}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>

          <Box sx={{ p: "2%" }}>
            <Button
              disabled={!isDisabled}
              onClick={handleSubmit}
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
                sx={{ pt: "1%", color: "black", fontWeight: "bold" }}
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
