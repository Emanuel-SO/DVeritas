import { Route, Routes } from 'react-router-dom';
import './App.css';
import ResponsiveAppBar from './Components/AppBar/ResponsiveAppBar';
import Contacto from './Routes/Contacto';
import Inicio from './Routes/Inicio';
import Nosotros from './Routes/Nosotros';
import Publicaciones from './Routes/Publicaciones';
import Registrar from './Routes/Registrar';
import Ingresar from './Routes/Ingresar';
import Perfil from './Routes/Perfil';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path="/publicaciones" element={<Publicaciones/>}/>
        <Route path="/contacto"  element={<Contacto/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/registrar" element={<Registrar/>}/>
        <Route path="/ingresar" element={<Ingresar/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </div>
  );
}

export default App;
