import { Box } from "@mui/material";
import ContentAcount from "../components/Auth/ContentAccount";
import React from "react";
import { isLoginActive } from "../middleware/auth";
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoginActive()) {
      navigate("/login");
    }
  }, [ navigate]);
  
  return (
   <Box>
   <ContentAcount/>
   </Box>
  );
};
