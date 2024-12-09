export interface Education {
    date: string;
    title: string;
    empresa: string;
    link: string;
    description: string;

}

export const EDUCATION: Education[] = [
    {
      date: "Actualmente",
      title: "Ingeniería de Sistemas",
      empresa: "Universidad de Cundinamarca",
      link: "https://www.ucundinamarca.edu.co/",
      description:
        "Estudiante de Ingeniería de Sistemas en la Universidad de Cundinamarca, con énfasis en desarrollo de software y gestión de proyectos. Apasionado por la tecnología y la innovación, con habilidades en programación, bases de datos y desarrollo web. Comprometido con las mejores prácticas a lo largo del ciclo de vida del software para ofrecer soluciones eficientes adaptadas a las demandas del mercado.",
    },
    {
      date: "May 2020",
      title: "Técnico en Desarrollo de Software",
      empresa: "SENA",
      link: "https://oferta.senasofiaplus.edu.co/sofia-oferta/inicio-sofia-plus.html",
      description:
        "Obtuve mi título de Técnico en Desarrollo de Software en el SENA, donde adquirí conocimientos en programación, diseño de bases de datos y desarrollo de aplicaciones web. Aprendí a utilizar tecnologías como HTML, CSS, JavaScript, PHP y MySQL, creando proyectos prácticos y funcionales que me permitieron fortalecer mis habilidades técnicas y mi capacidad para resolver problemas de manera eficiente.",
    },
  ];