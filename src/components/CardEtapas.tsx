import * as React from "react";
import { Box, Button } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded";
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded";
import Looks4RoundedIcon from "@mui/icons-material/Looks4Rounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
function CardEtapas() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        pt: "8%",
        pb: "16%",
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
          pb: "2%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 25,
            fontWeight: "bolder",
          }}
        >
          <span style={{ color: "#fb7a8f" }}>Etapas del proceso </span> del
          consultorio
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 25,
            fontWeight: "bolder",
          }}
        >
          logístico
        </Typography>
      </Box>
      <Box sx={{ justifyContent: "flex-start" }}>
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: 18,
          }}
        >
          El proceso del consultorio logístico tendrá
          <span style={{ fontWeight: "bolder" }}> cuatro (4) etapas</span>, las
          cuales estarán alineados
        </Typography>
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: 18,
          }}
        >
          con un{" "}
          <span style={{ fontWeight: "bolder" }}>
            {" "}
            proceso que ayude a identificar las debilidades
          </span>{" "}
          de las empresas y crear un{" "}
          <span style={{ fontWeight: "bolder" }}> plan</span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "unset",
            fontSize: 18,
          }}
        >
          <span style={{ fontWeight: "bolder" }}> de trabajo ajustado </span>a
          las necesidades de la misma.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", pt: "2%" }}>
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "480px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
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
                maxWidth: 600,
                flexDirection: "column",
                pb: "6%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  pb: "2%"
                }}
              >
                <Box sx={{ flexDirection: "row" }}>
                  <LooksOneRoundedIcon style={{ fontSize: 70 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    Diagnóstico
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pb: "6%", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  Análisis mediante un
                  <span style={{ fontWeight: "bolder", color: "#242a55" }}>
                    {" "}
                    checklist de las dificultades y oportunidades de mejora{" "}
                  </span>
                  en los diferentes procesos productivos relacionados con la
                  cadena de suministros.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  <span style={{ fontWeight: "bolder" }}> Duración: </span>
                  Máximo 16 horas repartidas según la necesidad de la empresa.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  Se sugiere 8 horas de reuniones y entrevistas en las
                  instalaciones de la empresa y 8 horas de análisis- diagnóstico
                  de la misma.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fb5a73",
                    borderRadius: "18px",
                    "&:hover": { backgroundColor: "#fb7a8f" },
                    fontFamily: "sans-serif",
                  }}
                >
                  ¡Haz el diagnostico ahora!
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
        {/* 2 card */}
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "480px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
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
                maxWidth: 600,
                flexDirection: "column",
                pb: "6%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pb: "2%",
                }}
              >
                <Box sx={{ flexDirection: "row" }}>
                  <LooksTwoRoundedIcon style={{ fontSize: 70 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    Informe de propuesta de consultoría
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pb: "7%", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  De común acuerdo con la empresa una vez superada la etapa de
                  diagnóstico se le entrega la propuesta de la consultoría. Se
                  programa reunión con la empresa.
                  <span style={{ fontWeight: "bolder" }}> Duración: </span>
                  Variable
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <AssignmentOutlinedIcon style={{ fontSize: 200 }} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Box sx={{ display: "flex", pt: "2%" }}>
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "480px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
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
                maxWidth: 600,
                flexDirection: "column",
                pb: "6%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  pb: "2%",
                }}
              >
                <Box sx={{ flexDirection: "row" }}>
                  <Looks3RoundedIcon style={{ fontSize: 70 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    Aplicación de propuesta de consultoría
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pb: "6%", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  {" "}
                  Aplicación del plan de trabajo.
                  <span style={{ fontWeight: "bolder" }}> Duración: </span>{" "}
                  Entre 32 a 36 horas aproximadamente, repartidos en un máximo
                  de 3 a 4 horas diarias teniendo en cuenta:
                  {/* 
                   
                   */}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 17,
                  }}
                >· Disponibilidad del equipo del consultorio logistico
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 17,
                  }}
                >· Permisos de la empresa
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 17,
                  }}
                >· Desplazamiento a las instalaciones físicas
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 17,
                  }}
                >· Recomendaciones
                laborales de SST en relación al convenio Universidad- Empresa
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 17,
                  }}
                >· Disponibilidad de tiempo de las personas de la empresa Máximo
                16 horas repartidas según la necesidad de la empresa.
                </Typography>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
            </CardContent>
          </Card>
        </Box>
        {/* 2 card */}
        <Box sx={{ display: "flex", p: "2%", pr: "4%" }}>
          <Card
            style={{ width: "400px", height: "480px" }}
            variant="outlined"
            sx={{
              display: "flex",
              maxWidth: 600,
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
                maxWidth: 600,
                flexDirection: "column",
                pb: "6%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pb: "2%",
                }}
              >
                <Box sx={{ flexDirection: "row" }}>
                  <Looks4RoundedIcon style={{ fontSize: 70 }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "unset",
                      fontSize: 25,
                      fontWeight: "bold",
                    }}
                  >
                    Informe final
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ pb: "7%", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "unset",
                    fontSize: 18,
                  }}
                >
                  Se conciliarán reuniones con los directivos de la empresa para
                  entregar los resultados de la consultoría y recomendar su
                  forma de aplicación.
                  <span style={{ fontWeight: "bolder" }}> Duración: </span>
                  12 horas aproximadamente.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TaskRoundedIcon style={{ fontSize: 200 }} />
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
export default CardEtapas;
