import * as React from 'react';
import { useState } from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, TextField, Button, Modal } from "@mui/material";
import { API_URL } from '../../configuracion';

//  El código importa varias bibliotecas de Material UI (un conjunto de herramientas de interfaz de usuario para React) y también importa el hook useState de React.

function Login() { //La función Login es el componente que contiene un formulario que se presenta al usuario. 
  const [email, setEmail] = useState(""); //El primer estado "email" se inicializa como una cadena vacía y se actualiza mediante setEmail.
  const [password, setPassword] = useState(""); //El segundo estado "password" también se inicializa como una cadena vacía y se actualiza mediante setPassword.
  const [credentialsError, setCredentialsError] = useState(false); //Estado para mostrar el modal de Credenciales incorrectas
  const navigate = useNavigate(); //Hook para la navegación de la página.



  const handleSubmit = (e) => { //La constante handleSubmit define una función que maneja el envío del formulario.
    e.preventDefault(); //Prevenir el comportamiento predeterminado de un evento.

    fetch(`${API_URL}/dveritas/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: email,
        password: password
      })
    })
      .then(response => response.json()) // Parsear el cuerpo de la respuesta como JSON
      .then(data => {
        // data contendrá los datos reales de la respuesta
        if (data === true) { // Verificar si la respuesta es true 
          console.log('Login successful');
          fetch(`${API_URL}/dveritas/login/${email}`)
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
          setCredentialsError(true);
          console.log('Login failed');
        }
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }

  // Validar si ya iniciaste sesion, si ya estas loggeado serás redirigido a tu perfil
  if (sessionStorage.getItem('id')) {
    console.log('Ya estas logeado');
    setTimeout(() => {
      navigate('/perfil');
    }, 50);
  }

  // const storedData = JSON.parse(localStorage.getItem('listausuarios')); //Recuperar datos de usuarios del local storage
  // const usuarioActual = [];
  // let match = false;
  // for (let i = 0; i < storedData.length; i++) { //Iterar a través de los datos almacenados para verificar las credenciales ingresadas.
  //   if (email === storedData[i].email && password === storedData[i].password) {
  //     match = true;
  //     // Almacenar en usuario actual y luego en el local storage 
  //     usuarioActual.push(storedData[i]);
  //     localStorage.setItem('usuario', JSON.stringify(usuarioActual));
  //     break;
  //   }
  // }

  //   if (match) { //En caso de que se encuentren las credenciales en la base de datos, se redirige al usuario a la página de perfil.
  //     navigate("/perfil");
  //     window.location.replace('');
  //   } else { //En caso contrario, se muestra un mensaje de error al usuario.
  //     setCredentialsError(true); // Se ejecuta el modal credentialsError        
  //   }
  // };

  // Función para cerrar el modal de credenciales incorrectas
  const handleClose = () => {
    setCredentialsError(false);
  };

  return (
    // Retorna el componente "div" con la clase "my-componentLogin".
    <div className="my-componentLogin">
      {/* Utiliza el componente "Grid" de Material UI para crear una cuadrícula que se ajusta a la altura de la ventana, con elementos centrados horizontal y verticalmente */}
      <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
        {/* Utiliza el componente "Grid" de Material UI para definir el tamaño del formulario en diferentes tamaños de pantalla */}
        <Grid item xs={10} sm={8} md={4} >
          {/* Utiliza el componente "form" de HTML y la función "handleSubmit" que se pasará como prop a "onSubmit" */}
          <form onSubmit={handleSubmit}>
            {/* Utiliza el componente "Box" de Material UI para agrupar los componentes del formulario. */}
            <Box className="animatedLogin"
              // Define las propiedades de estilo del formulario utilizando la propiedad "sx" de Material UI
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
              noValidate // Deshabilita la validación del formulario por defecto de HTML
              autoComplete="off" // Deshabilita el autocompletado por defecto de HTML
            >
              {/* Utiliza el componente "Typography" de Material UI para agregar un encabezado al formulario. */}
              <Typography
                variant="h5"
                // Define las propiedades de estilo del encabezado utilizando la propiedad "sx" de Material UI
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
              {/* Utiliza el componente "TextField" de Material UI para agregar dos campos de entrada de texto: uno para el correo electrónico y otro para la contraseña. */}
              <TextField
                required // Marca el campo de entrada como requerido
                id="outlined-email"
                label="Correo electronico"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de correo electrónico cuando el usuario escribe en el campo
                sx={{ fontFamily: "Lato, sans-serif", mb: 5, width: "100%" }}
              />
              <TextField
                required // Marca el campo de entrada como requerido
                id="outlined-password"
                label="Contraseña"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de contraseña cuando el usuario escribe en el campo
                sx={{ fontFamily: "Lato, sans-serif", mb: 4, width: "100%" }}
              />
              {/* Utiliza el componente "Button" de Material UI para agregar un botón de "Iniciar Sesión" que se utilizará para enviar el formulario. */}
              <Button
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