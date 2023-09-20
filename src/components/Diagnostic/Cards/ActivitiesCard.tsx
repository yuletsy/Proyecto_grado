import React from 'react'
import { Box } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";

type CardInfo = {
    srcImage: string;
    title: string;
    description: string;
  };
  

const ActivitiesCard = ({srcImage, title, description}:CardInfo) => {
  return (
    
    <Box
    sx={{
      display: "flex",
      width: "100%",
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "left",
      alignContent:"center",
      p:"2%"
    }}
  >
   
      
      <Box sx={{ display: "flex", width: "80%" }}>
        <Card
          style={{ width: "80%" }}
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "2%",
            borderRadius: "20px",
            borderColor: "#e7eae9",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "120px",
            }}
          >
            <Box
              sx={{
                p: "1%",
              }}
            >
              <img
                src={srcImage}
                width={400}
                height={250}
                style={{ borderRadius: "2.5rem" }}
                alt="image_1"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p:"2%"
              }}
            >
              <Box sx={{p:"2%"}}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 30,
                    fontWeight: "bold",
                  }}
                >
                 {title}
                </Typography>
                <Typography
                  sx={{
                    pt:"2%",
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                {description}
                </Typography>
              
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      
      
    </Box>
  )
}

export default ActivitiesCard;
