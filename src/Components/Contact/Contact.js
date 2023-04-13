import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import { InputAdornment, Modal } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./Contact.css";
import { API_URL } from '../../configuracion';

//  El código importa varias bibliotecas de Material UI (un conjunto de herramientas de interfaz de usuario para React) y también importa el hook useState de React.

function Contact() { //La función Contact es el componente que contiene un formulario que se presenta al usuario. 
    const [open, setOpen] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errorMail, setErrorMail] = useState(false);
    const [asunto, setAsunto] = useState("");
    const [comentario, setComentario] = useState("");
    const [isFormValid, setIsFormValid] = useState(true); //Estado para validar que los campos del formulario son validos
    // const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const [modalMessage, setModalMessage] = useState(""); // Nuevo estado para el mensaje modal

    //En el componente Login, se definen dos estados utilizando el hook useState de React. El primer estado "email" se inicializa como una cadena vacía y se actualiza mediante setEmail. El segundo estado "password" también se inicializa como una cadena vacía y se actualiza mediante setPassword.

    //Efecto que queremos aplicar al estado de isFormValid que si cumple con las condiciones a su vez activa el boton para enviar formulario
    useEffect(() => {
        setIsFormValid(email !== '' && asunto !== '' && comentario !== '' && errorMail === false);
    }, [errorMail, email, asunto, comentario]);

    //Cambiamos el estado contrario al boton ya que cuando 
    const buttonDisabled = !isFormValid;


    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = `${API_URL}/dveritas/contactos/`;

        const postContacto = async (contacto) => {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contacto)
            });

            if (!response.ok) {
                throw new Error('Error al crear el contacto');
            }
        }

        const newContacto = {
            nombre: nombre,
            correo: email,
            asunto: asunto,
            comentario: comentario
        };

        postContacto(newContacto)
            .then(() => {
                setModalMessage('Contacto creado correctamente'); // Actualizamos el estado del mensaje modal
                setOpen(true); // Abrimos la ventana modal
                setTimeout(() => {
                    window.location.replace('');
                }, 1000);
            })
            .catch(error => console.error(error));
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="formulary-contactus">
            <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }} >
                <Grid item xs={10} sm={8} md={8} lg={4} >
                    <form onSubmit={handleSubmit} className="only-formulary">
                        <Box className="animated"                    //En el retorno del componente Login, se utiliza el componente "Box" para agrupar los componentes del formulario.

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
                                    marginBottom: '2rem',
                                    color: '#276678',
                                    fontFamily: 'Lato',
                                    fontSize: { xs: '2.5rem', sm: '3rem' },
                                    textAlign: 'center'
                                }}
                            >
                                ¡Contáctanos!
                            </Typography>
                            <Typography sx={{
                                marginBottom: '2rem',
                                fontFamily: 'Lato',
                                fontSize: { xs: '1rem', sm: '1rem' },
                                textAlign: 'center'
                            }} >

                                Comparte tus comentarios o sugerencias al equipo de JavaWizard, recuerda que toda la información será guardada de manera anónima
                            </Typography>
                            <TextField      //Se utiliza el componente "TextField" de Material UI para agregar dos campos de entrada de texto: uno para el correo electrónico y otro para la contraseña.
                                id="outlined-name"
                                label="Nombre"
                                placeholder="Ingresar tu nombre es opcional"
                                variant="outlined"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                sx={{ fontFamily: "Lato, sans-serif", mb: 5, width: "100%" }}
                            />
                            <TextField      //Se utiliza el componente "TextField" de Material UI para agregar dos campos de entrada de texto: uno para el correo electrónico y otro para la contraseña.
                                required
                                error={errorMail}
                                helperText={mensaje}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                id="outlined-email"
                                label="Correo electronico"
                                type="email"
                                variant="outlined"
                                value={email}
                                sx={{ fontFamily: "Lato, sans-serif", mb: 5, width: "100%" }}
                            />
                            <TextField                                     //Ambos campos son requeridos y se especifican mediante el atributo "required". Además, se utiliza el atributo "onChange" para actualizar los estados del correo electrónico y la contraseña.
                                required
                                id="outlined-asunto"
                                label="Asunto"
                                variant="outlined"
                                value={asunto}
                                onChange={(e) => setAsunto(e.target.value)}
                                sx={{ fontFamily: "Lato, sans-serif", mb: 4, width: "100%" }}
                            />
                            <TextField
                                required
                                rowsmax={3} rows={3}
                                id="outlined-comentarios"
                                label="Comentarios"
                                placeholder="Todo tus comentarios serán almacenados de forma anónima"
                                multiline
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                                sx={{ fontFamily: "Lato, sans-serif", bm: 4, width: "100%" }}
                                inputProps={{ maxLength: 700 }}

                            />
                            <InputAdornment position="end" id="numerito">
                                {comentario.length}/{700}
                            </InputAdornment>
                            <Button                                // Boton por enviar el formulario
                                variant="contained"
                                id="boton"
                                type="submit"
                                disabled={buttonDisabled}
                                sx={{
                                    marginTop: "3rem",
                                    width: "100%",
                                    height: "40px",
                                    fontFamily: "lato",
                                    color: "#D3E0EA",
                                    bgcolor: "#1687A7",
                                    "&:hover": { bgcolor: "#125E75" },
                                }}
                                onClick={handleSubmit}
                            >

                                Enviar
                            </Button>

                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>¡Muchas gracias por tus comentarios {nombre}!</DialogTitle>
                                <DialogContent>
                                    Apreciamos mucho tu interes en nuestra aplicacion
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </form>

                </Grid>
            </Grid>

        </div>
    );
}

export default Contact;
