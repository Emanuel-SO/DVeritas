// Importación de React Router para las rutas de la aplicación 
import { Route, Routes, Navigate } from 'react-router-dom';

// Estilos generales de la aplicacón
import './App.css';

// Importación de los componentes que se utilizan con las rutaS
import ResponsiveAppBar from './Components/AppBar/ResponsiveAppBar';
import Contacto from './Routes/Contacto';
import Inicio from './Routes/Inicio';
import Nosotros from './Routes/Nosotros';
import Publicaciones from './Routes/Publicaciones';
import Registrar from './Routes/Registrar';
import Ingresar from './Routes/Ingresar';
import Perfil from './Routes/Perfil';

/* Componente que renderiza la alpicación de D´Veritas */
function App() {
  return (
    <div>
      <ResponsiveAppBar/> {/* Componete Menú de navegación */}

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path="*" element={ <Navigate to={"/perfil"}/> }/>
        <Route path='/' element={<Inicio/>}/>
        <Route path="/publicaciones" element={<Publicaciones/>}/>
        <Route path="/contacto"  element={<Contacto/>}/>
        <Route path="/Nosotros" element={<Nosotros/>}/>
        <Route path="/registrar" element={<Registrar/>}/>
        <Route path="/ingresar" element={<Ingresar/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
