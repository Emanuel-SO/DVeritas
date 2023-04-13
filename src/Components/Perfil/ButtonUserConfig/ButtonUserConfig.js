import { useState, useEffect} from "react";
import React from "react";
import {Box, Button, Modal, Typography, TextField, Grid, } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import './ButtonUserConfig.css';
import { API_URL } from "../../../configuracion";

/* Componenete de react del boton de configuracion de usuario, al presionarlo despliega un modal que incluye el campo paraingresar el nuevo nombre de usuario, nuevo correo elctronico y contraseña */

/* Declaramos los estados para los hooks */
const ButtonUserConfig = () => {
  
  const [open, setOpen] = useState(false); // Abrir modal 
  const [name, setName] = useState("");  //definir nombre
  const [email, setEmail] = useState(""); //definir email
  const [password, setPassword] = useState(""); // definir password
  const [selectedFile, setSelectedFile] = useState(null); //definimos si hemos seleccionado un archivo
  const [selectedFileName, setSelectedFileName] = useState(''); //definimos el nombre del usuario para mostrar
  const [isNameValid, setIsNameValid] = useState(false); //definimimos el nombre valido
  const [isPasswordValid, setIsPasswordValid] = useState(false); //definimos la contraseña es valida
  const [isEmailValid, setIsEmailValid] = useState(false); //definimos el email es valido
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
 

  


  const handleOpen = () => {   /* Al llamar la funcion el estado de open cambiara a true, abrimos el modal */
    setOpen(true);
  };

  const handleClose = () => {  /* Al llamar la funcion el estado de open cambiara a falso, cerramos el modal */
    setOpen(false);
  };

  const handleSaveName = async () => { /* Manda a consola la informacion guardada en name */
    
    const usuarioName = {
      nombre: name
    };

    const id = sessionStorage.getItem("id");

    try {
      const response = await fetch(`${API_URL}/dveritas/usuarios/${id}?nombre=${usuarioName.nombre}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuarioName)
      });
      const data = await response.text();
      const isOk = response.ok;
      if (isOk) {
        console.log("Cambios realizados correctamente");
        setErrorMessage("Cambios realizados correctamente");
        setShowModal(true);
        setName("");
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
        
      } else {
        setErrorMessage("Error intente de nuevo");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error intente de nuevo", error);
      setErrorMessage("Error intente de nuevo");
      setShowModal(true);
    }  
  };

  const handleSaveEmail = async () => { /* Manda a consola la informacion guardada en email */
    
  const usuarioEmail = {
    correo: email
  };

  const id = sessionStorage.getItem("id");

  try {
    const response = await fetch(`${API_URL}/dveritas/usuarios/${id}?correo=${usuarioEmail.correo}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioEmail)
    });
    const data = await response.text();
    const isOk = response.ok;
    if (isOk) {
      console.log("Cambios realizados correctamente");
      setErrorMessage("Cambios realizados correctamente");
      setShowModal(true);
      setName("");
      setTimeout(() => {
        window.location.reload();
      }, 2000); 
      
    } else {
      setErrorMessage("Error intente de nuevo");
      setShowModal(true);
    }
  } catch (error) {
    console.error("Error intente de nuevo", error);
    setErrorMessage("Error intente de nuevo");
    setShowModal(true);
  }  
  };

  const handleSavePassword = async () => { /* Manda a consola la informacion guardada en password */
   
  const usuarioPassword = {
    password: password
  };

  const id = sessionStorage.getItem("id");

  try {
    const response = await fetch(`${API_URL}/dveritas/usuarios/${id}?password=${usuarioPassword.password}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuarioPassword)
    });
    const data = await response.text();
    const isOk = response.ok;
    if (isOk) {
      console.log("Cambios realizados correctamente");
      setErrorMessage("Cambios realizados correctamente");
      setShowModal(true);
      setName("");
      setTimeout(() => {
        window.location.reload();
      }, 2000); // 5000 milisegundos (5 segundos)
      
    } else {
      setErrorMessage("Error intente de nuevo");
      setShowModal(true);
    }
  } catch (error) {
    console.error("Error intente de nuevo", error);
    setErrorMessage("Error intente de nuevo");
    setShowModal(true);
  }  
  };

  



  const handleFileChange = (event) => { /* La función toma como parámetro un evento, que es el evento de cambio que se produce cuando se selecciona un archivo en el input */
    const file = event.target.files[0]; //Selecciona el archivo, el [0] indica que solo se puede seleccionar un archivo
    setSelectedFile(file); //actualiza el estado de selected file con el archivo file
    setSelectedFileName(file.name);  //toma el nombre del archivo file y lo actualiza
  };

  const handleUploadClick = () => { /* Manda a consola la informacion actualizada de selectedFile*/
    console.log(selectedFile);
  };

  useEffect(() => { /* Funcion que actualiza el estado de nameIsValid si name cambia */
    setIsNameValid(name !== '') //comprueba que name sea distinto de '' en ese caso actualiza el estado de nameIsValid segun el resultado 
  }, [name])


  useEffect(() => { /* Funcion que actualiza el estado de isPasswordValid si password cambia */
    setIsPasswordValid(password.length >=8) //comprueba que password sea mayor que 8 caracteres en ese caso actualiza el estado de nameIsValid segun el resultado 
  },[password])

  useEffect(() => { /* Funcion que actualiza el estado de isEmailValid si email cambia */
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; //expresion regualar, debe de tener texto@texto.2 o 3 caracteres
    setIsEmailValid(emailRegex.test(email)); //si se cumple lo anterior actualiza el estado de isEmailValid
  }, [email]);

  const handleCloseVal = () => {
    setShowModal(false);
    };


  return (
    /* Inicia la parte visual del componenete */
    /* Iniciamos con un grid container que almacenara un boton el cual al presionarlo ddesplegara el modal con el formulario para actualizar los campor del perfil */
    <Grid container  spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}} > {/* Contenedor principal del boton */}
      <Button variant="outlined" onClick={handleOpen} endIcon={<EditRoundedIcon />} sx={{ fontFamily:  "Lato, sans-serif", color: "#276678" }}> {/* Boton que al hacerle click llama la funcio handleOpen que abre el modal*/}
        Editar perfil
      </Button >
      {/* Inicia el modal, declaramos el estado de open y el hook para cerrarlo*/}
      <Modal open={open} onClose={handleClose}> 
        <Box
          sx={{ /* Elementos que determinan la posicion y tamaño del modal que se va desplegar */
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
          {/* Titulo del modal*/}
          <Typography variant="h5" gutterBottom sx = {{fontFamily:  "Lato, sans-serif", color: "#276678" }}> 
            Personaliza tu perfil...
          </Typography>
          {/* Formulario con los campos a llenar: nuevo nombre de usuario, nuevo correo, nueva contraseña y la foto de perfil */}
          <form >
            <TextField
              className="textField"
              id="name"
              type="text"
              label="Nuevo nombre de usuario"
              variant="outlined"
              margin="dense"
              value={name} //guardaremos el valor en la variable name
              onChange={(event) => setName(event.target.value)} //en caso de cambio disparara el evento que le asigana name el valor del campo a traves del hook setName
              fullWidth
              InputProps={{
                endAdornment: ( /* boton que va al final del textField, este bptpn añ hacer clicl llama a hadleSaveName y esta desactivado segun el valor de isNameValid, lo ultimo son los estilos del boton */
                  <Button variant="contained" onClick={handleSaveName}  disabled={!isNameValid} sx={{fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
                    Enviar
                  </Button>
                ),
              }}
            />
            <TextField
              className="textField"
              id="email"
              type="email"
              label="Nuevo correo electrónico"
              variant="outlined"
              margin="dense"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              InputProps={{
                endAdornment: (
                  <Button variant="contained" onClick={handleSaveEmail} disabled={!isEmailValid} sx={{fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
                    Enviar
                  </Button>
                ),
              }}
            />
             <TextField
              className="textField"
              id="contraseña"
              type="password"
              label="Nueva contraseña"
              variant="outlined"
              margin="dense"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                endAdornment: (
                  <Button variant="contained" onClick={handleSavePassword} disabled={!isPasswordValid} sx={{fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
                    Enviar
                  </Button>
                ),
              }}
            />
            {/* Definimos el imput para que el usuario pueda subir la imagen de perfil */}
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="upload-photo"
              type="file"
              onChange={handleFileChange} //en caso de cambio llama la funcion handleFileChange
            />
            {/* Boton para acceder al input */}
            <label htmlFor="upload-photo">
              <Button variant="text" color="primary" component="span" sx={{color: '#125E75' }} >
                Selecciona una nueva imagen
               </Button>
            </label>
            {/* Boton para poder enviar los elementos que cargo el usuario, en caso de click llama a handleUploadClick y esta desactivado a menos que el usuario cargue un archivo*/}
            <Button variant="contained" onClick={handleUploadClick} sx={{ fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' },  marginLeft: '30px'}} disabled={!selectedFile}>
                Enviar
            </Button>
            {selectedFileName && (
              <Typography
                variant="subtitle1"
                style={{ color: 'gray', fontSize: '0.7rem' }}
              >
              {selectedFileName}
              </Typography>
            )}
            {/* Boton que cierra el modal en caso de que el usuario no quiera cambiar nada */}
            <Box sx={{ display: "flex", mt: 3, justifyContent: 'space-between' }}>
              <Button variant="contained" onClick={handleClose} sx={{ fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }}}>
                Borrar Usuario
              </Button>
              <Button onClick={handleClose} sx={{ mr: 2, color: '#125E75'}}>
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>{/* Fin del modal */}
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
    </Grid>
  );
};

export default ButtonUserConfig;