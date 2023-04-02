import * as React from "react";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Grid, TextField, Stack, Divider } from "@mui/material";

//Importacion de componentes de Material UI

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sx: "100%" },
  bgcolor: "background.paper",
  border: "2px solid #276678",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  

};

//exportacion del componente feed para las publicaciones
export default function Feed(props) {


  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      console.log(props.name);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  }


  const [comentario, setComentario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la acción por defecto del formulario al ser enviado
    console.log({ comentario }); // Imprime en la consola los valores del formulario
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let date = new Date(props.createdAt);

  return (
    <div>
      {/* -------------------------------------- Card Sin Foto -------------------------------------- */}
      {/* Componente Card que contiene una publicacion sin imagenes */}
      <Card
        sx={{
          maxWidth: { xs: "300px", sm: "80%", md: "60%" },
          margin: "auto",
          borderRadius: "15px",
          my: "20px",
        }}
      >
        {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={props.avatar}
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
              {/* icono opciones */}
            </IconButton>
          }
          title={props.name}
          subheader={date.toLocaleDateString()} /* Usa metodo de JS para darle formato  */
        />
        <Divider />

        {/* Componente que permite asignar una imagen a las publicaciones */}
        {props.image != null ? (
          <CardMedia
            component="img"
            image={props.image} /* ruta de la imagen */
            alt="Paella dish"
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
          <Button aria-label="add to favorites" onClick={handleLike} >
            {liked 
              ? <FavoriteIcon /> 
              : <FavoriteBorderIcon/>
            } 
            {likes}
          
            
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
            {props.comments}
          </Button>
        </CardActions>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <List
              id="outlined-comentarios"
              sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={sectionId}>
                  <ul>
                      <Box>

                        <ListSubheader sx={{translate: "0px -5px", scrollBehavior: "smooth"}}>
                          <Divider textAlign="left"><Chip label="Usuaiario Manolito" sx={{color:"#276678",borderColor:"#276678"}} variant="outlined"/></Divider>

                        </ListSubheader>
                        <ListItem key={sectionId}>
                          <ListItemText
                            primary={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                          />
                        </ListItem>
                        
                      </Box>
                  </ul>
                </li>
              ))}
            </List>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* Componente grid para posicionar correctamente el formulario */}
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  marginTop: "1rem",
                  marginBottom: "-1rem",
                  display: "flex",
                }}
              >
                {/* Inicia el formulario */}
                <form onSubmit={handleSubmit}>
                  {" "}
                  {/* se le asigna una funcion a ejecutar una vez se presione el submit */}
                  {/* Contenedor del formulario */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: { xs: "300px", sm: "550px" },
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
              </Grid>
            </div>
          </Box>
        </Modal>
      </Card>
    </div>
  );
}
