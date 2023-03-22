import { useState } from "react";
import { Grid, Box, Typography, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import './FormSU.css';

/* Componente formulario de registro donde el usuario ingresa un nombre de usuerio, un correo electronico y 
una contraseña para crear un perfil para la red social */


const FormSU = () => {
  //Usando useState definimos los valores iniciales de los campos del formulario y las funciones que los modifican
  const [email, setEmail] = useState(""); // Estado inicial '' y la funcion setEmail modificara estos valores
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false); //Estado inicial false, el checkbox no esta confirmado 

  // Manejador de eventos que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la acción por defecto del formulario al ser enviado
    console.log({ email, username, password, isChecked }); // Imprime en la consola los valores del formulario, esto es temporal hasta tener el backend
  };

  // Es la estructura de la parte visual del formulario
  return (
    <Grid container className="containerForm"  > {/* Grid principal que contiene toda los campos y el boton */}
      <Grid item className="gridForm" xs={10} md={8} lg={6}> {/* Grid iten que a su vez define las columnas a usar del componente segun  el tamaño de la pantalla */}
        <Typography className="tittleForm" variant="h3"> {/*Titulo h3 */}
          Registrate
        </Typography>
        {/* Inicia el formulario */}
        <form onSubmit={handleSubmit} > {/* Cuando tenemos un  */}
          {/* Contenedor del formulario */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            {/* Campos del formulario */}
            <TextField  //cada uno de estos textfield representan un campo donde el usuario pone la informacion
              className="textField"
              label="Correo electrónico"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} //ante el cambio tomara esa informacion y la enviara con ayuda de la funcio setEmail
            />
            <TextField
              className="textField"
              label="Nombre de usuario"
              variant="outlined"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              className="textField"
              label="Contraseña"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <Button variant="contained" type="submit" className="buttonForm" >
              Registrarme
            </Button>
          </Box>
        </form>
      </Grid>
      </Grid>

  );
};

export default FormSU; 