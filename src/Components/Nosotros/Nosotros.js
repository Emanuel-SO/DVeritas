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
import Tooltip from "@mui/material/Tooltip";

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
          minWidth: 200,
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
            sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
          >
            {/* ENLACE GITHUB */}
            <Link href={props.gitHub} target="_blank">
              <Avatar
                sx={{
                  bgcolor: common[500],
                 
                  marginBottom: 2,
                  marginTop: 1,
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
                  marginTop: 1,
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
                
                  marginBottom: 2,
                  marginTop: 1,
                  width: 60,
                  height: 60,
                }}
              >
                <AssignmentIcon />
              </Avatar>
            </Link>
          </Box>

          {/* HEADLINE */}
          <Typography sx={{ mb: 1.5, fontSize: 20, marginBottom: 3 }}>
            {props.headline}
          </Typography>

          {/* ABOUTME */}
          <Divider>
            <Chip label="ABOUT ME" color="warning" />
          </Divider>

          <Typography sx={{ mb: 1.5, marginTop: 1, marginBottom: 3 }}>
            {props.aboutMe}
          </Typography>
        </Box>

        {/* SKILLS */}
        {/* TECHNICAL SKILLS */}

        <Grid container sx={{ marginTop: 2 }}>
          <Grid xs={12}>
            <Divider>
              <Chip label="TECHNICAL SKILLS" color="primary" />
            </Divider>

            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 3,
                marginBottom: 5,
              }}
            >
              <Grid
                container
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                >
                  <Tooltip arrow title={props.techSOneTooltip}>
                    <img
                      src={props.techSOne}
                      alt={props.techSOneTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                  <Tooltip arrow title={props.techSTwoTooltip}>
                    <img
                      src={props.techSTwo}
                      alt={props.techSTwoTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                  <Tooltip arrow title={props.techSThreeTooltip}>
                    <img
                      src={props.techSThree}
                      alt={props.techSThreeTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                  <Tooltip arrow title={props.techSFourTooltip}>
                    <img
                      src={props.techSFour}
                      alt={props.techSFourTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                </Grid>
              </Grid>

              <Grid
                container
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                >
                  <Tooltip title={props.techSFiveTooltip}>
                    <img
                      src={props.techSFive}
                      alt={props.techSFiveTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                  <Tooltip arrow title={props.techSSixTooltip}>
                    <img
                      src={props.techSSix}
                      alt={props.techSSixTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid
                container
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexWrap: "wrap",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-evenly", flexWrap:"wrap" }}
                >
                  <Tooltip arrow title={props.techSSevenTooltip}>
                    <img
                      src={props.techSSeven}
                      alt={props.techSSevenTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                  <Tooltip arrow title={props.techSEightTooltip}>
                    <img
                      src={props.techSEight}
                      alt={props.techSEightTooltip}
                      width={45}
                      height={45}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* SOFT SKILLS */}
          <Grid xs={12}>
            <Divider>
              <Chip label="SOFT SKILLS" color="error" />
            </Divider>
            <Grid
              xs={12}
              sx={{ display: "flex", justifyContent: "space-evenly", m: 1, flexWrap: "wrap",
            }}
            >
              <Tooltip arrow title={props.SoftSOneTooltip}>
                <img
                  src={props.SoftSOne}
                  alt={props.SoftSOneTooltip}
                  width={60}
                  height={60}
                />
              </Tooltip>
              <Tooltip arrow title={props.SoftSTwoTooltip}>
                <img
                  src={props.SoftSTwo}
                  alt={props.SoftSTwoTooltip}
                  width={60}
                  height={60}
                />
              </Tooltip>
              <Tooltip arrow title={props.SoftSThreeTooltip}>
                <img
                  src={props.SoftSThree}
                  alt={props.SoftSThreeTooltip}
                  width={60}
                  height={60}
                />
              </Tooltip>
              <Tooltip arrow title={props.SoftSFourTooltip}>
                <img
                  src={props.SoftSFour}
                  alt={props.SoftSFourTooltip}
                  width={60}
                  height={60}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </React.Fragment>
  );
};

export default AboutUs;