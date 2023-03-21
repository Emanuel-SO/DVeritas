import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


function Contact() {
    return (

        <Box
            component="form" // elemento raiz formulario HTML
            sx={{  //Propiedad personalizada en el componente para agregar estilos personalizados utilizando "styled-system".
                display: 'flex',
                flexDirection: 'column', //orientacion de los elementos
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: 'monospace',
                width: '100%',
                maxWidth: '400px', 
                margin: '0 auto', 
            }}
            noValidate //Propiedad para que Este elemento no sea validado por el Navegador
            autoComplete="off" //Autocompletado desactivado
        >
            <div>
            <Typography //Bloque de texto con estilo Personalizado
            variant="h5" // tipo de fuente o estilo que se va a utilizar para el texto.
            mb={3} // margen inferior 3 unidades
            sx={{ fontFamily: "Lato, sans-serif", 
            color: "#276678", 
            fontSize: { xs: '2.5rem', 
            sm: '3rem' }, 
            marginTop: '3rem' }}>
            Contáctanos
          </Typography>
                <div style={{ marginBottom: "3rem",
                 fontSize: "1.5rem",
                  fontFamily: "Lato, sans-serif"}}>
                    Comparte tus comentarios o sugerencias al equipo de JavaWizards.
                </div>


                <div>
                    <TextField //Bloque de texto con estilo Personalizado
                        required //Indica que el campo de entrada es obligatorio y debe ser completado por el usuario.
                        id="outlined-basic" //Id para el campo de entrada
                        label="Nombre" 
                        defaultValue=""
                        variant="outlined" //Variante de estilo del campo de entrada.
                        style= //Agregar estilos personalizados al componente 
                        {{ 
                            marginBottom: "16px",
                            width: "500px"
                         }}
                    />

                    <TextField //Bloque de texto con estilo Personalizado
                        required
                        id="outlined-basic"
                        label="E-mail"
                        defaultValue=""
                        variant="outlined"
                        style=
                        {{
                             marginBottom: "16px", 
                             marginTop: "16px", 
                             width: "500px"
                         }}
                    />

                    <TextField //Bloque de texto con estilo Personalizado
                        required
                        id="outlined-basic"
                        label="Asunto"
                        defaultValue=""
                        variant="outlined"
                        style={{ marginBottom: "16px", 
                        marginTop: "16px", 
                        width: "500px" }}
                    />
                </div>
                <div>
                    <TextField //Bloque de texto con estilo Personalizado
                    id="filled-basic" 
                    label="Comentarios" 
                    variant="filled" //Propiedad usada el componentes Material UI para un estilo de fondo "relleno" en un componente de formulario,
                    style={{ 
                        marginBottom: "16px",
                     marginTop: "16px",
                      width: "500px"
                      }}  />
                </div>

                <Stack //Componente MUI que se utiliza para apilar elementos vertical u horizontalmente.
                spacing={1}  //Espacio entre los elementos apilados. 
                direction="row" //Dirección en la que se apilan los elementos en ese caso fila.
                sx={{  //Estilos personalizados al componente
                    justifyContent: 'center' 
                    }}>

                    
                </Stack>
                
            </div>
        </Box>

    );
}

export default Contact;