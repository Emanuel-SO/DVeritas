import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { API_URL } from "../../../configuracion";
//Componenete de react con MUI que muestra la foto del usuario junto con su nombre, esta formado de dos grid containers, uno para la imagen y otro para el nombre de usuario

const ImgUser = () => {
  // Determinar si el dispositivo tiene un ancho máximo de 600px, esta variable la ocuparemos despues para ver si debe cambiar el tamaño de la fuente y los componenetes
  const matches = useMediaQuery("(max-width:600px)");

  // aisganmos el useNavigate a la constante navigate
  const navigate = useNavigate();

  // Validar si ya iniciaste sesion, si ya estas loggeado serás redirigido a tu perfil
    if (!(sessionStorage.getItem('id'))) {
    console.log('No estas logeado');
    setTimeout(() => {
      navigate('/ingresar');
    }, 50);
  }



  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    fetch(`${API_URL}/dveritas/usuarios/${id}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error) => console.log(error));
  }, []);


  return (
    // Contenedor principal Grid container
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
        {/* Avatar de usuario */}
        <Grid item xs={6} sm={6} sx={{alignItems: "right" }}>
          <Avatar
            alt="Person"
            src={usuario.avatar}
            sx={{
              // Estilo del avatar, ajustado según el ancho del dispositivo, si el dispositivo ya es menor que 600px que decalaramos en matches va a reducir el tamaño a 100 y tambien los margenes
              width: matches ? 100 : 150,
              height: matches ? 100 : 150,
              border: "3px solid #276678",
              marginLeft: matches ? "auto" : "auto",
              marginRight: matches ? "20px" : "50px",
              alignItems: "right"
            }}
          />
        </Grid>
        {/* Información del usuario, este es otro grid item donde almacenamos el nombre de usuario*/}
        <Grid item xs={6} sm={6} sx={{ textAlign: matches ? "left" : "left" }}>
          <Typography
            sx={{
              // Estilo del nombre de usuario, ajustado según el ancho del dispositivo, se ocupa la misma variables de matches
              fontFamily: "Lato, sans-serif",
              fontSize: matches ? "18px" : "34px",
              fontWeight: "bold",
              marginLeft: matches ? "20px" : "50px",
              color: "#276678"
            }}
          >
            {usuario.nombre}
          </Typography>
          <Typography
            sx={{
              // Estilo del handle de usuario, ajustado según el ancho del dispositivo
              fontFamily: "Lato, sans-serif",
              fontSize: matches ? "10px" : "19px",
              fontWeight: "bold",
              marginLeft: matches ? "20px" : "50px",
              color: "#1687A7",
            }}
          >
            {usuario.correo}
          </Typography>
        </Grid>
      </Grid>
  );
};

export default ImgUser;

