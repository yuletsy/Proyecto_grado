import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logo.png";
import { useNavigate ,useLocation} from "react-router-dom";
import { isLoginActive, logOut } from "../../middleware/auth";

type Page = {
  name: string;
  path: string;
};

const pages: Page[]= [
   { name: "Inicio", path: "/" },
  { name: "Diagnostico", path: "/Question" },
  {name : "Resultados", path: "/Results"},
];

function AppBarPublic() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Actualiza el botón activo cuando cambia la ubicación (ruta)
    const activePage = pages.find((page) => page.path === location.pathname);
    setActiveButton(activePage ? activePage.name : null);
  }, [location]);
  
  const handleButtonClick = (page: Page) => {
    setActiveButton(page.name);
    navigate(page.path);
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", height: "100%" }}>
            <Box sx={{ alignItems: "center" }}>
              <img src={logo} width={190} height={50} alt="Logo" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              gap: "4rem",
            }}
          >
            {isLoginActive() &&
              pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleButtonClick(page)}
                  sx={{
                    my: 2,
                    color: activeButton === page.name ? "#fb7a8f" : "#6F6F6F",
                    display: "block",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#fb7a8f",
                    },
                  }}
                  disabled={activeButton === page.name}
                >
                  {page.name}
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {isLoginActive(
              
            ) ? (
              
              <Button
                onClick={() => logOut(navigate)}
                variant="contained"
                sx={{
                  lineHeight: 1.5,
                  lineWidth: 1.5,
                  fontSize: 12,
                  backgroundColor: "#fb5a73",
                  borderRadius: "18px",
                  "&:hover": { backgroundColor: "#fb7a8f" },
                }}
              >
                Cerrar Sesion
              </Button>
              
            ) : (
              <Button
                onClick={() => navigate("/Login")}
                variant="contained"
                sx={{
                  backgroundColor: "#fb5a73",
                  borderRadius: "18px",
                  "&:hover": { backgroundColor: "#fb7a8f" },
                }}
              >
                Ingresar
              </Button>
            )}
            
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarPublic;
