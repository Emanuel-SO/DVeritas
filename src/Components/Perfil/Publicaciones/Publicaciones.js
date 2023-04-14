import * as React from 'react';
import { useState,useEffect } from 'react';
import { API_URL } from '../../../configuracion';

import Feed from '../../Publicaciones/Feed/Feed';

//exportacion del componente feed para las publicaciones
export default function UsuarioFeed() {


  

  const [publicaciones, setPublicaciones] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/dveritas/publicaciones/usuario/${id}`); 
        const jsonData = await response.json();
        setPublicaciones(jsonData);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  function sortByDate(publicaciones) {
    if (!publicaciones) {
      return [];
    }
    publicaciones.sort(function (a, b) {
      const fechaA = new Date(a.fecha_publicacion);
      const fechaB = new Date(b.fecha_publicacion);
      return fechaB - fechaA;
    });
    return publicaciones;
  }

  const usuarioPublicaciones = sortByDate(publicaciones).map((item) => <Feed {...item} key={item.id}/>);
  

  return (

    <>
      {usuarioPublicaciones}
    </>

  );
}