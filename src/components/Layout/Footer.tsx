import * as React from "react";
import { Button, Container, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import logo from "../../assets/images/logo.png";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import { isLoginActive } from "../../middleware/auth";

// const pages = ["Inicio", "Diagnostico", "Ingresa a tu cuenta"];
const pages = [
  { name: "Inicio", path: "/" },
  { name: "Diagnostico", path: "/Question" },

  
];
const page = [
  { name: "Ingresa a tu cuenta", path: "/login" },
  { name: "Registrate", path: "/Register" },
]

function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "1rem",
        display: "flex",
        bgcolor: "#69a2b0",
        pb: "2%",
        bottom: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "4rem",
              pb: "1.5%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isLoginActive() ? (
              pages.map((pages) => (
                <Button
                  key={pages.name}
                  onClick={() => navigate(pages.path)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#8e8077",
                    },
                  }}
                >
                  {pages.name}
                </Button>
              ))) : ( 
              page.map((page) => (
              <Button
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#8e8077",
                  },
                }}
              >
                {page.name}
              </Button>
            )))}
          </Box>
        </Toolbar>
        <Divider variant="middle" sx={{ bgcolor: "white", width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            pt: "3%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <img src={logo} width={190} height={50} alt="Logo" />
          </Box>

          <Box sx={{ pr: "2%", alignItems: "center" }}>
            <IconButton
              sx={{ bgcolor: "white", color: "#69a2b0", p: "20%" }}
              aria-label="telefono"
              type="url"
              href="#"
            >
              <PhoneRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ pr: "2%" }}>
            <IconButton
              sx={{ bgcolor: "white", color: "#69a2b0", p: "20%" }}
              aria-label="facebook"
              type="url"
              href="https://www.facebook.com/Corporacionuniversitariaadventista"
            >
              <FacebookRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ pr: "2%" }}>
            <IconButton
              sx={{ bgcolor: "white", color: "#69a2b0", p: "20%" }}
              aria-label="youtube"
              type="url"
              href="https://www.youtube.com/@canalunac"
            >
              <SmartDisplayRoundedIcon />
            </IconButton>
          </Box>
          <Box sx={{ pr: "2%" }}>
            <IconButton
              sx={{ bgcolor: "white", color: "#69a2b0", p: "20%" }}
              aria-label="instagram"
              type="url"
              href="https://www.instagram.com/unaccolombia/"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
          <Box sx={{ pr: "2%" }}>
            <IconButton
              sx={{ bgcolor: "white", color: "#69a2b0", p: "20%" }}
              aria-label="instagram"
              type="url"
              href="https://twitter.com/UnacColombia"
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Footer;
