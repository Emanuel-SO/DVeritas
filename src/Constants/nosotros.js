//TechIcons
import cssIcon from "../Components/Nosotros/img/techSIcons/cssIcon.png";
import javascriptIcon from "../Components/Nosotros/img/techSIcons/javascriptIcon.png";
import githubIcon from "../Components/Nosotros/img/techSIcons/gitHubIcon.png";
import htmlIcon from "../Components/Nosotros/img/techSIcons/htmlIcon.png";
import javaIcon from "../Components/Nosotros/img/techSIcons/javaIcon.png";
import mysqlIcon from "../Components/Nosotros/img/techSIcons/mysqlIcon.png";
import reactIcon from "../Components/Nosotros/img/techSIcons/reactIcon.svg";
import springBootIcon from "../Components/Nosotros/img/techSIcons/springBootIcon.svg";
import linuxIcon from "../Components/Nosotros/img/techSIcons/linuxIcon.png";
import delphiIcon from "../Components/Nosotros/img/techSIcons/delphiIcon.svg";
import oracle10gIcon from "../Components/Nosotros/img/techSIcons/oracle10gIcon.gif";
import unityIcon from "../Components/Nosotros/img/techSIcons/Unity3dIcon.png";
import fortinetIcon from "../Components/Nosotros/img/techSIcons/fortinetIcon.jpg";
import windowsServerIcon from "../Components/Nosotros/img/techSIcons/windowsServerIcon.png";
import pythonIcon from "../Components/Nosotros/img/techSIcons/pythonIcon.png";
import phpIcon from "../Components/Nosotros/img/techSIcons/phpIcon.png";
import laravelIcon from "../Components/Nosotros/img/techSIcons/laravelIcon.png";
import none from "../Components/Nosotros/img/techSIcons/none.png";

// SoftIcons
import detailOrientation from "../Components/Nosotros/img/softSIcons/atencionAlDetalle.png";
import communication from "../Components/Nosotros/img/softSIcons/comunicacion.png";
import growthMindset from "../Components/Nosotros/img/softSIcons/mentalidadDeCrecimiento.png";
import perseverance from "../Components/Nosotros/img/softSIcons/perseverancia.png";
import teamwork from "../Components/Nosotros/img/softSIcons/trabajoEnEquipo.png";
import problemResolution from "../Components/Nosotros/img/softSIcons/problemResolution.png";
import adaptability from "../Components/Nosotros/img/softSIcons/adaptability.png";
import collaboration from "../Components/Nosotros/img/softSIcons/collaboration.png";
import tolerancy from "../Components/Nosotros/img/softSIcons/tolerancy.png";
import patience from "../Components/Nosotros/img/softSIcons/patience.png";
import resilience from "../Components/Nosotros/img/softSIcons/resilience.png";
import versatility from "../Components/Nosotros/img/softSIcons/versatility.png";
import activeListening from "../Components/Nosotros/img/softSIcons/activeListening.png";
import criticalThinking from "../Components/Nosotros/img/softSIcons/criticalThinking.png";

// AvatarIcons
import hugo from "../Components/Nosotros/img/imgAvatars/hugo.jpeg";
import heber from "../Components/Nosotros/img/imgAvatars/heber.jpeg";
import emanuel from "../Components/Nosotros/img/imgAvatars/emanuel.jpeg";
import asgary from "../Components/Nosotros/img/imgAvatars/asgary.jpeg";
import aura from "../Components/Nosotros/img/imgAvatars/aura.jpeg";



// Cada objeto representa un miembro del equipo JavaWizards con la información que será exportada al componente Nosotros

/* Los objetos contienen "Nested Objects" u "Objetos anidados" que son objetos dentro de otros objetos. En este caso cada objeto (Es decir, cada miembro de Javawizards) contienen Nested Objects para la información de Tech Skills y Soft Skills. Esto con la finalidad de: 
  1. Hacer que el código sea más legible y fácil de entender.
  2. Reducir la duplicidad de los datos, considerando que tanto Tech Skills y Soft Skills contienen datos muy similares pero no iguales, evita conflicto entre estos dos datos.  
  3. Es más fácil de que a futuro sea escalable al tener datos estructurados. 

*/

/* ------------------------------- Aura Berenice Rodríguez Belmonte ------------------------------- */

const data = [
  {
    avatar: aura,
    name: "Aura Berenice Rodríguez Belmonte",
    gitHub: "https://github.com/Aura18R",
    linkedin: "https://www.linkedin.com/in/aura-rodriguez-3a64b6233/",
    cv: "",
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
    avatar: asgary,
    name: "Asgary Nieto Terrazas",
    gitHub: "https://github.com/asgarynt",
    linkedin: "https://www.linkedin.com/in/asgarynt/",
    cv: "",
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
    avatar: emanuel,
    name: "Emanuel Saucedo Olvera",
    gitHub: "https://github.com/LouckGuntz",
    linkedin: "https://www.linkedin.com/in/emanuel-saucedo-47a2ba23b/",
    cv: "",
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

    /* ------------------------------- Heber Sánchez Sánchez ------------------------------- */


  {
    avatar: heber,
    name: "Heber Sánchez Sánchez",
    gitHub: "https://github.com/HeberSanzS",
    linkedin: "https://www.linkedin.com/in/heber-sanchez-sanchez-24978724/",
    cv: "",
    headline: "Desarrollador Java Full Stack JR",
    aboutMe: "Una persona que explorar mas allá de sus limites y que opta por estar preparado lo mejor posible ante cualquier situación.",
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
      nine: delphiIcon,
      nineTooltip: "Delphi",
      ten: oracle10gIcon,
      tenTooltip: "Oracle 10g",
      eleven: unityIcon,
      elevenTooltip: "Unity3D",
    },
    softSkills: {
      one: tolerancy,
      oneTooltip: "Tolerancia",
      two: patience,
      twoTooltip: "Paciencia",
      three: resilience,
      threeTooltip: "Resiliencia",
      four: versatility,
      fourTooltip: "Versatilidad",
    },
  },

    /* ------------------------------- Hugo Antonio Morales Sánchez ------------------------------- */

  {
    avatar: hugo,
    name: "Hugo Antonio Morales Sánchez",
    gitHub: "https://github.com/HugoMorales98",
    linkedin: "https://www.linkedin.com/in/hugo-morales-0372201b9/",
    cv: "",
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
];

export default data;
