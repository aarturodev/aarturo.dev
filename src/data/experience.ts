export interface Experience {
    date: string;
    title: string;
    empresa: string;
    link: string;
    description: string;
}

export const EXPERIENCE : Experience[] = [
    {
      date: "Actualmente",
      title: "Full Stack Developer",
      empresa: "Movilidad Bogotá",
      link: "https://www.movilidadbogota.gov.co/web/",
      description:
        "Desarrollé una aplicación web para Movilidad Bogotá que optimiza la gestión de casos mediante la creación y actualización continua de los mismos. Utilicé Angular para construir una interfaz de usuario intuitiva y Node.js para el backend, asegurando una comunicación fluida entre ambos. Implementé autenticación basada en tokens y control de acceso basado en roles para garantizar la seguridad y confidencialidad de los datos. Además, diseñé un sistema de login seguro y habilité la generación y descarga de reportes detallados de cada caso, facilitando así el seguimiento y análisis de la información.",
    },
    {
      date: "Febrero 2024",
      title: "Full Stack Developer",
      empresa: "Foscan",
      link: "https://foscan.com/",
      description:
        "Desarrollé una aplicación web integral para Foscan, empresa del sector petrolero, gestionando tanto el front-end como el back-end. Utilicé Angular para crear una interfaz de usuario intuitiva y dinámica, mientras que utilizando Node.js implementé la lógica del servidor. Me especialicé en la visualización de datos a través de gráficos interactivos de barras y líneas, facilitando el análisis de información clave para la empresa. Además, integré una base de datos SQL Server en Azure a través de una API personalizada. Esta experiencia me permitió fortalecer mis habilidades técnicas, aportando soluciones innovadoras que contribuyeron directamente al éxito de Foscan.",
    },
  ];