import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
function InfoFooter() {
const navigate = useNavigate();
  
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
      <Box
        sx={{
          display: "flex",
          width: "100%",
          p: "4% 4% 4% 4%",
          flexDirection: "column",
          alignItems: "center",
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
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              ¿Deseas saber más?
              <span style={{ color: "#fb5a73" }}> ¡Te llamamos!</span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              p: "3%",
            }}
          >
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-name-input"
              label="Tu nombre"
              type="name"
              autoComplete="current-email"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-pyme-input"
              label="Nombre de empresa"
              type="name"
              autoComplete="current-password"
            />
            <TextField
              sx={{ width: "100%", pb: "3%" }}
              id="outlined-contact-input"
              label="Telefono de contacto "
              type="name"
              autoComplete="current-password"
            />
          </Box>
          <Box >
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 17,
                flexDirection: "row",
                
              }}
            >
              Selecciona las áreas de consultoría de tu interés
            </Typography>
          </Box>
          <Box sx={{display:"flex", flexDirection:"row",gap:"90px", p:"2%"}}>
          
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Producción" />
              <FormControlLabel control={<Checkbox />} label="Inventarios" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Transporte" />
              <FormControlLabel
                control={<Checkbox />}
                label="Compras y ventas"
              />
            </FormGroup>
          </Box>
          <Box sx={{ p: "2%" }}>
            <Button
              onClick={() => navigate('/')}
              variant="contained"
              sx={{
                backgroundColor: "#fb5a73",
                borderRadius: "18px",
                "&:hover": { backgroundColor: "#fb7a8f" },
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              Enviar mis datos
            </Button>
          </Box>
          </Box>
        </Box>
      </Box>
  );
}
export default InfoFooter;
