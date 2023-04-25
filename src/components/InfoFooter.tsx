import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
function InfoFooter() {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{

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
          <Box>
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
          <Box
            sx={{ display: "flex", flexDirection: "row", gap: "90px", p: "2%" }}
          >
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Producción" />
              <FormControlLabel control={<Checkbox />} label="Inventarios" />
            </FormGroup>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Transporte" />
              <FormControlLabel control={<Checkbox />} label="Compras y ventas"/>
            </FormGroup>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default InfoFooter;
