import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import Modal from "react-modal";


function BotonModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleClick} variant="contained" //Botón tendrá un aspecto "contenedor" con un fondo sólido
                    sx={{ 
                        margin: '16px', 
                        width: '250px', 
                        height: '50px', 
                        fontFamily: 'monospace', 
                        marginTop: "50px" ,
                      
                        }}>
      
                        Enviar
                    
                    
                    </Button>
      <Modal isOpen={isOpen} onRequestClose={handleClose}>
        <h2>Gracias por tus dudas y comentarios</h2>
        <p>Nuestro equipo revisara tu solicitud y te responderemos lo mas pronto posible.</p>
        <Button onClick={handleClose}> </Button>
      </Modal>
    </>
  );
}

export default BotonModal;