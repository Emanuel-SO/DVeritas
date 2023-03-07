import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="E-mail" variant="outlined" />
        <TextField id="filled-basic" label="E-mail" variant="filled" />
        <TextField id="standard-basic" label="E-mail" variant="standard" />
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
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <TextField id="filled-basic" label="Contraseña" variant="filled" />
        <TextField id="standard-basic" label="Contraseña" variant="standard" />
      </Box>
      
      <Stack spacing={2} direction="row">
        
        <Button variant="text">Iniciar Sesion</Button>
        <Button variant="contained">Iniciar Sesion</Button>
        <Button variant="outlined">Iniciar Sesion</Button>
      </Stack>
    </div>
  );
}

export default Login;