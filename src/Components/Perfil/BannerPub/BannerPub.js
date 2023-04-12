import { Box, Typography, Grid } from "@mui/material";

//Componente de react con MUI que muestra un banner de mis publicaciones

const BannerPub = () => {
  return (
    <Grid container justifyContent="center"> {/*  contenedor del item*/}
      <Grid item xs={10} sm={10} md={10} lg={10}> {/*  segun el tamaño de la pantalla como va a ocupar las columnas */}
        <Box sx={{ backgroundColor: "#276678", padding: "10px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px"}}>
          <Typography variant="h5" sx={{ fontFamily: "Lato, sans-serif", color: "#fff", fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Mis publicaciones
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default BannerPub;






