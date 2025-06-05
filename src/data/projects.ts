
export type Project = {
    title: string;
    logo: string;
    description: string;
    link: string;
    gitHub: string;
    visibility?: string;
    tags: string[];
  };


export const PROJECTS : Project[] = [

  {
    title: "Quinthecnology",
    logo: "🧩",
    description: "Diseño, desarrollo y despliege de aplicación web para Quinthecnology S.A.S.",
    link: "https://www.quintechnologysas.com/",
    gitHub: "https://github.com/aarturodev/",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Hostinger"],
  },

  {
    title: "Estación Meteorológica",
    logo: "🔌",
    description:
      "API RESTful para una estación metereologica, con datos extraidos desde una implementacion IoT ",
    link: "",
    gitHub: "https://github.com/aarturodev/API.git",
    tags: ["Express", "SQLServer", "node-red", "ESP32", "IoT"],
  },
  {
    title: "Finanzas Personales",
    logo: "📊",
    description:
      "Aplicacion web para el manejo de finanzas personales, con registro de ingresos y gastos, y metas de ahorro.",
    link: "",
    gitHub: "https://github.com/aarturodev/Sistema-Financiero.git",
    tags: ["laravel", "React", "MySQL", "Inertia", "TailwindCSS", "Vite"],
  },
  {
    title: "Analista de Datos",
    logo: "📈",
    description:
      "Portafoloio web para un analista de datos, con proyectos y habilidades destacadas.", 
    link: "https://github.com/aarturodev/lsofia.dev.git",
    gitHub: "",
    tags: ["Astro", "TailwindCSS"],
  },
  {
    title: "Car IoT",
    logo: "🚗",
  
    description:
      "Controlador de un vehículo con ESP32, por IoT, con dashboard de control y monitoreo.",
    link: "",
    gitHub: "https://github.com/aarturodev/Car-IoT.git",
    tags: ["ESP32", "IoT", "Node-RED", "C++", "protocolo MQTT", "Mosquitto"],
    },
    {
    title: "Survey App",
    logo: "📋",
    description:
      "API RESTful para la creación y gestión de encuestas en tiempo real usando WebSockets.",
    link: "",
    gitHub: "https://github.com/aarturodev/survey-project.git",
    tags: ["Node.js", "Express", "Socket.io", "MongoDB", "EJS", "TailwindCSS"],
  },

  
];

