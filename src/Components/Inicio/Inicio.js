import "./Inicio.css";
import landingBg from "../Nosotros/img/background/bgLanding.png";
import imgContent from "../Nosotros/img/LandingPage/imgContent.png";
import publicationImg from "../Nosotros/img/background/publicationImg.png";
import publicationNoImg from "../Nosotros/img/background/publicationNoImg.png";

import * as React from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
// import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const landingPage = () => {
  return (
    <div>
      {/* ------------------------------- PRIMERA SECCIÓN ------------------------------- */}

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${landingBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          margin: "0 auto", // Center the container horizontally
        }}
      >
        {/* ------------------------------- TEXTO: PUBLICA SIN TEMOR ------------------------------- */}

        <Grid xs={12} sx={{ p: 10 }}>
          <Typography
            variant="h1" /* Se agrega una variante h1 que define al texto como un titulo y le da un font size responsive */
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            style={{ marginTop: "50px", color: "#276678" }}
          >
            Publica sin temor
          </Typography>
        </Grid>

        {/* ------------------------------- BOTON INGRESAR ------------------------------- */}

        <Grid xs={12} sx={{ p: 10 }}>
          <Link to="/login" className="link-decoration">
            <Button
              className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
              sx={{
                fontSize: "1.25rem",
                my: 2,
                bgcolor: "#276678",
                color: "#D3E0EA",
                display: "block",
              }}
            >
              Ingresar
            </Button>
          </Link>
        </Grid>
      </Box>

      {/* ------------------------------- SEGUNDA SECCIÓN ------------------------------- */}

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          margin: "0 auto", 
        }}
       
      >
        {/* ------------------------------- TÍTULO: ¿QUÉ ES D'VERITAS? ------------------------------- */}

        <Grid xs={12} sx={{ p: 1 }}>
          <Typography
            variant="h2" /* Se agrega una variante h2 que define al texto como un titulo y le da un font size responsive */

            
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            style={{ marginTop: "50px", color: "#276678" }}
          >
            ¿Qué es D'Veritas?
          </Typography>
        </Grid>

        {/* ------------------------------- TEXTO: DESCRIPCIÓN DE D'VERITAS ------------------------------- */}

        <Grid
          container
          xs={12}
          sx={{ paddingX: { xs: 0, md: 10 }, paddingY: 4 }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Typography
                className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
                sx={{
                  fontSize: "1.5rem",
                  p: 5,
                  textAlign: "justify",
                  maxWidth: 500,
                }}
              >
                Una red social que permite a sus usuarios hacer publicaciones y
                comentarios de manera anonima, ¿Tines una idea? Publicala sin
                temor. Encontraras gente que quiera compartir ideas contigo
                igualmente.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <img
                className="imgContent"
                src={imgContent}
                alt="Imagen Contenido"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ------------------------------- TERCER SECCIÓN ------------------------------- */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* ------------------------------- TÍTULO: NUESTRA COMUNIDAD ------------------------------- */}

        <Grid xs={12} sx={{ p: 1 }}>
          <Typography
            variant="h3" /* Se agrega una variante h3 que define al texto como un titulo y le da un font size responsive */
            className="latoBold" /* Se agrega clase lato para modificar el diseño en un css externo */
            style={{ marginTop: "50px", color: "#276678" }}
          >
            Nuestra comunidad
          </Typography>
        </Grid>
        {/* ------------------------------- TEXTO: COMUNIDAD ANONIMA ------------------------------- */}

        <Grid xs={12} sx={{ p: 1 }}>
          <Typography
            className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
            sx={{
              fontSize: "1.5rem",
              paddingBottom: 5,
              textAlign: "center",
              maxWidth: "80vh",
            }}
          >
            Una comunidad que crece día a día permitiendo a sus usuarios
            comentar sus ideas más abtractas sin prejuicios.
          </Typography>
        </Grid>

        {/* ------------------------------- NÚMERO DE USUARIOS ------------------------------- */}

        <Grid container xs={12} sx={{ paddingX: 10, paddingY: 4 }}>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Typography
                className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
                sx={{
                  fontSize: "1.5rem",
                  color: "#276678",
                  textAlign: { xs: "center", md: "flex-end" },
                  maxWidth: "80vh",
                }}
              >
                +12,000 <br /> {/* Se agrega <br/> para el salto de linea */}
                USUARIOS
              </Typography>
            </Box>
          </Grid>
          {/* ------------------------------- GRID PARA AGREGAR UN ESPACIO ENTRE ELEMENTOS. REVISAR ------------------------------- */}

          <Grid item xs={12} md={2}></Grid>
          {/* ------------------------------- NÚMERO DE PUBLICACIONES ------------------------------- */}

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
                sx={{
                  fontSize: "1.5rem",
                  color: "#276678",
                  textAlign: { xs: "center", md: "flex-end" },
                  maxWidth: "80vh",
                  marginTop: { xs: 5, md: 0 },
                }}
              >
                +100,000 <br />   {/* Se agrega <br/> para el salto de linea */}
                PUBLICACIONES
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* ------------------------------- EJEMPLO DE PUBLICACIÓN CON IMAGENES ------------------------------- */}

        <Grid container xs={12} sx={{ paddingX: 10 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                paddingRight: { xs: 0, md: 5 },
                marginTop: { xs: 5, md: 2 },
              }}
            >
              <img
                className="publicacionImg" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
                src={publicationImg}
                alt="Imagen Contenido"
              />
            </Box>
          </Grid>
          {/* ------------------------------- EJEMPLO DE PUBLICACIÓN SIN IMAGENES ------------------------------- */}

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                paddingLeft: { xs: 0, md: 5 },
                marginTop: { xs: 5, md: 2 },
              }}
            >
              <img
                className="publicacionImg" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
                src={publicationNoImg}
                alt="Imagen Contenido"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                paddingLeft: { xs: 0, md: 5 },
                marginTop: { xs: 5, md: 2 },
              }}
            >
              <img
                className="publicacionImg" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
                src={publicationNoImg}
                alt="Imagen Contenido"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default landingPage;
