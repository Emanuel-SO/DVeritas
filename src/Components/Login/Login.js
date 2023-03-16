import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";

//  El código importa varias bibliotecas de Material UI (un conjunto de herramientas de interfaz de usuario para React) y también importa el hook useState de React.

function Login() { //La función Login es el componente que contiene un formulario que se presenta al usuario. 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //En el componente Login, se definen dos estados utilizando el hook useState de React. El primer estado "email" se inicializa como una cadena vacía y se actualiza mediante setEmail. El segundo estado "password" también se inicializa como una cadena vacía y se actualiza mediante setPassword.

  const handleSubmit = (e) => {     //La constante handleSubmit define una función que maneja el envío del formulario.
    e.preventDefault();
    console.log({ email, password}); // Se muestra la información en la consola del navegador.
  };



  return (   
    
      <Box                            //En el retorno del componente Login, se utiliza el componente "Box" para agrupar los componentes del formulario.
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'monospace',
          width: '100%',
          maxWidth: '500px', 
          margin: '0 auto', 
        }}
        noValidate
        autoComplete="off"  
        
        //se utiliza el componente "Typography" para agregar un encabezado al formulario.
      >        
        <Typography variant="h5" mb={3} sx={{ fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' }, marginTop: '3rem', marginBottom: '4rem' }}>
          ¿Estas listo para ingresar al Anonimato?          
        </Typography>             
        <form onSubmit={handleSubmit}>  
        <TextField      //Se utiliza el componente "TextField" de Material UI para agregar dos campos de entrada de texto: uno para el correo electrónico y otro para la contraseña.
          required
          id="outlined-basic"
          label="Correo electronico"
          type="email"
          defaultValue=""
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{fontFamily: "Lato, sans-serif", mb: 3}}
          style={{ marginBottom: "16px", width: "500px" }}
        />                                                  
        <TextField                                      //Ambos campos son requeridos y se especifican mediante el atributo "required". Además, se utiliza el atributo "onChange" para actualizar los estados del correo electrónico y la contraseña.
          required
          id="outlined-basic"
          label="Contraseña"
          type='password'
          defaultValue=""
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          sx={{fontFamily: "Lato, sans-serif", mb: 3}}
          style={{ marginBottom: "16px", marginTop: "16px", width: "500px" }}
        />
        <Button                                       //  Se utiliza el componente "Button" de Material UI para agregar un botón de "Iniciar Sesión" que se utilizará para enviar el formulario. El estilo del botón se define mediante la propiedad "sx" de Material UI y se define una función para manejar la acción del botón mediante el atributo "onSubmit" en el formulario.
          variant="contained"
          id="botonlogin"
          sx={{ marginTop: '50px', width: '300px', height: '40px', fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
          Iniciar Sesión
        </Button>
        </form>
      </Box>
          
  );
}

export default Login;