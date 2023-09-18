import { Box } from "@mui/material";
import React from "react";
import CardEtapas from "../components/Home/CardEtapas";
import ContainerCard from "../components/Home/ContainerCard";
import ContainerImages from "../components/Home/ContainerImages";
import InfoFooter from "../components/Footer/InfoFooter";
import Main from "../components/Home/Main";

export const HomePage = () => {
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        width: "100%",
      }}
    >
      <Box sx={{ bgcolor: "#ffeddf" , pl:"6%"}}>
        <Main />
      </Box>
      <Box sx={{ bgcolor: "#white" }}>
        <ContainerImages />
      </Box>
      <Box sx={{ bgcolor: "#f7fbff" }}>
        <ContainerCard />
      </Box>
      <Box sx={{ bgcolor: "#white" }}>
        <CardEtapas />
      </Box>
      <Box sx={{ bgcolor: "#f7fbff" }}>
        <InfoFooter />
      </Box>
    </Box>
  );
};
