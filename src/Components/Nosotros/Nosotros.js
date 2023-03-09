import "./Nosotros.css";
import data from "../../Constants/nosotros";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import imgbackground from "./img/fondoimg.jpg";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { green, blue, common } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';


const AboutUs = () => {
  const aboutme = data.map((item) => <AboutMe {...item} />);
  return (
    <Box>
      <Card
        id="card"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          
        }}
      >
        {""}
        {aboutme}
      </Card>
    </Box>
  );
};

const AboutMe = (props) => {
  return (
    <React.Fragment>
      <CardContent
        /* ESTILO GENERAL DE LA TARJETA */
        sx={{
          
          bgcolor: "#276678",

          m: 2,
          p: 0,
          borderRadius: "16px",
          minWidth: 360,
          maxWidth: 550,
          color: "#f6f5f5",
          textAlign: "center",
        }}
      >
        {/* IMAGEN DE FONDO (DETRAS DE AVATAR)*/}
        <Box
          sx={{
            backgroundImage: `url(${imgbackground})`,
            p: 6,
            position: "relative",
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            borderBottom: 1,
            
          }}
        ></Box>
        {/* AVATAR */}
        <Box sx={{ display: "flex", justifyContent: "center", m: -8 }}>
          <Avatar
            sx={{ border: 2, width: 110, height: 110 }}
            alt={props.name}
            src={props.avatar}
          />
        </Box>

        {/* SECCIÓN CONTENIDO: NOMBRE, ENLACE A REDES (GitHub, Linkedin, CV), HEADLINE, ABOUTME */}
        <Box sx={{ p: 0, marginTop: 10, marginLeft: 7, marginRight: 7 }}>
          {/* NOMBRE */}
          <Typography sx={{ fontSize: 27 }}>{props.name}</Typography>

          {/* ENLACE A REDES (GitHub, Linkedin, CV)*/}
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {/* ENLACE GITHUB */}
            <Link href={props.gitHub} target="_blank">
              <Avatar
                sx={{
                  bgcolor: common[500],
                  marginRight: 3,
                  marginBottom: 2,
                  marginTop: 0,
                  width: 60,
                  height: 60,
                }}
              >
                <GitHubIcon />
              </Avatar>
            </Link>
            {/* ENLACE LINKEDIN */}
            <Link href={props.linkedin} target="_blank">
              <Avatar
                sx={{
                  bgcolor: blue[500],

                  marginBottom: 2,
                  marginTop: 0,
                  width: 60,
                  height: 60,
                }}
              >
                <LinkedInIcon />
              </Avatar>
            </Link>
            {/* ENLACE CV */}
            <Link href={props.cv} target="_blank">
              <Avatar
                sx={{
                  bgcolor: green[500],
                  marginLeft: 3,
                  marginBottom: 2,
                  marginTop: 0,
                  width: 60,
                  height: 60,
                }}
              >
                <AssignmentIcon />
              </Avatar>
            </Link>
          </Box>

          {/* HEADLINE */}
          <Typography sx={{ mb: 1.5, fontSize: 20, marginTop: 1 }}>
            {props.headline}
          </Typography>

          {/* ABOUTME */}
          <Typography sx={{ mb: 1.5, marginTop: 3 }}>
            {props.aboutMe}
          </Typography>
        </Box>

        {/* SKILLS */}
        {/* TECHNICAL SKILLS */}

   

        <Grid container sx={{ marginTop: 1 }}>
          <Grid xs={6}>
          {/* <Accordion> */}
        {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > */}
            <Divider>
              <Chip label="TECHNICAL SKILLS" />
            </Divider>
{/* 
        </AccordionSummary>
        <AccordionDetails> */}
            <Grid xs={12} sx={{display:"flex", justifyContent:"space-evenly", m:2}}>

            <img
              src={props.techSOne}
              alt={props.techSOne}
             width={60}
             height={60}
            />
          

                     

            <img
              src={props.techSTwo}
              alt={props.techSTwo}
              width={60}
              height={60}
            />
          
          </Grid>
          <Grid xs={12} sx={{display:"flex", justifyContent:"space-evenly", m:2}}>

            <img
              src={props.techSThree}
              alt={props.techSThree}
              width={60}
              height={60}
            />
 



            <img
              src={props.techSFour}
              alt={props.techSFour}
              width={60}
              height={60}
            />
            
    
            </Grid>
            {/* </AccordionDetails>
      </Accordion> */}
          </Grid>
          {/* SOFT SKILLS */}
          <Grid xs={6}>

          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Divider>
              <Chip label="SOFT SKILLS" />
            </Divider>

        </AccordionSummary>
        <AccordionDetails>
       
              
              <Grid xs={12} sx={{display:"flex", justifyContent:"space-evenly", m:2}}>
              <img
                src={props.SoftSOne}
                alt={props.SoftSOne}
                width={60}
                height={60}
              />

              <img
                src={props.SoftSTwo}
                alt={props.SoftSTwo}
                width={60}
                height={60}
                />
</Grid>
<Grid xs={12} sx={{display:"flex", justifyContent:"space-evenly", m:2}}>
              <img
                src={props.SoftSThree}
                alt={props.SoftSThree}
                width={60}
                height={60}
              />
            <Tooltip title={"Prueba1"}>
                <img
                  src={props.SoftSFour}
                  alt={props.SoftSFour}
                  width={60}
                  height={60}
                /> 
                </Tooltip>
            </Grid>
            </AccordionDetails>
      </Accordion>
        
          </Grid>
        </Grid>



      </CardContent>
    </React.Fragment>
  );
};

export default AboutUs;
