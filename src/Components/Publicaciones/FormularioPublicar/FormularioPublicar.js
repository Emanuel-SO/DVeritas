import * as React from "react";
import { useState , useEffect} from "react";
import { API_URL } from '../../../configuracion';
import { Grid, Box, TextField, Button,IconButton,Stack} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const FormnularioPublicar = () => {
  const [usuarioActual, setUsuarioActual] = React.useState(null);

  useEffect(() => {
    setUsuarioActual(sessionStorage.getItem("id"));
  }, []);

  const [publicacion, setPublicacion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [nombreImagen, setNombreImagen] = useState(null);

  function handleChange(event) {
    const file = event.target.files[0];
    setImagen(file);
    setNombreImagen(file.name);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", imagen);

    fetch(`${API_URL}/dveritas/file/`, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        
      })
      .then(() => {
        
        fetch(`${API_URL}/dveritas/publicaciones/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            descripcion: publicacion,
            imagen: nombreImagen,
            usuario:{
              id: usuarioActual
            } 
          }),
        })
          .then(() => {
            window.location.reload();
                    })
          .catch((error) => {
            console.log("Error al guardar la publicación:", error);
          });

    })

      
      .catch((error) => {
        console.log("Error al cargar la imagen:", error);
      });



  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}> 
      <Grid item xs={12} md={8} sx={{ marginTop: "1rem", marginBottom: "-1rem", display:"flex" }}>
        <form onSubmit={handleSubmit}> 
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: {xs:"300px", sm:"550px" }}}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Crea una nueva publicación..."
              placeholder="Escribe lo que piensas..."
              multiline
              value={publicacion}
              inputProps={{ maxLength: 280 }} // Ajusté el espaciado aquí
              onChange={(e) => setPublicacion(e.target.value)}
              sx={{ fontFamily: "Lato, sans-serif", mb: 1 }}
            />
            <Stack direction="row" alignItems="center" spacing={18}>
              <IconButton sx={{ color:"#1687A7", '&:hover': {color: '#125E75'}}} aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={handleChange} />
                <PhotoCamera/>
              </IconButton>
             {nombreImagen}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  fontFamily:  "Lato, sans-serif",
                  bgcolor: '#1687A7',
                  '&:hover': {
                    bgcolor: '#125E75',
                  },
                }}
              >
                Publicar
              </Button>
            </Stack>
             {/* Mostrar el nombre de la imagen si existe */}
          </Box>
        </form>
      </Grid>
    </div>
  );
};

export default FormnularioPublicar;