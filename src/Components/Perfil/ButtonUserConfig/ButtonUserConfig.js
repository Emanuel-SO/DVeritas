import { Button } from "@mui/material"
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ButtonUserConfig = () => {
    return (
        <Button variant="outlined" endIcon={<EditRoundedIcon />}>Configuración</Button>
    )
}

export default ButtonUserConfig;
