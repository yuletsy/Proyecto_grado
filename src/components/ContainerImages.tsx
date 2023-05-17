import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import image_logistic from "../assets/images/logistica.jpg";
import image_ctrl from "../assets/images/ctrl_inventario.jpg";

function ContainerImages() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        pb:"2%"
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          p: "2%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          Conoce los servicios de nuestro{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontSize: 30,
            fontWeight: "bolder",
          }}
        >
          <span style={{ color: "#fb7a8f" }}> consultorio logístico</span>{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "2%",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_ctrl}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_2"
          />
        </Box>

        <Box sx={{ pl: "4%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Control de inventarios
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Análisis e implementación del proceso
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            de control de inventarios.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "2%",
          
          width: "90%",
        }}
      >
        <Box sx={{ pr: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Creación de indicadores
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Creación de indicadores para el área de
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            logística y gestión de operaciones.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "2%",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>

        <Box sx={{ pl: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Procesos de control
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Asesoría de procesos de control en la
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            recepción, almacenamiento y despacho.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "2%",
          
          width: "90%",
        }}
      >
        <Box sx={{ pr: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Sobrecostos logísticos
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Análisis y control de sobrecostos logísticos.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "2%",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>

        <Box sx={{ pl: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Procesos de transporte
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Análisis y optimización en los procesos
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            de transporte.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "2%",
          
          width: "90%",
        }}
      >
        <Box sx={{ pr: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Logística de entrada y salida
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Análisis de los procesos de logística de entrada
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            y logística de salida.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "2%",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>

        <Box sx={{ pl: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Optimización de tiempo
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Análisis de optimización de los tiempos
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            de producción.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "2%",
          
          width: "90%",
        }}
      >
        <Box sx={{ pr: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Distribución de planta
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Diseño de distribución de planta.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: "2%",
          width: "90%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={image_logistic}
            width={400}
            height={300}
            style={{ borderRadius: "2.5rem" }}
            alt="image_1"
          />
        </Box>

        <Box sx={{ pl: "6%" }}>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Capacitaciones logísticas
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Capacitaciones logísticas en el
          </Typography>
          <Typography
            sx={{
              fontFamily: "unset",
              fontSize: 18,
            }}
          >
            Laboratorio de Ingeniería Industrial.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default ContainerImages;
