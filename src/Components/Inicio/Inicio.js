import "./Inicio.css";
//import landingBg from "../Nosotros/img/background/bgLanding.png";
import imgContent from "../Nosotros/img/LandingPage/imgContent.png";
import publicationImg from "../Nosotros/img/background/publicationImg.png";
import publicationNoImg from "../Nosotros/img/background/publicationNoImg.png";

import * as React from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const landingPage = () => {
  return (
    <div>
      {/* ------------------------------- PRIMERA SECCIÓN ------------------------------- */}

      <Grid container
      className="firstSection"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          //bgcolor: "#D3E0EA",
          
        }}
      >
        {/* ------------------------------- TEXTO: PUBLICA SIN TEMOR ------------------------------- */}

        <Grid item xs={10}>
          <Typography
            variant="h1" /* Se agrega una variante h1 que define al texto como un titulo y le da un font size responsive */
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{ marginY: 25, color: "#D3E0EA", }}
          >
            Publica sin temor
          </Typography>
        </Grid>

        {/* ------------------------------- BOTON INGRESAR ------------------------------- */}

        <Grid item xs={10} sx={{ marginTop: 5, marginBottom:10 }}>
          <Link className="buttonInicio" to="/login" underline="none">
            <Button className="buttonInicio lato" variant="contained" 
              /* Se agrega clase lato para modificar el diseño en un css externo */
              sx={{
                
                fontSize: "1.25rem",
                bgcolor: "#D3E0EA",
                color: "#276678",
              }}
            >
              Ingresar
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* ------------------------------- SEGUNDA SECCIÓN ------------------------------- */}

      <Grid container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginY: 5
        }}
      >
        {/* ------------------------------- TÍTULO: ¿QUÉ ES D'VERITAS? ------------------------------- */}

        <Grid item xs={10} sx={{ marginY: 3 }}>
          <Typography
            variant="h2" /* Se agrega una variante h2 que define al texto como un titulo y le da un font size responsive */
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{ marginTop: "50px", color: "#276678" }}
          >
            ¿Qué es D'Veritas?
          </Typography>
        </Grid>

        {/* ------------------------------- TEXTO: DESCRIPCIÓN DE D'VERITAS ------------------------------- */}

      
          <Grid item xs={10} md={5} sx={{display:"flex", justifyContent:"center"}}>
          
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
                comentarios de manera anónima, ¿Tienes una idea? Publicala sin
                temor. Encontrarás gente que quiera compartir ideas contigo
                igualmente.
              </Typography>
          </Grid>
          <Grid item xs={10} md={5}>
          
              <img
                className="imgContent"
                src={imgContent}
                alt="Imagen Contenido"
              />
            
          </Grid>
        </Grid>
    

      {/* ------------------------------- TERCER SECCIÓN ------------------------------- */}

      <Grid container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          margin: "0 auto",
          bgcolor: "#D3E0EA",
        }}
      >
        {/* ------------------------------- TÍTULO: NUESTRA COMUNIDAD ------------------------------- */}

        <Grid item xs={10} sx={{ p: 1 }}>
          <Typography
            variant="h3" /* Se agrega una variante h3 que define al texto como un titulo y le da un font size responsive */
            className="latoBold" /* Se agrega clase lato para modificar el diseño en un css externo */
            style={{ marginTop: "50px", color: "#276678" }}
          >
            Nuestra comunidad
          </Typography>
        </Grid>
        {/* ------------------------------- TEXTO: COMUNIDAD ANONIMA ------------------------------- */}

        <Grid item xs={10} sx={{ p: 1 }}>
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
      </Grid>
      {/* ------------------------------- NÚMEROS DE LA APLICACIÓN ------------------------------- */}

      <Grid
        container
        rowSpacing={1}
        justifyContent="center"
        sx={{ paddingY: 4,textAlign:"center",
        bgcolor: "#D3E0EA",
      }}
      >
        {/* ------------------------------- NÚMERO DE USUARIOS ------------------------------- */}

        <Grid
          item
          xs={10}
          md={5}
        >
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{
              fontSize: "1.5rem",
              color: "#276678",
            }}
          >
            +12,000 <br /> {/* Se agrega <br/> para el salto de linea */}
            USUARIOS
          </Typography>
        </Grid>
        {/* ------------------------------- NÚMERO DE PUBLICACIONES ------------------------------- */}

        <Grid
          item
          xs={10}
          md={5}
          
        >
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{
              fontSize: "1.5rem",
              color: "#276678",
              marginTop: { xs: 5, md: 0 },
            }}
          >
            +100,000 <br /> {/* Se agrega <br/> para el salto de linea */}
            PUBLICACIONES
          </Typography>
        </Grid>
      </Grid>

      {/* ------------------------------- EJEMPLO DE PUBLICACIÓN ------------------------------- */}

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        sx={{ paddingY: 3 ,
          bgcolor: "#D3E0EA",}}
        
      >
        {/* ------------------------------- EJEMPLO DE PUBLICACIÓN CON IMAGENES ------------------------------- */}

        <Grid
          item
          sm={10}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="publicacionImg publicacion" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
            src={publicationImg}
            alt="Imagen Contenido"
          />
        </Grid>
        {/* ------------------------------- EJEMPLO DE PUBLICACIÓN SIN IMAGENES ------------------------------- */}

        <Grid
          item
          sm={10}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <img
            className="publicacionNoImg publicacion" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
            src={publicationNoImg}
            alt="Imagen Contenido"
          />
          <img
            className="publicacionNoImg publicacion" /* Se agrega clase publicacionImg para modificar el diseño en un css externo */
            src={publicationNoImg}
            alt="Imagen Contenido"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default landingPage;
