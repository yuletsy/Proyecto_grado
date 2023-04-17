import * as React from "react";
import { Button, Container, IconButton, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import logo from "../../assets/images/logo.png";
import SmartDisplayRoundedIcon from "@mui/icons-material/SmartDisplayRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import TwitterIcon from '@mui/icons-material/Twitter';
const pages = ["Inicio", "Diagnostico", "Ingresa a tu cuenta"];

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        paddingTop: "1rem",
        display: "flex",
        bgcolor: "#69a2b0",
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
            {pages.map((page) => (
              <Button
                key={page}
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
                {page}
              </Button>
            ))}
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
