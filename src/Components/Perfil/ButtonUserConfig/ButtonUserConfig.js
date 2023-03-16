import { Container, Grid, Button } from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';


//Componente configuracion de usuario

const ButtonUserConfig = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px"}}>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <Button variant="outlined" endIcon={<EditRoundedIcon />} sx={{ fontFamily:  "Lato, sans-serif", color: "#276678" }}>
            Configuración
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ButtonUserConfig;