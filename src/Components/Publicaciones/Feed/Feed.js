import * as React from 'react';

//Importacion de componentes de Material UI
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider,Button } from '@mui/material';


//exportacion del componente feed para las publicaciones
export default function Feed(props) {
  
  let date =  new Date(props.createdAt);

  return (

    <div>
      {/* -------------------------------------- Card Sin Foto -------------------------------------- */}
      {/* Componente Card que contiene una publicacion sin imagenes */}
      <Card sx={{ maxWidth: {xs:"300px", sm:"80%", md:"60%" } ,margin:"auto", borderRadius: "15px" , my:"20px"}}>
        {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.avatar}/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />{/* icono opciones */}
            </IconButton>
          }
          title={props.name}
          subheader={date.toLocaleDateString()}/* Usa metodo de JS para darle formato  */
        />
          <Divider/>

          {/* Componente que permite asignar una imagen a las publicaciones */}
        {props.image != null ? (<CardMedia
              component="img"
              image={props.image}/* ruta de la imagen */
              alt="Paella dish"
            />): null}
            
        

        {/* Componente de linea que divide componentes */}
        <Divider/>

        {/* Contenido del la card de publicacion */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {props.descripcion}
          </Typography>
        </CardContent>

        {/* Componente de linea que divide componentes */}
        <Divider/>

        {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
        <CardActions disableSpacing>
         
          {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
          </IconButton>  ---------------> se deja por si no hay likes*/}
          <Button aria-label="add to favorites"  startIcon={<FavoriteIcon />}>
              {props.likes}
          </Button>

          {/* <IconButton aria-label="add comment" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>
          </IconButton>  ---------------> se deja por si no hay comentarios*/}
          <Button aria-label="add to favorites"  startIcon={<ChatIcon/>} sx={{ marginLeft:"auto" }}>
              {props.comments}
          </Button>
         
        </CardActions>
      </Card>

      
    </div>


  );
}