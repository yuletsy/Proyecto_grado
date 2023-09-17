import { Box, Typography } from "@mui/material";
import React from "react";

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "1rem",
        display: "flex",
        bgcolor: "black",
        pb: "2%",
        bottom: 0,
      }}
    >
      <Typography variant="h2" component="h2">
        NOT FOUND PAGE
      </Typography>
    </Box>
  );
};
