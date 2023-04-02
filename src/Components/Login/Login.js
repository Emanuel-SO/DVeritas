import * as React from 'react';
import { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, TextField, Button, Modal } from "@mui/material";

//  El código importa varias bibliotecas de Material UI (un conjunto de herramientas de interfaz de usuario para React) y también importa el hook useState de React.

function Login() { //La función Login es el componente que contiene un formulario que se presenta al usuario. 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);// Estado para mostrar el modal de Credenciales incorrectas

  const guardarCredenciales = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  }

  guardarCredenciales(email, password);

  // aisganmos el useNavigate a la constante navigate
  const navigate = useNavigate();
  
  // Validar si ya iniciaste sesion, si ya estas loggeado serás redirigido a tu perfil
  if (localStorage.getItem('usuario')) {
    console.log('Ya estas logeado');
    setTimeout(() => {
      navigate('/perfil');
    }, 50);
  }

  //En el componente Login, se definen dos estados utilizando el hook useState de React. El primer estado "email" se inicializa como una cadena vacía y se actualiza mediante setEmail. El segundo estado "password" también se inicializa como una cadena vacía y se actualiza mediante setPassword.

  const handleSubmit = (e) => {     //La constante handleSubmit define una función que maneja el envío del formulario.
    e.preventDefault();     // Se utiliza para prevenir el comportamiento predeterminado de un evento
    const storedData = JSON.parse(localStorage.getItem('listausuarios'));
    let match = false;
    for (let i = 0; i < storedData.length; i++) {
      if (email === storedData[i].email && password === storedData[i].password) {
        match = true;
        break;
      }
    }

    if (match) {
      // Reedirigido a perfil en caso de que las credenciales se encuentren el local storage
      navigate("/perfil");
    } else {
      setCredentialsError(true);
      console.log('Login failed');
      // Show an error message to the user
    }
  };

  // Función para cerrar el modal de credenciales incorrectas
  const handleClose = () => {
    setCredentialsError(false);
  };

  return (
    <div className="my-componentLogin">
      <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={10} sm={8} md={4} >
          <form onSubmit={handleSubmit}>
            <Box className="animatedLogin"                    //En el retorno del componente Login, se utiliza el componente "Box" para agrupar los componentes del formulario.

              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "fit-content",
                bgcolor: "#F2F2F2",
                borderRadius: "20px",
                border: "4px solid #276678",
                padding: "32px",
                maxWidth: "100%",
                margin: "0 auto",

              }}
              noValidate
              autoComplete="off"

            //se utiliza el componente "Typography" para agregar un encabezado al formulario.
            >
              <Typography
                variant="h5"

                sx={{
                  marginTop: '1rem',
                  marginBottom: '4rem',
                  color: '#276678',
                  fontFamily: 'Lato',
                  fontSize: { xs: '2.5rem', sm: '3rem' },
                  textAlign: 'center'
                }}
              >
                ¿Estas listo para ingresar al Anonimato?
              </Typography>
              <TextField      //Se utiliza el componente "TextField" de Material UI para agregar dos campos de entrada de texto: uno para el correo electrónico y otro para la contraseña.
                required
                id="outlined-email"
                label="Correo electronico"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ fontFamily: "Lato, sans-serif", mb: 5, width: "100%" }}
              />
              <TextField                                     //Ambos campos son requeridos y se especifican mediante el atributo "required". Además, se utiliza el atributo "onChange" para actualizar los estados del correo electrónico y la contraseña.
                required
                id="outlined-password"
                label="Contraseña"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ fontFamily: "Lato, sans-serif", mb: 4, width: "100%" }}
              />
              <Button                               //  Se utiliza el componente "Button" de Material UI para agregar un botón de "Iniciar Sesión" que se utilizará para enviar el formulario. El estilo del botón se define mediante la propiedad "sx" de Material UI y se define una función para manejar la acción del botón mediante el atributo "onSubmit" en el formulario.
                variant="contained"
                id="botonlogin"
                type="submit"           //prop type="submit" al botón de "Iniciar Sesión", este botón se utilizará para enviar el formulario cuando se hace clic.
                sx={{ marginTop: '3rem', width: "100%", height: '40px', fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
                Iniciar Sesión
              </Button>
              <Modal open={credentialsError} onClose={handleClose}>
                <Box sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                  width: "400px",
                  maxWidth: "100%",
                }}>
                  <Typography variant="h6" sx={{ fontFamily: "Lato, sans-serif", color: "#276678", textAlign: 'center' }}>El correo o la contraseña son incorrectos</Typography>
                  <Typography variant="body1" sx={{ fontFamily: "Lato, sans-serif", textAlign: 'center' }}>
                    Por favor vuelve a intentarlo
                  </Typography>
                </Box>
              </Modal>
            </Box>
          </form>

        </Grid>
      </Grid>
    </div>
  );
}

export default Login;