export type Course = {
    title: string;
    logo: string;
    description: string;
    link: string;
    gitHub: string;
    visibility?: string;
    tags: string[];
  };

export const COURSES: Course[] = [
  {
    title: "React Avanzado",
    logo: "📚",
    description:
      "Componentes funcionales, hooks personalizados, manejo de estado y arquitectura moderna en React.",
    link: "https://platzi.com/cursos/react-avanzado/",
    gitHub: "",
    tags: ["React", "Frontend", "UI/UX"],
  },
  {
    title: "Angular Avanzado",
    logo: "📚",
    description:
      "Desarrollo profesional con Angular, usando componentes reusables, rutas, SSR y signals.",
    link: "https://platzi.com/cursos/angular-avanzado/",
    gitHub: "",
    tags: ["Angular", "Frontend", "SPA"],
  },
  {
    title: "Node.js Avanzado",
    logo: "📚",
    description:
      "APIs modernas con Node.js, Express, JWT, async/await, middlewares y manejo de errores.",
    link: "https://platzi.com/cursos/nodejs-avanzado/",
    gitHub: "",
    tags: ["Node.js", "Backend", "APIs"],
  },
  {
    title: "TypeScript Profesional",
    logo: "📚",
    description:
      "Uso profesional de TypeScript: tipos avanzados, clases, genéricos, POO y asincronismo.",
    link: "https://platzi.com/cursos/typescript-tipos-avanzados/",
    gitHub: "",
    tags: ["TypeScript", "Typed JS", "Robustez"],
  },
  {
    title: "Fundamentos de Azure (AZ-900)",
    logo: "📚",
    description:
      "Servicios de Azure, despliegue, storage, VMs, seguridad y preparación para certificación.",
    link: "https://platzi.com/cursos/az-900/",
    gitHub: "",
    tags: ["Azure", "Cloud", "DevOps"],
  },
  {
    title: "Bases de Datos SQL",
    logo: "📚",
    description:
      "Diseño relacional, consultas avanzadas, normalización y uso profesional de SQL.",
    link: "https://platzi.com/cursos/dbsql/",
    gitHub: "",
    tags: ["SQL", "Relacional", "Modelado"],
  },
  {
    title: "Curso de Laravel",
    logo: "📚",
    description:
      "Desarrollo web con Laravel, rutas, controladores, Eloquent, migraciones y seguridad.",
    link: "https://platzi.com/cursos/laravel/",
    gitHub: "",
    tags: ["Laravel", "PHP", "Backend"],
  },
  {
    title: "Inteligencia Artificial Aplicada",
    logo: "📚",
    description:
      "Aplicaciones prácticas de IA en desarrollo de software y herramientas con OpenAI.",
    link: "https://platzi.com/cursos/introduccion-ai/",
    gitHub: "",
    tags: ["IA", "Machine Learning", "OpenAI"],
  }
];
