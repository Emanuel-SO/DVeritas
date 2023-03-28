import "./Inicio.css";
import imgContent from "../../img/LandingPage/imgContent.png";
import publicationImg from "../../img/background/publicationImg.png";
import publicationNoImg from "../../img/background/publicationNoImg.png";
import publicationNoImg2 from "../../img/background/publicationNoImg2.png";

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
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{ marginY:{xs:12, md: 25}, color: "#D3E0EA", fontWeight: 'bold', fontSize:{xs:"2.5rem", sm:"5rem", lg:"7rem"} }}
          >
            Publica sin temor
          </Typography>
        </Grid>

        {/* ------------------------------- BOTON INGRESAR ------------------------------- */}

        <Grid item xs={10} sx={{ marginTop: 5, marginBottom:10 }}>
          <Link className="buttonInicio" to="/ingresar" underline="none">
          <Button variant="contained" size="large" sx={{ my: 2, color: "#D3E0EA", bgcolor:"#1687A7", fontSize:{xs:".8rem", sm:"1.2rem", lg:"2rem"}
           , '&:hover': { bgcolor: '#125E75'} }}>
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

        <Grid item xs={10} sx={{ marginTop: {xs:3, sm:5,  lg:7 }}}>
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{  color: "#276678",fontWeight: 'bold', fontSize:{xs:"2rem", sm:"2.5rem", lg:"3rem"} }}
          >
            ¿Qué es D'Veritas?
          </Typography>
        </Grid>

        {/* ------------------------------- TEXTO: DESCRIPCIÓN DE D'VERITAS ------------------------------- */}

      
          <Grid item xs={10} md={5} lg={4} sx={{display:"flex", justifyContent:"center"}}>
          
              <Typography
                className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
                sx={{
                  
                  
                  textAlign: "justify",
                  p: {xs: 1, sm:3},
                  fontSize:{xs:"1.2rem", sm:"1.5rem", lg:"1.8rem"}, marginY:{xs:2}                }}
              >
                Una red social que permite a sus usuarios hacer publicaciones y
                comentarios de manera anónima, ¿Tienes una idea? Pública sin
                temor. Encontrarás gente que quiera compartir ideas contigo.
              </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{marginY:{xs:5, lg:8}}}>
          
              <img id="img"
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

        <Grid item xs={12} sx={{ p: 1 }}>
          <Typography
            className="latoBold" /* Se agrega clase lato para modificar el diseño en un css externo */
            sx={{ fontWeight: 'bold', marginTop: "50px", color: "#276678", fontSize:{xs:"2rem", sm:"2.5rem", lg:"3rem"} }}
          >
            Nuestra comunidad
          </Typography>
        </Grid>
        {/* ------------------------------- TEXTO: COMUNIDAD ANONIMA ------------------------------- */}

        <Grid item xs={10} sx={{ p: 1 }}>
          <Typography
            className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
            sx={{
              textAlign: "justify",
                  p: {xs: 1, sm:5},
                  fontSize:{xs:"1.2rem", sm:"1.5rem", lg:"1.8rem"}
              
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

              color: "#276678",
              fontSize:{xs:"1.2rem", sm:"1.6rem", lg:"1.8rem"}

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
              color: "#276678",
              marginTop: { xs: 5, md: 0 },
              fontSize:{xs:"1.2rem", sm:"1.6rem", lg:"1.8rem"}
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
            src={publicationNoImg2}
            alt="Imagen Contenido"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default landingPage;
