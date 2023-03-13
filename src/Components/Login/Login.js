import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Login() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontFamily: 'monospace',
          width: '100%',
          maxWidth: '500px', // Set a maximum width for the form container
          margin: '0 auto', // Center the container horizontally
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" gutterBottom style={{ fontFamily: "monospace", marginTop: "50px" }}>
          ¿Estas listo para ingresar al Anonimato?
        </Typography>
        <TextField id="standard-basic" label="E-mail" variant="standard" style={{ marginBottom: "25px", marginTop: "50px", width: '400px', height: '50px'}} />
      </Box>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Contraseña" variant="standard" style={{ marginBottom: "50px", marginTop: "50px", width: '400px', height: '50px'}} />
      </Box>

      <Stack spacing={1} direction="row" sx={{ justifyContent: 'center' }}>

        <Button variant="contained" sx={{ marginTop: '50px', width: '300px', height: '40px', fontFamily: "monospace" }}>
          Iniciar Sesión
        </Button>

      </Stack>
    </div>
  );
}

export default Login;