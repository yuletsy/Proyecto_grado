import { Typography } from "@mui/material";
import { Box } from "@mui/system";
function InfoDiagnostic() {
  
    
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        pb:"2%",
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
          Promedio general : 
        </Typography>
        
      </Box> 
   
      
    </Box>
    
  );
}
export default InfoDiagnostic;