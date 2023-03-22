import { useState } from "react";
import React from "react";
import {Box, Button, Modal, Typography, TextField, Grid, } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import './ButtonUserConfig.css'

/* Componenete de react del boton de configuracion de usuario, al presionarlo despliega un modal que incluye el campo para
ingresar el nuevo nombre de usuario, nuevo correo elctronico y contraseña */

const ButtonUserConfig = () => {
  
  const [open, setOpen] = useState(false); // Definimos el estado inicial open y el metodo con el que se modifican
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {   /* Al llamar la funcion el estado de open cambiara a true, abrimos el modal */
    setOpen(true);
  };

  const handleClose = () => {  /* Al llamar la funcion el estado de open cambiara a falso, cerramos el modal */
    setOpen(false);
  };

  const handleSubmit = (event) => {  /* Cuando se llama esta funcion se mandan a consola los datos guardados y se cierra el modal */
    event.preventDefault();
    console.log({ name, email, password }); // puedes hacer algo con los datos del formulario aquí
    handleClose(); // cerramos la ventana modal
  };

  return (
    <Grid container  spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}} > {/* Contenedor principal del boton */}
      <Button variant="outlined" onClick={handleOpen} endIcon={<EditRoundedIcon />} sx={{ fontFamily:  "Lato, sans-serif", color: "#276678" }}> {/* Boton que al hacerle click llama la funcio handleOpen que abre el modal  */}
        Editar perfil
      </Button >
      <Modal open={open} onClose={handleClose}> 
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: "400px",
            maxWidth: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom sx = {{fontFamily:  "Lato, sans-serif", color: "#276678" }}>
            Personaliza tu perfil...
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              className="textField"
              id="name"
              label="Nuevo nombre de usuario"
              variant="outlined"
              margin="dense"
              value={name}
              onChange={(event) => setName(event.target.value)}
              fullWidth
            />
            <TextField
              className="textField"
              id="email"
              label="Nuevo correo electrónico"
              variant="outlined"
              margin="dense"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
             <TextField
              className="textField"
              id="contraseña"
              label="Nueva contraseña"
              variant="outlined"
              margin="dense"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button onClick={handleClose} sx={{ mr: 2, color: '#125E75' }}>
                Cancelar
              </Button>
              <Button variant="contained" type="submit" className="buttonForm">
                Guardar cambios
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Grid>
  );
};

export default ButtonUserConfig;