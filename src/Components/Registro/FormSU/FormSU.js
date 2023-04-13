import * as React from 'react';
import { useState, useEffect } from "react";
import { Grid, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Modal, useIsFocusVisible } from "@mui/material";
import './FormSU.css';
import terminos from './images/Terminos_condiciones_dveritas.pdf';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../../configuracion";

/* Componente formulario de registro donde el usuario ingresa un nombre de usuario, un correo electronico y 
una contraseña para crear un perfil para la red social */


const FormSU = () => {
  //Definimos los estados iniciales
  const [email, setEmail] = useState(""); // Estado inicial '' y la funcion setEmail modificara estos valores
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false); //Estado inicial false, el checkbox no esta confirmado 
  const [isFormValid, setIsFormValid] = useState(false); //Estado para validar que los campos del formulario son validos
  const [passwordError, setPasswordError] = useState(false);// Estado para mostrar el modal de contraseña incorrecta
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();// declaramos navigate


  // Hook que revisa el usuarip en el local storage
  const [usuarioActual, setUsuarioActual] = React.useState(null);
  // verificar si hay usuario en el local storage
  useEffect(() => {
  setUsuarioActual (sessionStorage.getItem("id"));
  }, [usuarioActual]);

  if (usuarioActual) {
    console.log('Ya estas logeado');
    setTimeout(() => {
      navigate('/perfil');
    }, 50);
  }

  //Efecto que queremos aplicar al estado de isFormValid que si cumple con las condiciones a su vez activa el boton para enviar formulario
  useEffect(() => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setIsFormValid(email !== '' && username !== '' && password !== '' && isChecked && emailRegex.test(email));
  }, [email, username, password, isChecked]);


  // Manejador de eventos que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = async (e) => {

    const usuario = { 
    nombre: username,
    correo: email,
    password: password,
    avatar: "https://cdn-icons-png.flaticon.com/512/1534/1534082.png"
   };

    e.preventDefault(); // Previene la acción por defecto del formulario al ser enviado
    if (password.length >= 8) {
      //console.log({ email, username, password, isChecked });

      try {
        const response = await fetch(`${API_URL}/dveritas/usuarios/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario)
        });
        const data = await response.json();
        const isOk = response.ok;
        if (isOk) {
          console.log(data.mensaje);
          
          fetch(`${API_URL}/dveritas/login/${usuario.correo}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            // Guardar el valor del ID en sessionStorage
            const id = "id"; // Definir la variable id con el valor deseado
            sessionStorage.setItem(id, JSON.stringify(data));
            setTimeout(() => {
              navigate('/perfil');
              window.location.reload();
            }, 50);
          })

          
          
        } else {
          // Aquí abres el modal y muestras el mensaje de error
          //console.error("No pudimos guardar el usuario. Código de error: ", response.status);
          setErrorMessage(data.mensaje);
          console.log(data.mensaje); // Asignamos el mensaje de err
          setShowModal(true);
        }
      } catch (error) {
        console.error("No pudimos guardar el usuario", error);
        
      }  
    } else {
      setPasswordError(true);
    }

  }; 
  

// Función para cerrar el modal de contraseña incorrecta
  const handleClose = () => {
  setPasswordError(false);
  };

  const handleCloseVal = () => {
    setShowModal(false);
    };

  
  // Es la estructura de la parte visual del formulario
  return (
    <div className="my-component">
    <Grid container className="containerForm" > {/* Grid principal que contiene toda los campos y el boton */}
      <Grid item className="gridForm" xs={10} md={6} lg={5}> {/* Grid iten que a su vez define las columnas a usar del componente segun  el tamaño de la pantalla */}
        {/* Inicia el formulario */}
        <form onSubmit={handleSubmit} className="only-formulary" > {/* Cuando tenemos un  */}
          {/* Contenedor del formulario */}
          <Box  className="animated "   sx={{ display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                bgcolor: "#F2F2F2",
                borderRadius: "20px",
                border: "4px solid #276678",
                padding: "32px",
                maxWidth: "100%",
                margin: "0 auto",}}  noValidate
              autoComplete="off">
            {/* Campos del formulario */}
            <Typography className="tittleForm" variant="h5"> {/*Titulo h3 */}
              ¡Únete  y libera tus pensamientos sin temor a ser juzgado! 
            </Typography>
            <TextField  //cada uno de estos textfield representan un campo donde el usuario pone la informacion
              id="correo"
              className="textField"
              label="Correo electrónico"
              variant="outlined"
              type="email"
              value={email}
              helperText="No te preocupes esto sera anonimo"
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
              label="Contraseña (minimo 8 caracteres)"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Checkbox para aceptar los términos y condiciones */}
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={() => setIsChecked(!isChecked)} />} //cuando el usuario marque la casilla esta fuincion enviara la actualizacion de que se ha marcado la casilla
              label={
                <Typography  component = 'a' href={terminos} target="_blank">
                  Acepto los términos y condiciones
                </Typography>
              }
              sx={{ fontFamily: "Lato, sans-serif", mb: 3 }}
            />
            {/* Botón para enviar el formulario */}
            <Button variant="contained" type="submit" disabled={!isFormValid} sx={{ marginTop: '3rem', width: "100%", height: '40px', fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }} >
              Registrarme
            </Button>
            <Modal open={passwordError} onClose={handleClose}> 
            <Box sx={{ position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              width: "400px",
              maxWidth: "100%", }}>
              <Typography variant="h6" sx = {{fontFamily:  "Lato, sans-serif", color: "#276678",  textAlign: 'center'}}>Contraseña invalida</Typography>
              <Typography variant="body1" sx = {{fontFamily:  "Lato, sans-serif",  textAlign: 'center' }}>
                Asegúrese de que la contraseña tenga una longitud mínima de 8 caracteres.
              </Typography>
            </Box>
            </Modal>

            <Modal open={showModal} onClose={handleCloseVal}>
              <Box sx={{ position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                width: "400px",
                maxWidth: "100%", }}>
                <Typography variant="h6" sx = {{fontFamily:  "Lato, sans-serif", color: "#276678",  textAlign: 'center'}}>{errorMessage}</Typography>
              </Box>
            </Modal>
          </Box>
        </form>
      </Grid>
      </Grid>
      </div>

  );
};

export default FormSU; 


