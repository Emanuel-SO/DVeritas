import "./Inicio.css";
import imgContent from "../../img/LandingPage/imgContent.png";
import publicationImg from "../../img/LandingPage/catPublic.jpg";


import * as React from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from 'react';
import { API_URL } from "../../configuracion";




const LandingPage = () => {

  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/dveritas/usuarios/totalusuarios`); 
        const jsonData = await response.json();
        setUsuarios(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/dveritas/publicaciones/totalpublicaciones`); 
        const jsonData = await response.json();
        setPublicaciones(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      {/* ------------------------------- PRIMERA SECCIÓN ------------------------------- */}

      <Grid
        container
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
            sx={{
              marginY: { xs: 12, md: 25 },
              color: "#D3E0EA",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "5rem", lg: "7rem" },
            }}
          >
            Publica sin temor
          </Typography>
        </Grid>

        {/* ------------------------------- BOTON INGRESAR ------------------------------- */}

        <Grid item xs={10} sx={{ marginTop: 5, marginBottom: 10 }}>
          <Link className="buttonInicio" to="/ingresar" underline="none">
            <Button
              variant="contained"
              size="large"
              sx={{
                my: 2,
                color: "#D3E0EA",
                bgcolor: "#1687A7",
                fontSize: { xs: ".8rem", sm: "1.2rem", lg: "2rem" },
                "&:hover": { bgcolor: "#125E75" },
              }}
            >
              Ingresar
            </Button>
          </Link>
        </Grid>
      </Grid>

      {/* ------------------------------- SEGUNDA SECCIÓN ------------------------------- */}

      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginY: 5,
        }}
      >
        {/* ------------------------------- TÍTULO: ¿QUÉ ES D'VERITAS? ------------------------------- */}

        <Grid item xs={10} sx={{ marginTop: { xs: 3, sm: 5, lg: 7 } }}>
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{
              color: "#276678",
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
            }}
          >
            ¿Qué es D'Veritas?
          </Typography>
        </Grid>

        {/* ------------------------------- TEXTO: DESCRIPCIÓN DE D'VERITAS ------------------------------- */}

        <Grid
          item
          xs={10}
          md={5}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            className="lato" /* Se agrega clase lato para modificar el diseño en un css externo */
            sx={{
              textAlign: "justify",
              p: { xs: 1, sm: 3 },
              fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "1.8rem" },
              marginY: { xs: 2 },
            }}
          >
            Una red social que permite a sus usuarios hacer publicaciones y
            comentarios de manera anónima, ¿Tienes una idea? Pública sin temor.
            Encontrarás gente que quiera compartir ideas contigo.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginY: { xs: 5, lg: 8 } }}>
          <img
            id="img"
            className="imgContent"
            src={imgContent}
            alt="Imagen Contenido"
          />
        </Grid>
      </Grid>

      {/* ------------------------------- TERCER SECCIÓN ------------------------------- */}

      <Grid
        container
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
            sx={{
              fontWeight: "bold",
              marginTop: "50px",
              color: "#276678",
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
            }}
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
              p: { xs: 1, sm: 5 },
              fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "1.8rem" },
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
        sx={{ paddingY: 4, textAlign: "center", bgcolor: "#D3E0EA" }}
      >
        {/* ------------------------------- NÚMERO DE USUARIOS ------------------------------- */}

        <Grid item xs={10} md={5}>
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{
              color: "#276678",
              fontSize: { xs: "1.2rem", sm: "1.6rem", lg: "1.8rem" },
            }}
          >

          
          +{usuarios} <br /> {/* Se agrega <br/> para el salto de linea */}
            USUARIOS
          </Typography>
        </Grid>
        {/* ------------------------------- NÚMERO DE PUBLICACIONES ------------------------------- */}

        <Grid item xs={10} md={5}>
          <Typography
            className="latoBold" /* Se agrega clase latoBold para modificar el diseño en un css externo */
            sx={{
              color: "#276678",
              marginTop: { xs: 5, md: 0 },
              fontSize: { xs: "1.2rem", sm: "1.6rem", lg: "1.8rem" },
            }}
          >
           +{publicaciones} <br /> {/* Se agrega <br/> para el salto de linea */}
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
        sx={{ paddingY: 3, bgcolor: "#D3E0EA" }}
      >
        {/* ------------------------------- EJEMPLO DE PUBLICACIÓN CON IMAGENES ------------------------------- */}

        <Grid
          item
          sm={10}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: "95%", sm: "80%", md: "60%" },
              margin: "auto",
              borderRadius: "15px",
              my: "20px",
            }}
          >
            {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/603.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                  {/* icono opciones */}
                </IconButton>
              }
              title="royThompson"
              subheader="22/03/2023" /* Usa metodo de JS para darle formato  */
            />
            <Divider />

            {/* Componente que permite asignar una imagen a las publicaciones */}
            <CardMedia
            
              component="img"
              image={publicationImg} /* ruta de la imagen */
              alt="Cat"
            />

            {/* Componente de linea que divide componentes */}
            <Divider />

            {/* Contenido del la card de publicacion */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                My cat is so beautiful
              </Typography>
            </CardContent>

            {/* Componente de linea que divide componentes */}
            <Divider />

            {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>  ---------------> se deja por si no hay likes*/}
              <Button
                aria-label="add to favorites"
                startIcon={<FavoriteIcon />}
              >
                6
              </Button>

              {/* <IconButton aria-label="add comment" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>
          </IconButton>  ---------------> se deja por si no hay comentarios*/}
              <Button
                aria-label="add to favorites"
                startIcon={<ChatIcon />}
                sx={{ marginLeft: "auto" }}
              >
                1
              </Button>
            </CardActions>
          </Card>

          {/* <img
            className="publicacionImg publicacion"
            src={publicationImg}
            alt="Imagen Contenido"
          /> */}
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
          <Card
            sx={{
              maxWidth: { xs: "95%", sm: "100%", md: "100%" },
              margin: "auto",
              borderRadius: "15px",
              my: "20px",
            }}
          >
            {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="" />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                  {/* icono opciones */}
                </IconButton>
              }
              title="anon233"
              subheader="06/03/2023" /* Usa metodo de JS para darle formato  */
            />
            <Divider />

            {/* Contenido del la card de publicacion */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Fin de semana de ir al cine, ¿Ustedes qué planes tienen? ¿Qué peliculas recomiendan?
              </Typography>
            </CardContent>

            {/* Componente de linea que divide componentes */}
            <Divider />

            {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>  ---------------> se deja por si no hay likes*/}
              <Button
                aria-label="add to favorites"
                startIcon={<FavoriteIcon />}
              >
                2
              </Button>

              {/* <IconButton aria-label="add comment" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>
          </IconButton>  ---------------> se deja por si no hay comentarios*/}
              <Button
                aria-label="add to favorites"
                startIcon={<ChatIcon />}
                sx={{ marginLeft: "auto" }}
              >
                10
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: { xs: "95%", sm: "100%", md: "100%" },
              margin: "auto",
              borderRadius: "15px",
              my: "20px",
            }}
          >
            {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/712.jpg"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                  {/* icono opciones */}
                </IconButton>
              }
              title="dWindler"
              subheader="22/02/2023" /* Usa metodo de JS para darle formato  */
            />
            <Divider />
            {/* Contenido del la card de publicacion */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                ¿Quién es su personaje favorito de Harry Potter? El mío siempre
                será Severus Snape.
              </Typography>
            </CardContent>

            {/* Componente de linea que divide componentes */}
            <Divider />

            {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>  ---------------> se deja por si no hay likes*/}
              <Button
                aria-label="add to favorites"
                startIcon={<FavoriteIcon />}
              >
                20
              </Button>

              {/* <IconButton aria-label="add comment" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>
          </IconButton>  ---------------> se deja por si no hay comentarios*/}
              <Button
                aria-label="add to favorites"
                startIcon={<ChatIcon />}
                sx={{ marginLeft: "auto" }}
              >
                3
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;
