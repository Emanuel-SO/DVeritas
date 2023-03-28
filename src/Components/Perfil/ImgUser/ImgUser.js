import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";

//Componenete de react con MUI que muestra la foto del usuario junto con su nombre, esta formado de dos grid containers, uno para la imagen y otro para el nombre de usuario

const ImgUser = () => {
  // Determinar si el dispositivo tiene un ancho máximo de 600px, esta variable la ocuparemos despues para ver si debe cambiar el tamaño de la fuente y los componenetes
  const matches = useMediaQuery("(max-width:600px)");

  return (
    // Contenedor principal Grid container
      <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
        {/* Avatar de usuario */}
        <Grid item xs={6} sm={6} sx={{alignItems: "right" }}>
          <Avatar
            alt="Person"
            src="https://cdn-icons-png.flaticon.com/512/1534/1534082.png"
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
            Mr. Anonimo
          </Typography>
          <Typography
            sx={{
              // Estilo del handle de usuario, ajustado según el ancho del dispositivo
              fontFamily: "Lato, sans-serif",
              fontSize: matches ? "16px" : "24px",
              fontWeight: "bold",
              marginLeft: matches ? "20px" : "50px",
              color: "#1687A7",
            }}
          >
            @mranonimo
          </Typography>
        </Grid>
      </Grid>
  );
};

export default ImgUser;

