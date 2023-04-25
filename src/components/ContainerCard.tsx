import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
function ContainerCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        pt: "8%",
        pb: "6%",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 25,
            fontWeight: "bolder",
          }}
        >
          Nuestro consultorio logístico
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 25,
            fontWeight: "bolder",
            pb: "1.5%",
          }}
        >
          favorece <span style={{ color: "#fb7a8f" }}>diferentes áreas </span>
        </Typography>

        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: 18,
          }}
        >
          Recibe asesorías para diferentes áreas de tu empresa, microempresa o
          PYME
        </Typography>
      </Box>
      <Box sx={{ display: "flex", pt: "2%" }}>
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "400px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
              flexDirection: "column",
              alignItems: "center",
              p: "1.5%",
              borderRadius: "20px",
            }}
          >
            <CardHeader
              title="Producción"
              sx={{ color: "#242a55", fontWeight: "bold" }}
            />
            <SettingsOutlinedIcon sx={{}} style={{ fontSize: 70 }} />
            <CardContent
              sx={{
                display: "flex",
                maxWidth: 600,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <List component="ol" color="text.secondary" sx={{ pl: "3%" }}>
                <ListItemText primary="Metodos y tiempos"></ListItemText>
                <ListItemText primary="Diseño de Layout"></ListItemText>
                <ListItemText primary="Análisis de cuellos de botella"></ListItemText>
                <ListItemText primary="Análisis de MRP"></ListItemText>
                <ListItemText
                  primary="Análisis de capacidades  internas 
                y externas"
                ></ListItemText>
                <ListItemText primary="Capacidades de requerimientos de produccion -CRP"></ListItemText>
              </List>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: "flex", p: "2%" }}>
          <Card
            style={{ width: "400px", height: "400px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
              flexDirection: "column",
              alignItems: "center", 
              p: "1.5%",
              borderRadius: "20px",
            }}
          >
            <CardHeader
              title="Inventarios"
              sx={{ color: "#242a55", fontWeight: "bold" }}
            />
            <InventoryOutlinedIcon style={{ fontSize: 70 }} />
            <CardContent
              sx={{
                display: "flex",
                maxWidth: 700,
                flexDirection: "column",
                  fontFamily: "unset",
                  fontSize: 17,
              }}
            >
              <List component="ol" color="text.secondary" sx={{ pl: "3%" }}>
                <ListItemText primary="Capacidade de almacenamiento"></ListItemText>
                <ListItemText primary="Manejo y Control de inventarios"></ListItemText>
                <ListItemText primary="Sobrecostos de almacenamiento"></ListItemText>
                <ListItemText primary="Análisis óptimo de la demanda y compras."></ListItemText>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box sx={{ display: "flex", pt: "1.5%", pb: "6%" }}>
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "400px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 520,
              flexDirection: "column",
              alignItems: "center",
              p: "1.5%",
              borderRadius: "20px",
            }}
          >
            <CardHeader
              title="Transporte"
              sx={{ color: "#242a55", fontWeight: "bold" }}
            />
            <RvHookupOutlinedIcon sx={{}} style={{ fontSize: 70 }} />
            <CardContent
              sx={{
                display: "flex",
                maxWidth: 520,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <List component="ol" color="text.secondary" sx={{ pl: "3%" }}>
                <ListItemText primary="Capacidad de transporte"></ListItemText>
                <ListItemText primary="Buffer de transporte"></ListItemText>
                <ListItemText primary="Clúster de transporte"></ListItemText>
                <ListItemText primary="Optimización de transporte"></ListItemText>
                <ListItemText primary="Sistema de control de tráfico de vehículos -YMS"></ListItemText>
                <ListItemText primary="Sistema de gestión de transporte - TMS"></ListItemText>
              </List>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ display: "flex", p: "2%" }}>
          <Card
            style={{ width: "400px", height: "400px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 520,
              flexDirection: "column",
              alignItems: "center",
              p: "1.5%",
              borderRadius: "20px",
            }}
          >
            <CardHeader
              title="Compras y Ventas"
              sx={{ color: "#242a55", fontWeight: "bold" }}
            />
            <ShoppingCartOutlinedIcon style={{ fontSize: 70 }} />
            <CardContent
              sx={{
                display: "flex",
                maxWidth: 520,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <List component="ol" color="text.secondary" sx={{ pl: "3%" }}>
                <ListItemText primary="Diseño de políticas de almacenamiento y ventas"></ListItemText>
                <ListItemText primary="Modelo de certificación de proveedores"></ListItemText>
                <ListItemText primary="Modelo de indicadores de abastecimiento y distribución"></ListItemText>
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
export default ContainerCard;
