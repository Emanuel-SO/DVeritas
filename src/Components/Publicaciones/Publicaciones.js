import * as React from 'react';
import { useState, useEffect } from 'react';
import Formulario from "./FormularioPublicar/FormularioPublicar"
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { API_URL } from '../../configuracion';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import Chip from "@mui/material/Chip";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from "@mui/material/Button";
import { TextField, Stack, Divider } from "@mui/material";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";




const style = {

    bgcolor: "background.paper",
    border: "2px solid #276678",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,


};




const Publicaciones = () => {

    const [usuarioActual, setUsuarioActual] = React.useState(null);
    const [value, setValue] = useState('1');
    const [publicaciones, setPublicaciones] = useState([]);
    const [publicacionesMasLikes, setPublicacionesMasLikes] = useState([]);
    const [publicacionesMasComentarios, setPublicacionesMasComentarios] = useState([]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    }


    useEffect(() => {
        setUsuarioActual(sessionStorage.getItem("id"));
    }, [usuarioActual]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/dveritas/publicaciones/`);
                const jsonData = await response.json();
                setPublicaciones(jsonData);
            } catch (error) {
                console.error('Error al obtener los datos de la API:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/dveritas/publicaciones/likes`);
                const jsonData = await response.json();
                setPublicacionesMasLikes(jsonData);
            } catch (error) {
                console.error('Error al obtener los datos de la API:', error);
            }
        };

        fetchData();
    }, []);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/dveritas/publicaciones/comentarios`);
                const jsonData = await response.json();
                setPublicacionesMasComentarios(jsonData);
            } catch (error) {
                console.error('Error al obtener los datos de la API:', error);
            }
        };

        fetchData();
    }, []);


    const todasPublicaciones = publicaciones.map((item) => <CardsPublicaciones key={item.id} {...item} />);
    const publicacionesComents = publicacionesMasComentarios.map((item) => <CardsPublicaciones {...item} key={item.id} />);
    const publicacionesLikes = publicacionesMasLikes.map((item) => <CardsPublicaciones {...item} key={item.id} />);





    return (

        <div>
            <Box sx={{ width: '100%', my: "10px" }}>

                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList aria-label='Tabs-example' onChange={handleChange} centered>
                            <Tab label='Todas' value='1' />
                            <Tab label='+ Likes' value='2' />
                            <Tab label='+ Comentarios' value='3' />
                        </TabList>

                    </Box>
                    {usuarioActual
                        ? <Formulario />
                        : null
                    }

                    <TabPanel value='1' >
                        {todasPublicaciones}
                    </TabPanel>
                    <TabPanel value='2'>
                        {publicacionesLikes}
                    </TabPanel>
                    <TabPanel value='3'>
                        {publicacionesComents}
                    </TabPanel>
                </TabContext>
            </Box>


        </div>
    )
}

export default Publicaciones;







const CardsPublicaciones = (props) => {

    const urlImagen = `${API_URL}/dveritas/publicaciones/imagenes/${props.imagen}`;



    const [usuarioActual, setUsuarioActual] = React.useState(null);
    const [existLiked, setExistLiked] = useState(false);

    const avatar = `${API_URL}/dveritas/usuarios/imagenes/${props.usuario.avatar}`;


    useEffect(() => {
        setUsuarioActual(sessionStorage.getItem("id"));
    }, []);


    useEffect(() => {
        if (usuarioActual !== null && props.id !== null) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`${API_URL}/dveritas/likes/${usuarioActual}/${props.id}/like`);
                    const jsonData = await response.json();
                    setExistLiked(jsonData);
                } catch (error) {
                    console.error('Error al obtener los datos de la API:', error);
                }
            };

            fetchData();
        }
    }, [usuarioActual, props.id]);



    const handleLike = () => {
        if (usuarioActual != null) {

            if (existLiked !== true) {


                fetch(`${API_URL}/dveritas/likes/${usuarioActual}/${props.id}/post`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                       
                      usuario:{
                        id: usuarioActual
                      },
                      publicacion:{
                        id: props.id
                      }
                    }),
                  })
                    .then(() => {
                        setExistLiked(true)
                        setTotalLikes(totalLikes + 1)
                    })
                    .catch((error) => {
                    });
           
        } else {

            fetch(`${API_URL}/dveritas/likes/${usuarioActual}/${props.id}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(() => {
                    setExistLiked(false)
                    setTotalLikes(totalLikes - 1)
                })
                .catch(error => {
                    console.error('Error: ', error);
                });
        }
    }
}


const handleDelete = () => {
    fetch(`${API_URL}/dveritas/publicaciones/${props.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.error('Error: ', error);
        });
};

const fechaPublicacion = new Date(props.fecha_publicacion);
const fecha = fechaPublicacion.getDate() + "/" + (fechaPublicacion.getMonth() + 1) + "/" + fechaPublicacion.getFullYear();
const horaPublicacion = fechaPublicacion.getHours() + ":" + fechaPublicacion.getMinutes();
const datePublicacion = horaPublicacion + " " + fecha;


const [totalLikes, setTotalLikes] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/dveritas/likes/publicaciones/${props.id}/cantidad`);
            const jsonData = await response.json();
            setTotalLikes(jsonData);
        } catch (error) {
            //  console.error('Error al obtener los datos de la API:', error);
        }
    };
    fetchData();
});



const [totalComments, setTotalComments] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/dveritas/comentarios/publicaciones/${props.id}/cantidad`);
            const jsonData = await response.json();
            setTotalComments(jsonData);
        } catch (error) {
        }
    };
    fetchData();
});


//Revisar funcionamiento
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



const [comentariosEnPublicacion, setComentariosEnPublicacion] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/dveritas/publicaciones/comentarios/${props.id}`);
            const jsonData = await response.json();
            setComentariosEnPublicacion(jsonData);
        } catch (error) {
            console.error('Error al obtener los datos de la API:', error);
        }
    };
    fetchData();
});


const comentariosPublicacion = comentariosEnPublicacion.map((item) => <CardsComentarios key={item.id} {...item} />);


return (

    <div>

        <div>

            <Card
                sx={{
                    maxWidth: { xs: "300px", sm: "80%", md: "60%" },
                    margin: "auto",
                    borderRadius: "15px",
                    my: "20px",
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar

                            aria-label="recipe"
                            src={avatar}
                        />
                    }
                    action={
                        (usuarioActual == props.usuario.id) ?
                            <IconButton aria-label="settings"
                                onClick={handleDelete}>
                                <HighlightOffIcon />
                                {/* icono opciones  */}
                            </IconButton>
                            : null
                    }
                    title={props.usuario.nombre}
                    subheader={datePublicacion}
                />
                <Divider />

                {props.imagen !== null ? (
                    <CardMedia
                        component="img"
                        image={urlImagen}
                        alt={props.imagen}
                    />
                ) : null}

                {/* Componente de linea que divide componentes */}
                <Divider />

                {/* Contenido del la card de publicacion */}
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.descripcion}
                    </Typography>
                </CardContent>

                {/* Componente de linea que divide componentes */}
                <Divider />

                {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>  ---------------> se deja por si no hay likes*/}
                    <Button aria-label="add to favorites" onClick={handleLike}>
                        {existLiked !== false ? <FavoriteIcon /> : <FavoriteBorderIcon />} {totalLikes}
                    </Button>


                    {/* <IconButton aria-label="add comment" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>
          </IconButton>  ---------------> se deja por si no hay comentarios*/}
                    <Button
                        aria-label="add to favorites"
                        onClick={handleOpen}
                        startIcon={<ChatIcon />}
                        sx={{ marginLeft: "auto" }}
                    >
                        {totalComments}

                    </Button>
                </CardActions>


            </Card>

            {usuarioActual || totalComments !== 0
                ?

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: { xs: "100%", sm: "90%", md: "60%" },
                            maxWidth: "100%",
                            position: "relative",
                            maxHeight: "80%",
                            bgcolor: "transparent",
                        }}
                    >
                        <List
                            id="outlined-comentarios"
                            sx={{
                                width: "100%",
                                padding: 0,
                                overflow: "auto",
                            }}
                        >
                            {comentariosPublicacion}
                        </List>
                        {usuarioActual
                            ? <Box
                                sx={{
                                    width: "100%",
                                    position: "relative",
                                    maxHeight: 300,
                                    bgcolor: "transparent",
                                }}
                            >
                                <FormularioComentarios id={props.id} />
                            </Box> : null}
                    </Box>
                </Modal>
                : null}
        </div>

    </div>
)
}



const CardsComentarios = (props) => {
    const [usuarioActual, setUsuarioActual] = React.useState(null);

    useEffect(() => {
        setUsuarioActual(sessionStorage.getItem("id"));
    }, [usuarioActual]);


    return (
        <li >
            <ul >
                <Box sx={style}>

                    <ListSubheader sx={{ translate: "0px -5px", scrollBehavior: "smooth" }}>
                        <Divider textAlign="left"><Chip label={props.usuario.nombre} sx={{ color: "#276678", borderColor: "#276678" }} variant="outlined" /></Divider>

                    </ListSubheader>
                    <ListItem key={props.id}>
                        <ListItemText
                            primary={props.descripcion}
                        />
                    </ListItem>

                </Box>
            </ul>
        </li>
    )
}



const FormularioComentarios = ({ id }) => {
    const [usuarioActual, setUsuarioActual] = React.useState(null);

    useEffect(() => {
        setUsuarioActual(parseInt(sessionStorage.getItem("id")));
    }, []);

    const [comentario, setComentario] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${API_URL}/dveritas/comentarios/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "descripcion": comentario,
                "usuario": {
                    "id": usuarioActual
                },
                "publicacion": {
                    "id": id
                }
            }


            ),
        })
            .then((response) => {
                if (response.ok) {
                    setComentario("");
                } else {
                }
            })
            .catch((error) => {
            });
    };



    return (

        <Box sx={style} >
            <div sx={{ display: "flex", justifyContent: "center" }}>

                <form onSubmit={handleSubmit}>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* maxWidth recibe breack points por parte de MUI para hacer responsivo el tamaño de campo */}
                        {/* Campos del formulario */}
                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            label="Comenta algo"
                            placeholder="Escribe lo que piensas..."
                            multiline
                            value={comentario}
                            inputProps={{
                                maxLength: 280 /* ESTE ES EL LIMITE DE CARACTERES POR PUBLICACIÓN */,
                            }}
                            onChange={(e) =>
                                setComentario(e.target.value)
                            } /* cada que cambie este input se ejecuta el hook para guardar el dato en una variable */
                            sx={{ fontFamily: "Lato, sans-serif", mb: 1 }}
                        />

                        <Stack direction="row" alignItems="center" spacing={18}>
                            {/* Botón para enviar el formulario */}
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{
                                    fontFamily: "Lato, sans-serif",
                                    bgcolor: "#1687A7",
                                    "&:hover": {
                                        bgcolor: "#125E75",
                                    },
                                }}
                            >
                                Publicar
                            </Button>
                        </Stack>
                    </Box>
                </form>

            </div>
        </Box>
    )
}