import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Height } from '@mui/icons-material';

function Contact() {
    return (

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
                maxWidth: '400px', // Set a maximum width for the form container
                margin: '0 auto', // Center the container horizontally
            }}
            noValidate
            autoComplete="off"
        >
            <div>

                <Typography variant="h4" gutterBottom style={{ fontFamily: "monospace", marginTop: "50px" }}>
                    Contactanos
                </Typography>
                <div style={{ marginBottom: "20px" }}>
                    Comparte tus comentarios o sugerencias al equipo de JavaWizards.
                </div>

                <div>
                    <TextField
                        required
                        id="outlined-basic"
                        label="Nombre"
                        defaultValue=""
                        variant="outlined"
                        style={{ marginBottom: "16px", width: "500px" }}
                    />

                    <TextField
                        required
                        id="outlined-basic"
                        label="E-mail"
                        defaultValue=""
                        variant="outlined"
                        style={{ marginBottom: "16px", marginTop: "16px", width: "500px" }}
                    />

                    <TextField
                        required
                        id="outlined-basic"
                        label="Asunto"
                        defaultValue=""
                        variant="outlined"
                        style={{ marginBottom: "16px", marginTop: "16px", width: "500px" }}
                    />
                </div>
                <div>
                    <TextField id="filled-basic" label="Comentarios" variant="filled" style={{ marginBottom: "16px", marginTop: "16px", width: "500px"}}  />
                </div>

                <Stack spacing={1} direction="row" sx={{ justifyContent: 'center' }}>

                    <Button variant="contained" sx={{ margin: '16px', width: '300px', height: '40px', fontFamily: 'monospace' }}>
                        Enviar
                    </Button>

                </Stack>

            </div>
        </Box>

    );
}

export default Contact;