import * as React from "react";

import { useState } from "react";
import {  useEffect } from "react";


/* Importacion de componentes de MUI */
import {Box, Tab} from '@mui/material';
import { TabContext,TabList,TabPanel } from '@mui/lab';

/* Importacion del componente de las publicaciones */
import Feed from '../Feed/Feed';
/* Importacion del componente formulario para hacer una nueva publicación */
import FormularioPublicar from '../FormularioPublicar/FormularioPublicar';

import data from '../../../Constants/publicaciones';

function sortByLikes(data) {
  data.sort(function (a, b) {
      return b.likes - a.likes;
  });
  return data;
}

function sortByComments(data) {
  data.sort(function (a, b) {
      return b.comments - a.comments;
  });
  return data;
}


function sortByDate(data) {
  data.sort(function (a, b) {
    const fechaA = new Date(a.createdAt);
    const fechaB = new Date(b.createdAt);
    return fechaB - fechaA;
  });
  // console.log(data);
  return data;
}





/* se crea qy se exporta el componenete de las publicacioens */
export default function NavTabs() {

  
  const [usuarioActual, setUsuarioActual] = React.useState(null);

  useEffect(() => {
    setUsuarioActual (localStorage.getItem("usuario"));
    
  }, [usuarioActual]);

  const todasPublicaciones = sortByDate(data).map((item) => <Feed {...item} key={item.id}/>);
  // const todasPublicaciones = data.map((item) => <Feed {...item} key={item.id}/>);
  const masLikesPublicaciones = sortByLikes(data).map((item) => <Feed {...item} key={item.id}/>);
  const masComentariosPublicaciones = sortByComments(data).map((item) => <Feed {...item} key={item.id}/>);
  
  /* Hook que revisa el estado del la barra de opciones "Tabs" y hace que cada que recargue la pàgina se easigne a 1 */
  const [value, setValue] = useState('1');

  /* Funcion que escucha el cambio en la barra de opciones y cambia el valor por medio del hook que escucha la barra */
  const handleChange = (event ,newValue) => {
    setValue(newValue);
  }

  return (
    /* ----------------------------- Barra de opciones para publicaciones ----------------------------- */
    <Box sx={{ width: '100%', my:"10px"}}>
      <TabContext value={value}>{/* con este value se logra hacer que cuando cargue el componente se vea el contenido que corresponda al valor */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* ----------------------------------------- Lista de opciones ----------------------------------------- */}
          <TabList aria-label='Tabs-example' onChange={handleChange} centered>{/* con el onchange se revisa que tab es la selecionada */}
            <Tab label='Todas' value='1'/>
            <Tab label='+ Likes' value='2'/>
            <Tab label='+ Comentarios' value='3'/>
          </TabList>
        </Box>
        {/* ----------------------------------------- Componente de formulario publicaciones ----------------------------------------- */}
        {/* se agrega el componente de formulario para publicaciones */}
        {usuarioActual
        ? <FormularioPublicar/>
        : null
        }

        {/* ----------------------------------------- Contenido que se muestra segun la tab que se encuentre selecionada ----------------------------------------- */}
      <TabPanel value='1' >
        {/* se agrega el componente que muetra las publicaciones como cards con o sin imagenes */}
        {todasPublicaciones}
      </TabPanel>
      <TabPanel value='2'>
        {/* se agrega el componente que muetra las publicaciones como cards con o sin imagenes */}
        {masLikesPublicaciones}
      </TabPanel>
      <TabPanel value='3'>
        {/* se agrega el componente que muetra las publicaciones como cards con o sin imagenes */}
        {masComentariosPublicaciones}
      </TabPanel>
      </TabContext>
    </Box>
  );
}