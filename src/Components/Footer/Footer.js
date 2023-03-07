import { Grid } from "@mui/material";
import {List,ListItem,ListItemButton,ListItemText, ListItemAvatar, Avatar} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";


import './Footer.css';


 
function Footer(){
    return (
        <Grid container bgcolor="#276678" color="#D3E0EA">
            <Grid item xs={12} sm={4} textAlign="center">
                <h1>D´Veritas</h1>
            </Grid>
            <Grid item xs={12} sm={4}  textAlign="center">
                <List>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ListItem disablePadding>
                                <Link to="/" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Inicio" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to="/publicaciones" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Publicaciones" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to="/nosotros" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Nosotros" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </Grid>
                        <Grid item xs={6}>
                            <ListItem disablePadding>
                                <Link to="/contacto" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Contacto" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to="/registrar" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Registrarse" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to="/ingresar" className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Ingresar" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link className="link-decoration">
                                    <ListItemButton>
                                        <ListItemText primary="Perfil" sx={{color: "#D3E0EA"}}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        </Grid>
                    </Grid>
                </List>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
                <List>
                    <Grid container>
                        <Grid item xs={4} sm={12}>
                            <Link className="link-decoration">
                                <ListItem>
                                        <ListItemAvatar>
                                            <Avatar sx={{bgcolor: "#276678"}}>
                                                <LinkedInIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="LinkedIn"  sx={{color: "#D3E0EA"}}/>
                                </ListItem>
                            </Link>
                        </Grid>
                        <Grid item xs={4} sm={12}>
                            <Link className="link-decoration">
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{bgcolor: "#276678"}}>
                                            <GitHubIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="GitHub" sx={{color: "#D3E0EA"}} />
                                </ListItem>
                            </Link>
                        </Grid>
                        <Grid item xs={4} sm={12}>
                            <Link className="link-decoration">
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{bgcolor: "#276678"}}>
                                            <TwitterIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Twitter"  sx={{color: "#D3E0EA"}}/>
                                </ListItem>
                            </Link>
                        </Grid>
                    </Grid>
                    
                    

                </List>
            </Grid>
        </Grid>
    )
}
export default Footer;