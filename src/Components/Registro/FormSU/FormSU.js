import { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const FormSU = () => {
  //Usando useState definimos los valores iniciales de los campos del formulario y como los vamos a almacenar
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Manejador de eventos que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la acción por defecto del formulario al ser enviado
    console.log({ email, username, password, isChecked }); // Imprime en la consola los valores del formulario
  };

  // Es la estructura de la parte visual del formulario
  return (
    <div style={{ display: "flex", justifyContent: "center" }}> //empezamos con un div que adentro lleva el titulo con sus estilos
      <Grid item xs={12} md={8} sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Typography variant="h5" mb={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' } }}>
          Registrate
        </Typography>
        {/* Inicia el formulario */}
        <form onSubmit={handleSubmit}>
          {/* Contenedor del formulario */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "500px"}}>
            {/* Campos del formulario */}
            <TextField  //cada uno de estos textfield representan un campo donde el usuario pone la informacion
              label="Correo electrónico"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} //ante el cambio tomara esa informacion y la enviara con ayuda de la funcio setEmail
              sx={{fontFamily: "Lato, sans-serif", mb: 3}}
            />
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{fontFamily: "Lato, sans-serif", mb: 3}}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{fontFamily: "Lato, sans-serif", mb: 3}}
            />
            {/* Checkbox para aceptar los términos y condiciones */}
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />} //cuando el usuario marque la casilla esta fuincion enviara la actualizacion de que se ha marcado la casilla
              label={
                <Typography component="a" href="/" target="_blank" rel="noopener">
                  Acepto los términos y condiciones
                </Typography>
              }
              sx={{ fontFamily: "Lato, sans-serif", mb: 3 }}
            />
            {/* Botón para enviar el formulario */}
            <Button variant="contained" type="submit" sx={{ fontFamily:  "Lato, sans-serif",   bgcolor: '#1687A7',
              '&:hover': {
                bgcolor: '#125E75',
              },
            }}>
              Registrarme
            </Button>
          </Box>
        </form>
      </Grid>
    </div>
  );
};

export default FormSU;