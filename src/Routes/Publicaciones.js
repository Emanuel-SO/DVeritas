import Feed from "../Components/Publicaciones/Feed/Feed";
import NavTabs from "../Components/Publicaciones/Filtros/Filtros";
// import Filtros from "../Components/Publicaciones/Filtros/Filtros";
import FormularioPublicar from "../Components/Publicaciones/FormularioPublicar/FormularioPublicar";

function Publicaciones(){
    return (
        <>
            <h1>Hola mundo Publicaciones</h1>
            <NavTabs/>
            <FormularioPublicar/>
            <Feed/>
        </>
    )
}
export default Publicaciones;