//TechIcons
import cssIcon from "../img/Nosotros/techSIcons/cssIcon.png";
import javascriptIcon from "../img/Nosotros/techSIcons/javascriptIcon.png";
import githubIcon from "../img/Nosotros/techSIcons/gitHubIcon.png";
import htmlIcon from "../img/Nosotros/techSIcons/htmlIcon.png";
import javaIcon from "../img/Nosotros/techSIcons/javaIcon.png";
import mysqlIcon from "../img/Nosotros/techSIcons/mysqlIcon.png";
import reactIcon from "../img/Nosotros/techSIcons/reactIcon.svg";
import springBootIcon from "../img/Nosotros/techSIcons/springBootIcon.svg";
import linuxIcon from "../img/Nosotros/techSIcons/linuxIcon.png";
import fortinetIcon from "../img/Nosotros/techSIcons/fortinetIcon.jpg";
import windowsServerIcon from "../img/Nosotros/techSIcons/windowsServerIcon.png";
import pythonIcon from "../img/Nosotros/techSIcons/pythonIcon.png";
import phpIcon from "../img/Nosotros/techSIcons/phpIcon.png";
import laravelIcon from "../img/Nosotros/techSIcons/laravelIcon.png";
import sassIcon from "../img/Nosotros/techSIcons/sassIcon.png";
import firebaseIcon from "../img/Nosotros/techSIcons/firebaseIcon.png";

// SoftIcons
import detailOrientation from "../img/Nosotros/softSIcons/atencionAlDetalle.png";
import communication from "../img/Nosotros/softSIcons/comunicacion.png";
import growthMindset from "../img/Nosotros/softSIcons/mentalidadDeCrecimiento.png";
import perseverance from "../img/Nosotros/softSIcons/perseverancia.png";
import teamwork from "../img/Nosotros/softSIcons/trabajoEnEquipo.png";
import problemResolution from "../img/Nosotros/softSIcons/problemResolution.png";
import adaptability from "../img/Nosotros/softSIcons/adaptability.png";
import collaboration from "../img/Nosotros/softSIcons/collaboration.png";
import activeListening from "../img/Nosotros/softSIcons/activeListening.png";
import criticalThinking from "../img/Nosotros/softSIcons/criticalThinking.png";
import autodidact from "../img/Nosotros/softSIcons/autodidact.png";
import creativeThinking from "../img/Nosotros/softSIcons/creativeThinking.png";
import proactive from "../img/Nosotros/softSIcons/proactive.png";


// AvatarIcons
import hugo from "../img/Nosotros/imgAvatars/hugo.jpeg";
import emanuel from "../img/Nosotros/imgAvatars/emanuel.jpeg";
import asgary from "../img/Nosotros/imgAvatars/asgary.jpeg";
import aura from "../img/Nosotros/imgAvatars/aura.jpeg";
import kevin from "../img/Nosotros/imgAvatars/kevin.jpeg";

//CV
import hugocv from "../pdf/cv/hugocv.pdf";
import emanuelcv from "../pdf/cv/emanuelcv.pdf";
import asgarycv from "../pdf/cv/asgarycv.pdf";
import auracv from "../pdf/cv/auracv.pdf";
import kevincv from "../pdf/cv/kevincv.pdf";



// Cada objeto representa un miembro del equipo JavaWizards con la información que será exportada al componente Nosotros

/* Los objetos contienen "Nested Objects" u "Objetos anidados" que son objetos dentro de otros objetos. En este caso cada objeto (Es decir, cada miembro de Javawizards) contienen Nested Objects para la información de Tech Skills y Soft Skills. Esto con la finalidad de: 
  1. Hacer que el código sea más legible y fácil de entender.
  2. Reducir la duplicidad de los datos, considerando que tanto Tech Skills y Soft Skills contienen datos muy similares pero no iguales, evita conflicto entre estos dos datos.  
  3. Es más fácil de que a futuro sea escalable al tener datos estructurados. 

*/

/* ------------------------------- Aura Berenice Rodríguez Belmonte ------------------------------- */

const data = [
  {
    id:1,
    avatar: aura,
    name: "Aura Berenice Rodríguez Belmonte",
    gitHub: "https://github.com/Aura18R",
    linkedin: "https://www.linkedin.com/in/aura-rodriguez-3a64b6233/",
    cv: auracv,
    headline: "Desarrolladora Java Full Stack JR",
    aboutMe: "Siempre me he sentido interesada por la programación, el mundo de los datos y los resultados que obtenemos cuando los  combinamos,  actualmente aprendiendo desarrollo full-stack  y lista para nuevos retos.",
    techSkills: {
      one: htmlIcon,
      oneTooltip: "HTML",
      two: cssIcon,
      twoTooltip: "CSS",
      three: javascriptIcon,
      threeTooltip: "JavaScript",
      four: reactIcon,
      fourTooltip: "React",
      five: javaIcon,
      fiveTooltip: "Java",
      six: springBootIcon,
      sixTooltip: "SpringBoot",
      seven: mysqlIcon,
      sevenTooltip: "MySQL",
      eight: githubIcon,
      eightTooltip: "GitHub",
      nine: pythonIcon,
      nineTooltip: "Python",
      ten: null,
      tenTooltip: null,
      eleven: null,
      elevenTooltip: null,
    },
    softSkills: {
      one: problemResolution,
      oneTooltip: "Resolución de Problemas",
      two: activeListening,
      twoTooltip: "Escucha Activa",
      three: communication,
      threeTooltip: "Comunicación",
      four: teamwork,
      fourTooltip: "Trabajo en Equipo",
    },
  },

  /* ------------------------------- Asgary Nieto Terrazas ------------------------------- */

  {
    id:2,
    avatar: asgary,
    name: "Asgary Nieto Terrazas",
    gitHub: "https://github.com/asgarynt",
    linkedin: "https://www.linkedin.com/in/asgarynt/",
    cv: asgarycv,
    headline: "Desarrollador Java Full Stack JR",
    aboutMe: "Me apasiona la tecnología, su capacidad para innovar y resolver problemas, estoy convencido de que puedo contribuir significativamente al desarrollo de proyectos y soluciones tecnológicas.",
    techSkills: {
      one: htmlIcon,
      oneTooltip: "HTML",
      two: cssIcon,
      twoTooltip: "CSS",
      three: javascriptIcon,
      threeTooltip: "JavaScript",
      four: reactIcon,
      fourTooltip: "React",
      five: javaIcon,
      fiveTooltip: "Java",
      six: springBootIcon,
      sixTooltip: "SpringBoot",
      seven: mysqlIcon,
      sevenTooltip: "MySQL",
      eight: githubIcon,
      eightTooltip: "GitHub",
      nine: null,
      nineTooltip: null,
      ten: null,
      tenTooltip: null,
      eleven: null,
      elevenTooltip: null,
    },
    softSkills: {
      one: growthMindset,
      oneTooltip: "Mentalidad de Crecimiento",
      two: perseverance,
      twoTooltip: "Perseverancia",
      three: detailOrientation,
      threeTooltip: "Orientación al Detalle",
      four: teamwork,
      fourTooltip: "Trabajo en Equipo",
    },
  },

    /* ------------------------------- Emanuel Saucedo Olvera ------------------------------- */

  {
    id:3,
    avatar: emanuel,
    name: "Emanuel Saucedo Olvera",
    gitHub: "https://github.com/LouckGuntz",
    linkedin: "https://www.linkedin.com/in/emanuel-saucedo-47a2ba23b/",
    cv: emanuelcv,
    headline: "Desarrollador Java Full Stack JR",
    aboutMe: "La tecnologia simpre ha sido algo importante en mi vida y actualmente me estoy preparando como desarrollador FullStack Java.",
    techSkills: {
      one: htmlIcon,
      oneTooltip: "HTML",
      two: cssIcon,
      twoTooltip: "CSS",
      three: javascriptIcon,
      threeTooltip: "JavaScript",
      four: reactIcon,
      fourTooltip: "React",
      five: javaIcon,
      fiveTooltip: "Java",
      six: springBootIcon,
      sixTooltip: "SpringBoot",
      seven: mysqlIcon,
      sevenTooltip: "MySQL",
      eight: githubIcon,
      eightTooltip: "GitHub",
      nine: phpIcon,
      nineTooltip: "PHP",
      ten: laravelIcon,
      tenTooltip: "Laravel",
      eleven: null,
      elevenTooltip: null
    },
    softSkills: {
      one: problemResolution,
      oneTooltip: "Resolución de Problemas",
      two: teamwork,
      twoTooltip: "Trabajo en Equipo",
      three: criticalThinking,
      threeTooltip: "Pensamiento Crítico",
      four: adaptability,
      fourTooltip: "Adaptabilidad",
    },
  },

  

    /* ------------------------------- Hugo Antonio Morales Sánchez ------------------------------- */

  {
    id:4,
    avatar: hugo,
    name: "Hugo Antonio Morales Sánchez",
    gitHub: "https://github.com/HugoMorales98",
    linkedin: "https://www.linkedin.com/in/hugo-morales-0372201b9/",
    cv: hugocv,
    headline: "Desarrollador Java Full Stack JR",
    aboutMe: "Ingeniero en Sistemas. Soy una persona que disfruta de leer y estar al tanto de los avances en tecnología. Esta pasión por aprender nuevas cosas no solo me mantiene entretenido, sino que también me ha permitido desarrollar habilidades en el campo tecnológico.",
    techSkills: {
      one: htmlIcon,
      oneTooltip: "HTML",
      two: cssIcon,
      twoTooltip: "CSS",
      three: javascriptIcon,
      threeTooltip: "JavaScript",
      four: reactIcon,
      fourTooltip: "React",
      five: javaIcon,
      fiveTooltip: "Java",
      six: springBootIcon,
      sixTooltip: "SpringBoot",
      seven: mysqlIcon,
      sevenTooltip: "MySQL",
      eight: githubIcon,
      eightTooltip: "GitHub",
      nine: linuxIcon,
      nineTooltip: "Linux",
      ten: windowsServerIcon,
      tenTooltip: "Windows Server",
      eleven: fortinetIcon,
      elevenTooltip: "Fortinet",
    },
    softSkills: {
      one: communication,
      oneTooltip: "Comunicación",
      two: collaboration,
      twoTooltip: "Colaboración",
      three: adaptability,
      threeTooltip: "Adaptabilidad",
      four: problemResolution,
      fourTooltip: "Resolución de Problemas",
    },
  },

    /* ------------------------------- Kevin Miguel	Cerón Escalante  ------------------------------- */

  {
    id:5,
    avatar: kevin,
    name: "Kevin Miguel	Cerón Escalante",
    gitHub: "https://github.com/kevcesca",
    linkedin: "https://www.linkedin.com/in/kevinceresc/",
    cv: kevincv,
    headline: "Desarrollador Java Full Stack JR",
    aboutMe: "Amante de la programación y los videojuegos, recientemente comencé mi camino ninja por el lado del back-end. De momento considero que mi punto fuerte es el diseñar y maquetar interfaces graficas para el usuario.",
    techSkills: {
      one: htmlIcon,
      oneTooltip: "HTML",
      two: cssIcon,
      twoTooltip: "CSS",
      three: javascriptIcon,
      threeTooltip: "JavaScript",
      four: reactIcon,
      fourTooltip: "React",
      five: javaIcon,
      fiveTooltip: "Java",
      six: springBootIcon,
      sixTooltip: "SpringBoot",
      seven: mysqlIcon,
      sevenTooltip: "MySQL",
      eight: githubIcon,
      eightTooltip: "GitHub",
      nine: sassIcon,
      nineTooltip: "SASS",
      ten: firebaseIcon,
      tenTooltip: "FireBase",
      eleven: null,
      elevenTooltip: null,
    },
    softSkills: {
      one: teamwork,
      oneTooltip: "Trabajo en Equipo",
      two: autodidact,
      twoTooltip: "Autodidacta",
      three: proactive,
      threeTooltip: "Proactivo",
      four: creativeThinking,
      fourTooltip: "Pensamiento Creativo",
    },
  },


];

export default data;


