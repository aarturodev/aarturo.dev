export interface Experience {
    date: string;
    title: string;
    empresa: string;
    link: string;
    description: string;
}

export const EXPERIENCE : Experience[] = [
    {
      date: "Noviembre 2024",
      title: "Desarrollador Full Stack",
      empresa: "Movilidad Bogotá",
      link: "https://www.movilidadbogota.gov.co/web/",
      description:
        "Desarrollé una aplicación web para Movilidad Bogotá que optimiza la gestión de casos mediante la creación y actualización continua de los mismos. Utilicé Angular para construir una interfaz de usuario intuitiva y Node.js para el backend, asegurando una comunicación fluida entre ambos. Implementé autenticación basada en tokens y control de acceso basado en roles para garantizar la seguridad y confidencialidad de los datos. Además, diseñé un sistema de login seguro y habilité la generación y descarga de reportes detallados de cada caso, facilitando así el seguimiento y análisis de la información.",
    }
  ];
