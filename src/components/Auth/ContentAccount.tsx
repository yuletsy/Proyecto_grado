import ImageLogisticBg from "../../assets/images/logistic_bg.jpg";
import { Box, Button } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import image_logistic from "../../assets/images/logistica.jpg";
import { useNavigate } from "react-router-dom";

function ContentAcount() {
  const navigate = useNavigate();
  
  return (
    <Box
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
          backgroundImage: `url(${ImageLogisticBg})`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderRadius: "1.5rem",
            p: "2%",
            width: "80%",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "unset",
                fontSize: 26,
              }}
            >
              ¡Bienvenido!
            </Typography>
          </Box>
          <Box sx={{ display: "flex", p: "2%", width: "100%", justifyContent:"center, " }}>
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
                    src={image_logistic}
                    width={500}
                    height={400}
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
                      Resultados de Diagnóstico
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "unset",
                        fontSize: 22,
                      }}
                    >
                      Revisa los resultados del diagnóstico realizado
                    </Typography>
                  <Box sx={{pt:"4%"}}>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/Results")}
                      sx={{
                        backgroundColor: "#fb5a73",
                        borderRadius: "18px",
                        "&:hover": { backgroundColor: "#fb7a8f" },
                        fontFamily: "sans-serif",
                      }}
                    >
                      Ver resultados
                    </Button>
                  </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: "flex", p: "2%", width: "100%", justifyContent:"center, " }}>
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
                    src={image_logistic}
                    width={500}
                    height={400}
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
                      Recursos
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "unset",
                        fontSize: 22,
                      }}
                    >
                      Revisa los recursos que tenemos disponibles para ti 
                    </Typography>
                  <Box sx={{pt:"4%"}}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fb5a73",
                        borderRadius: "18px",
                        "&:hover": { backgroundColor: "#fb7a8f" },
                        fontFamily: "sans-serif",
                      }}
                    >
                      Ver recursos
                    </Button>
                  </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ display: "flex", p: "2%", width: "100%", justifyContent:"center, " }}>
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
                    src={image_logistic}
                    width={500}
                    height={400}
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
                      Capacitaciones
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "unset",
                        fontSize: 22,
                      }}
                    >
                      Ingresa a tus capacitaciones programadas
                    </Typography>
                  <Box sx={{pt:"4%"}}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#fb5a73",
                        borderRadius: "18px",
                        "&:hover": { backgroundColor: "#fb7a8f" },
                        fontFamily: "sans-serif",
                      }}
                    >
                      Ver capacitaciones
                    </Button>
                  </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default ContentAcount;
