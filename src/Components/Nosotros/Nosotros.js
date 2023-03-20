import "./Nosotros.css";
import data from "../../Constants/nosotros";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import imgbackground from "./img/background/fondoimg.jpg";
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
import javawizardsIcon from "./img/background/javawizardsIcon.png";

// Función que va a retornar las tarjetas con la información en la Página Nosotros. Esta es la función que se va a exportar.
const AboutUs = () => {
  // La función .map() es una función que se utiliza para transformar cada elemento de un array según una función que se proporciona como argumento. En este caso, la función proporcionada como argumento ((item) => <AboutMe {...item} />) toma cada objeto dentro del array data, lo pasa como parametro ((item)) y crea un nuevo componente AboutMe. La sintaxis {...item} se utiliza para pasar cada propiedad del objeto item como una prop al componente AboutMe.
  // La constante aboutme es un array de componentes AboutMe (Componente con los estilos) creados a partir de los objetos dentro del array data.
  const aboutme = data.map((item) => <AboutMe {...item} />);

  // Debido a que será la función AboutUs la que se exportará. Será el return que podremos visualizar en la página Nosotros
  return (
    <Box>
      {/* PRIMER SECCIÓN: Se retorna una primer sección con el titulo "ACERCA DE NOSOTROS" y la imagen del logo, ambos con estilos agregados inline */}
      <Box>
        <Grid
        container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: 7,
            paddingY: 2,
            marginY: 3,
          }}
        >
          <Typography className="lato" variant="h3" color="#276678">
            ACERCA DE NOSOTROS
          </Typography>
          <img
            src={javawizardsIcon}
            alt="JavaWizardsIcon"
            width={207}
            height={60}
          />
        </Grid>
      </Box>

      {/* SEGUNDA SECCIÓN: Se retorna una segunda sección con las tarjetas guardadas en la constante aboutme y con estilos agregados inline*/}
      <Card
        id="card"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {aboutme}
      </Card>
    </Box>
  );
};

// Función que recibirá el parametro props mediante la información de cada objeto con "{...item}" (ver constante aboutme en función AboutUs), generando las tarjetas y guardando en la constante aboutme (función AboutUs) el numero de tarjetas según el numero de objetos.
const AboutMe = (props) => {
  return (
    <React.Fragment>
      <CardContent
        /* ------------------------------- ESTILO GENERAL DE LA TARJETA ------------------------------- */

        sx={{
          bgcolor: "#276678",
          m: 2,
          p: 0,
          borderRadius: "16px",
          minWidth: 200,
          maxWidth: 550,
          textAlign: "center",
          color: "#f6f5f5",
        }}
      >
        {/* ------------------------------- IMAGEN DE FONDO (DETRAS DE AVATAR) ------------------------------- */}

        <Box
          sx={{
            backgroundImage: `url(${imgbackground})`, // Se agrega la imagen imgbackground importada como background para la parte superior de las tarjetas
            p: 6,
            position: "relative",
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            borderBottom: 1,
          }}
        ></Box>
        {/* ------------------------------- AVATAR ------------------------------- */}
       
        <Box sx={{ display: "flex", justifyContent: "center", m: -8 }}>
          <Avatar
            sx={{ border: 2, width: 110, height: 110 }}
            alt={props.name} // Mediante props se accede al valor de la propiedad name de los objetos (Miembros de javawizards)
            src={props.avatar} // Mediante props se accede al valor de la propiedad avatar de los objetos (Miembros de javawizards)
          />
        </Box>

        {/* ------------------- SECCIÓN CONTENIDO: NOMBRE, ENLACE A REDES (GitHub, Linkedin, CV), HEADLINE, ABOUTME -------------------- */}

        <Box sx={{ p: 0, marginTop: 10, marginLeft: 7, marginRight: 7 }}>
          {/* ------------------------------- NOMBRE ------------------------------- */}

          <Typography className="lato" sx={{ fontSize: "1.75rem" }}>
            {props.name}{" "}
            {/* Mediante props se accede al valor de la propiedad name de los objetos (Miembros de javawizards) */}
          </Typography>

          {/* ------------------------------- ICONOS ENLACE A REDES (GitHub, Linkedin, CV) ------------------------------- */}

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >

             
            {/* ------------------------------- ENLACE GITHUB ------------------------------- */}

            <Link href={props.gitHub} target="_blank">
              {" "}
              {/* Mediante props se accede al enlace de GitHub de cada Miembro de javawizards*/}
              {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
              <Avatar
                sx={{
                  bgcolor: common[500],
                  marginBottom: 2,
                  marginTop: 1,
                  width: 60,
                  height: 60,
                }}
              >
                <GitHubIcon /> {/* Icono importado de material UI */}
              </Avatar>
            </Link>
            {/* ------------------------------- ENLACE LINKEDIN ------------------------------- */}
            <Link href={props.linkedin} target="_blank">
              {/* Mediante props se accede al enlace de LinkedIn de cada Miembro de javawizards*/}
              {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
              <Avatar
                sx={{
                  bgcolor: blue[500],
                  marginBottom: 2,
                  marginTop: 1,
                  width: 60,
                  height: 60,
                }}
              >
                <LinkedInIcon /> {/* Icono importado de material UI */}
              </Avatar>
            </Link>

            {/* ------------------------------- ENLACE CV ------------------------------- */}
            <Link href={props.cv} target="_blank">
              {" "}
              {/* Mediante props se accede al enlace del CV de cada Miembro de javawizards*/}
              {/* La etiqueta Avatar le da estilos a una imagen o icono, siendo esta principalmente el circular la imagen y además permitir que se agregue estilo mediante sx al mismo*/}
              <Avatar
                sx={{
                  bgcolor: green[500],
                  marginBottom: 2,
                  marginTop: 1,
                  width: 60,
                  height: 60,
                }}
              >
                <AssignmentIcon /> {/* Icono importado de material UI */}
              </Avatar>
            </Link>
          </Box>

          {/* ------------------------------- HEADLINE ------------------------------- */}
          <Typography
            className="lato" // Se le asigna la clase lato para modificar el estilo mediante CSS externo
            sx={{ mb: 1.5, fontSize: "1.25rem", marginBottom: 3 }}
          >
            {props.headline}{" "}
            {/* Mediante props se accede al valor de la propiedad headline de los objetos (Miembros de javawizards) */}
          </Typography>

          {/* ------------------------------- ABOUTME  ------------------------------- */}
          <Divider>
            <Chip className="lato" label="ABOUT ME" color="warning" />
          </Divider>
          {/* Mediante props se accede al valor de la propiedad aboutme de los objetos (Miembros de javawizards) */}
          <Typography
            className="lato" // Se le asigna la clase lato para modificar el estilo mediante CSS externo
            sx={{
              mb: 1.5,
              marginTop: 1,
              marginBottom: 3,
              textAlign: "justify",
            }}
          >
            {props.aboutMe}
          </Typography>
        </Box>

        {/* ------------------------------- TECHNICAL Y SOFT SKILLS  ------------------------------- */}
        {/* ------------------------------- TECHNICAL SKILLS BACKEND ------------------------------- */}
        <Box id="skills" container sx={{ marginTop: 2 }}>
          
          {/* El parametro container indica que Grid es un elemento padre que contiene elementos hijos (Grid con el parametro item), lo que permite controlar su disposición y estilo.  */}
          <Grid container id="techSkills" xs={12}>
         
            {/* El parametro item indica que Grid es un elemento hijo por lo que será afectado por la disposición y el estilo del componente padre. En Grid con parametro item también se agrega el tamaño de columnas*/}
            <Grid item xs={12}>
              {/* Divider es un componente que sirve para separar elementos mediante una linea.*/}
              <Divider>
                {/* Chip es un componente que representa una etiqueta. Muestra información compacta. */}
                <Chip
                  className="lato"
                  label="TECHNICAL SKILLS"
                  color="primary"
                />
              </Divider>
            </Grid>
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
                item
                xs={5}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Mediante props se accede al valor de la propiedad oneTooltip y one del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.oneTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.one}
                      alt={props.techSkills.oneTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad twoTooltip y two del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.twoTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.two}
                      alt={props.techSkills.twoTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad threeTooltip y three del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.threeTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.three}
                      alt={props.techSkills.threeTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad fourTooltip y four del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.fourTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.four}
                      alt={props.techSkills.fourTooltip}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
              {/* ------------------------------- TECHNICAL SKILLS FRONTEND ------------------------------- */}

              <Grid
                container /* El parametro container indica que Grid es un elemento padre que contiene elementos hijos (Grid con el parametro item), lo que permite controlar su disposición y estilo.  */
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginLeft: 2,
                  marginRight: 2,
                }}
              >
                {/* El parametro item indica que Grid es un elemento hijo por lo que será afectado por la disposición y el estilo del componente padre. En Grid con parametro item también se agrega el tamaño de columnas*/}
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Mediante props se accede al valor de la propiedad fiveTooltip y five del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip title={props.techSkills.fiveTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.five}
                      alt={props.techSkills.fiveTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad sixTooltip y six del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.sixTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.six}
                      alt={props.techSkills.sixTooltip}
                    />
                  </Tooltip>
                </Grid>
              </Grid>

              {/* ------------------------------- TECHNICAL SKILLS OTHERS ------------------------------- */}

              <Grid
                container
                xs={5}
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Mediante props se accede al valor de la propiedad sevenTooltip y seven del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.sevenTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.seven}
                      alt={props.techSkills.sevenTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad eightTooltip y eight del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.eightTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.eight}
                      alt={props.techSkills.eightTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad nineTooltip y nine del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.nineTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.nine}
                      alt={props.techSkills.nineTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad tenTooltip y ten del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.tenTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.ten}
                      alt={props.techSkills.tenTooltip}
                    />
                  </Tooltip>
                  {/* Mediante props se accede al valor de la propiedad elevenTooltip y eleven del objeto nested techSkills de los objetos (Miembros de javawizards) */}
                  <Tooltip arrow title={props.techSkills.elevenTooltip}>
                    <img
                      className="techSkillsImg"
                      src={props.techSkills.eleven}
                      alt={props.techSkills.elevenTooltip}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* ------------------------------- SOFT SKILLS  ------------------------------- */}
          <Grid container id="softSkills" xs={12}>
            <Grid item xs={12}>
              <Divider>
                <Chip className="lato" label="SOFT SKILLS" color="error" />
              </Divider>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                m: 1,
                flexWrap: "wrap",
              }}
            >
              {/* Mediante props se accede al valor de la propiedad oneTooltip y one del objeto nested softSkills de los objetos (Miembros de javawizards) */}
              <Tooltip arrow title={props.softSkills.oneTooltip}>
                <img
                  className="softSkillsImg"
                  src={props.softSkills.one}
                  alt={props.softSkills.oneTooltip}
                />
              </Tooltip>
              {/* Mediante props se accede al valor de la propiedad twoTooltip y two del objeto nested softSkills de los objetos (Miembros de javawizards) */}
              <Tooltip arrow title={props.softSkills.twoTooltip}>
                <img
                  className="softSkillsImg"
                  src={props.softSkills.two}
                  alt={props.softSkills.twoTooltip}
                />
              </Tooltip>
              {/* Mediante props se accede al valor de la propiedad threeTooltip y three del objeto nested softSkills de los objetos (Miembros de javawizards) */}
              <Tooltip arrow title={props.softSkills.threeTooltip}>
                <img
                  className="softSkillsImg"
                  src={props.softSkills.three}
                  alt={props.softSkills.threeTooltip}
                />
              </Tooltip>
              {/* Mediante props se accede al valor de la propiedad fourTooltip y four del objeto nested softSkills de los objetos (Miembros de javawizards) */}
              <Tooltip arrow title={props.softSkills.fourTooltip}>
                <img
                  className="softSkillsImg"
                  src={props.softSkills.four}
                  alt={props.softSkills.fourTooltip}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </React.Fragment>
  );
};

export default AboutUs;
