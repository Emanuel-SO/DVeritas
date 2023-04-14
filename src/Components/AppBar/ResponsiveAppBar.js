// Importación de componentes de MUI
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import {  useEffect } from "react";


// Estilos parsonalizados para el menu de navegación
import './ResponsiveAppBar.css';


//Componete menu de navegación
function ResponsiveAppBar() {

  // Hook que revisa el estado del boton de hamburguesa para el menu en dispositivos pequeños
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Hook que revisa el usuarip en el local storage
  const [usuarioActual, setUsuarioActual] = React.useState(null);

  // funcion para cerrar sesion
  function deleteStorage() {
    sessionStorage.removeItem("id");
    setUsuarioActual(null);
  }

  // verificar si hay usuario en el local storage
  useEffect(() => {
    setUsuarioActual (sessionStorage.getItem("id"));
  }, [usuarioActual]);






  // funcion que abre el menu de hamburguesa segun el estado
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 
  // funcion que cierra el menu de hamburguesa segun el estado
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  

  return (
    // Componente de MUI con posicion static que lo mantiene anclado a la parte donde se renderiza
    <AppBar position="static" sx={{ bgcolor: "#276678"}}>
      {/* Componente de MUI que contiene todos los elementos del menu de navegación, se le asigna una propiedad que hace que siempre ocupe el maximo ancho del dispositvo */}
      <Container maxWidth="xl">
        {/* Componente de MUI que permite contener otros componentes de MUI para hacer una barra de herramientas, se le asigna una propiedad que elimina los paddings horizontales para que todo el ancho del dispositivo */}
        <Toolbar disableGutters>

{/* ------------------------------- Nombre o Logo dispositivos pequeños ------------------------------- */}
          {/* Componente de MUI que funciona como etiquetas HTML para visualizar textos, para esto se le propocionan distintas propiedades que lo hacen comportarse como etiqueta HTML */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#D3E0EA",
              textDecoration: 'none',
            }}
          >
            D´Veritas
          </Typography>

{/* ------------------------------- Opciones de navegacion dispositivos pequeños ------------------------------- */}
        {/* Componente de MUI que funciona como emboltura para otros componentes, con este Box se crea la emboltura del menu de hamburguesa */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Componente que permite a un icono funcionar como boton, se le agrega una propiedad onClick para ejecutar la funcion de abrir el menu de hamburguesa */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#D3E0EA" }}
            >
              {/* Icono menu de hamburguesa */}
              <MenuIcon />
            </IconButton>
            {/* Componente de MUI que se utiliza para mostrar una lista de opciones en una superficie temporal */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav} /* liga el componente al hook que revisa el estado del componente */
              anchorOrigin={{ /* Controla el origen a partir de que posición del elemeto anclado se muestra el menu */
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted /* Mantiene al hijo del componente menu simpre estar cargado en el DOM (para mejorar el SEO) */
              transformOrigin={{/* Controla como se muestra el menu segun el origen dado */
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}/* si es true el componente hijo se muestra */
              onClose={handleCloseNavMenu}/* evento que cierra el componente cuando recibe "escapeKeyDown", "backdropClick", "tabKeyDown" */
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>{/* Evento que cierra el menu cuando se da click en el */}
                  <Link to="/" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                    <Typography textAlign="center" sx={{ color:"black" }}>Inicio</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>{/* Evento que cierra el menu cuando se da click en el */}
                  <Link to="/publicaciones" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                    <Typography textAlign="center" sx={{ color:"black" }}>Publicaciones</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>{/* Evento que cierra el menu cuando se da click en el */}
                  <Link to="/nosotros" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                    <Typography textAlign="center" sx={{ color:"black" }}>Nosotros</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>{/* Evento que cierra el menu cuando se da click en el */}
                  <Link to="/contacto" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                    <Typography textAlign="center"  sx={{ color:"black" }}>Contacto</Typography>
                  </Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>{/* Evento que cierra el menu cuando se da click en el */}
                { !usuarioActual 
                  ? <Link to="/registrar" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                      <Typography textAlign="center" className='link-decoration'>Registrarse</Typography>
                    </Link>

                  : <Link to="/perfil" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                      <Typography textAlign="center" className='link-decoration'>Perfil</Typography>
                    </Link>
                }
                  
                </MenuItem>
            </Menu>
          </Box>

{/* ------------------------------- Nombre o Logo D´Veritas dispositivos pequeños ------------------------------- */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex', md:'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#D3E0EA",
              textDecoration: 'none',
            }}
          >
            D´Veritas
          </Typography>

{/* ------------------------------- Opciones de navegacion dispositivos grandes ------------------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: "#D3E0EA" }}>
            
              <Link to="/" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                <Button sx={{ my: 2, color: "#D3E0EA", display: 'block'}}>
                  Inicio
                </Button>
              </Link>

              <Link to="/publicaciones" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                <Button sx={{ my: 2, color: "#D3E0EA", display: 'block' }}>
                  Publicaciones
                </Button>
              </Link>

              <Link to="/nosotros" className='link-decoration'>{/* Permite redireccion a otra página por medio de react-router */}
                <Button sx={{ my: 2, color: "#D3E0EA", display: 'block' }} >
                  Nosotros
                </Button>
              </Link>

              <Link to="/contacto" className="link-decoration">{/* Permite redireccion a otra página por medio de react-router */}
                <Button sx={{ my: 2, color: "#D3E0EA", display: 'block'}}>
                  Contacto
                </Button>
              </Link>

              {/* Dependiendo si hay usuario logeado o no, se mostrara una opcion diferente */}
              { !usuarioActual 
                ? <Link to="/registrar" className="link-decoration">{/* Permite redireccion a otra página por medio de react-router */}
                    <Button  sx={{ my: 2, color: '#D3E0EA', display: 'block' }}>
                      Registrarse
                    </Button>
                  </Link>
                  : <Link to="/perfil" className="link-decoration">{/* Permite redireccion a otra página por medio de react-router */}
                      <Button  sx={{ my: 2, color: '#D3E0EA', display: 'block' }}>
                        Perfil
                      </Button>
                    </Link>
              }
          </Box>
          
{/* ------------------------------- Boton Ingresar o Perfil ------------------------------- */}
          <Box sx={{ flexGrow: 0 }}>

            { !usuarioActual 
                ? <Link to="/ingresar" className="link-decoration">{/* Permite redireccion a otra página por medio de react-router */}
                    <Button variant="contained"  sx={{ my: 2, color: "#D3E0EA", bgcolor:"#1687A7" , '&:hover': { bgcolor: '#125E75'} }}>
                      Ingresar
                    </Button>
                  </Link>

                : <Link to="/" className="link-decoration">{/* Permite redireccion a otra página por medio de react-router */}
                    <Button variant="contained"  sx={{ my: 2, color: "#D3E0EA", bgcolor:"#1687A7" , '&:hover': { bgcolor: '#125E75'} }} onClick={deleteStorage}>
                      Cerrar Sesión
                    </Button>
                  </Link>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
  
}
export default ResponsiveAppBar;