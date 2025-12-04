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
      title: "Ingeniería de Sistemas y computación",
      empresa: "Universidad de Cundinamarca",
      link: "https://www.ucundinamarca.edu.co/images/ucundinamarca/escudo-color.png",

      description:
        "Estudiante de Ingeniería de Sistemas y computación en la Universidad de Cundinamarca, con énfasis en desarrollo de software y gestión de proyectos. Apasionado por la tecnología y la innovación, con habilidades en programación, bases de datos y desarrollo web. Comprometido con las mejores prácticas a lo largo del ciclo de vida del software para ofrecer soluciones eficientes adaptadas a las demandas del mercado.",
    },
    {
      date: "Mayo 2020",
      title: "Técnico en Desarrollo de Software",
      empresa: "SENA",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/1200px-Sena_Colombia_logo.svg.png",
      description:
        "Obtuve mi título de Técnico en Desarrollo de Software en el SENA, donde adquirí conocimientos en programación, diseño de bases de datos y desarrollo de aplicaciones web. Aprendí a utilizar tecnologías como HTML, CSS, JavaScript, PHP y MySQL, creando proyectos prácticos y funcionales que me permitieron fortalecer mis habilidades técnicas y mi capacidad para resolver problemas de manera eficiente.",
    },
  ];
