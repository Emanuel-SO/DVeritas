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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import { useState, useEffect } from "react";
import { API_URL } from '../../../configuracion';

//exportacion del componente feed para las publicaciones
export default function Feed() {

  
  
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    fetch(`${API_URL}/dveritas/usuarios/${id}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data))
      .catch((error) => console.log(error));
  }, []);

  return (

    <div>
      {/* -------------------------------------- Card Sin Foto -------------------------------------- */}
      {/* Componente Card que contiene una publicacion sin imagenes */}
      <Card sx={{ maxWidth: {xs:"300px", sm:"80%", md:"60%" } ,margin:"auto", borderRadius: "15px" , my:"20px"}}>
        {/* Cabecera de la card, donde muestra una imagen, nombre, fecha y un icono para ociones */}
        <CardHeader
          avatar={
            <Avatar alt="Mranonimo" src={usuario.avatar}/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />{/* icono opciones */}
            </IconButton>
          }
          title={usuario.nombre}
          subheader="31/03/2023"
        />
        {/* Componente de linea que divide componentes */}
        <Divider/>

        {/* Contenido del la card de publicacion */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Adivinen a quien despidieron en la oficina
          </Typography>
        </CardContent>

        {/* Componente de linea que divide componentes */}
        <Divider/>

        {/* Seccion final de a car que muestra boton de me gusta y boton de comentarios con iconos */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />{/* icono me gusta */}
          </IconButton>

          <IconButton aria-label="add to favorites" sx={{ marginLeft:"auto" }}>
              <ChatIcon/>{/* icono cometarios */}
          </IconButton>
        </CardActions>
      </Card>

      {/* -------------------------------------- Card Foto -------------------------------------- */}
      {/* Componente Card que contiene una publicacion con imagenes */}
      <Card sx={{ maxWidth: {xs:"300px", sm:"80%", md:"60%" } ,margin:"auto", borderRadius: "15px"}}>
        <CardHeader
          avatar={
            <Avatar alt="Mranonimo" src={usuario.avatar}/>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={usuario.nombre}
          subheader="12/03/2023"
        />
        <Divider/>

        {/* Componente que permite asignar una imagen a las publicaciones */}
        <CardMedia
          component="img"
          height="194" /* tamaño de la imagen */
          image="https://lanoticiadigital.com.mx/wp-content/uploads/2022/08/igiene-696x809.jpg"/* ruta de la imagen */
          alt="Paella dish"
        />
        <Divider/>


        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Nunca coman con la tia Aly salen moscas 
          </Typography>
        </CardContent>
        <Divider/>


        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <IconButton aria-label="add to favorites" sx={{ marginLeft:"auto" }}>
            <ChatIcon/>
          </IconButton>
        </CardActions>
        
      </Card>
    </div>


  );
}