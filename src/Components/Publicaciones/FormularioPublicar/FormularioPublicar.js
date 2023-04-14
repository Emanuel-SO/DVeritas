import * as React from "react";
import { useState , useEffect} from "react";
import { API_URL } from '../../../configuracion';

/* Imporaciones de componentes de Material UI */
import { Grid, Box, TextField, Button,IconButton,Stack} from "@mui/material";

import PhotoCamera from '@mui/icons-material/PhotoCamera';


/* Creacion del componete de formulario para las publicaciones */
const FormnularioPublicar = () => {

 
  // Hook que revisa el usuarip en el local storage
  const [usuarioActual, setUsuarioActual] = React.useState(null);

  // verificar si hay usuario en el local storage
  useEffect(() => {
  setUsuarioActual (sessionStorage.getItem("id"));
  }, [usuarioActual]);


  //Usando useState definimos los valores iniciales de los campos del formulario y como los vamos a almacenar
  const [publicacion, setPublicacion] = useState("");
  const [imagen, setImagen] = useState(null);
  
  function handleChange(event) {
    const fileName = event.target.files[0].name;
    
    setImagen(fileName);
  }

  // Manejador de eventos que se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la acción por defecto del formulario al ser enviado
    console.log({ publicacion, imagen, usuarioActual }); // Imprime en la consola los valores del formulario
    fetch(`${API_URL}/dveritas/publicaciones/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        descripcion: publicacion,
        imagen: imagen,
        usuario: {id:usuarioActual}
      })
    })
    .then(
      setTimeout(() => {
        
        window.location.reload();
      }, 50)
    )

  };

  // Es la estructura de la parte visual del formulario
  return (
    /* ------------------------------------------------ Formulario Publicaciones ------------------------------------------------ */
    /* Contenedor para el formulario */
    <div style={{ display: "flex", justifyContent: "center" }}> 
    {/* Componente grid para posicionar correctamente el formulario */}
      <Grid item xs={12} md={8} sx={{ marginTop: "1rem", marginBottom: "-1rem", display:"flex" }}>
        {/* Inicia el formulario */}
       
        
        <form onSubmit={handleSubmit}> {/* se le asigna una funcion a ejecutar una vez se presione el submit */}
        {/* Contenedor del formulario */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: {xs:"300px", sm:"550px" }}}>{/* maxWidth recibe breack points por parte de MUI para hacer responsivo el tamaño de campo */}
          {/* Campos del formulario */}
           <TextField
              fullWidth
              id="outlined-textarea"
              label="Crea una nueva publicación..."
              placeholder="Escribe lo que piensas..."
              multiline
              value={publicacion}
              inputProps={{
                maxLength:280, /* ESTE ES EL LIMITE DE CARACTERES POR PUBLICACIÓN */
            }}
              onChange={(e) => setPublicacion(e.target.value)}/* cada que cambie este input se ejecuta el hook para guardar el dato en una variable */
              sx={{fontFamily: "Lato, sans-serif", mb: 1}}
          />

          
          
          <Stack direction="row" alignItems="center" spacing={18}>
              <IconButton sx={{ color:"#1687A7" ,'&:hover': {color: '#125E75'}}} aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" onChange={handleChange}/>{/* cada que cambie este input se ejecuta el hook para guardar el dato en una variable, en este caso la ruta de donde sale la imagen a guardar */}
                  <PhotoCamera/>
                  <p>{imagen}</p>
              </IconButton>
              {/* Botón para enviar el formulario */}
              <Button variant="contained" type="submit" sx={{ fontFamily:  "Lato, sans-serif",   bgcolor: '#1687A7',
              '&:hover': {
                  bgcolor: '#125E75',
              },
              }}>
              Publicar
              </Button>
          </Stack>
          
        </Box>
        </form>
        
      
      </Grid>
    </div>
  );
};


//se exporta el componente del formulario para publicar
export default FormnularioPublicar;