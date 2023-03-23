import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { Input } from '@mui/material';

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
        <Typography variant="h5" mb={3} sx={{ fontFamily: "Lato, sans-serif", color: "#276678", fontSize: { xs: '2.5rem', sm: '3rem' }, marginTop: '3rem', marginBottom: '4rem' }}>
          ¿Estas listo para ingresar al Anonimato?
        </Typography>
 

        <TextField
          required
          id="outlined-basic"
          label="E-mail"
          defaultValue=""
          variant="outlined"
          style={{ marginBottom: "16px", width: "500px" }}
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          type='password'
          defaultValue=""
          variant="outlined"
          style={{ marginBottom: "16px", marginTop: "16px", width: "500px" }}
        />
        <Button
          variant="contained"
          id="botonlogin"
          sx={{ marginTop: '50px', width: '300px', height: '40px', fontFamily: 'lato', color: '#D3E0EA', bgcolor: '#1687A7', '&:hover': { bgcolor: '#125E75' }, }}>
          Iniciar Sesión
        </Button>

      </Box>




    </div>
  );
}

export default Login;