export interface Experience {
    date: string;
    title: string;
    empresa: string;
    link: string;
    description: string;
}

export const EXPERIENCE: Experience[] = [
  {
    date: '2025 · Freelance',
    title: 'Desarrollador Full Stack',
    empresa: 'Movilidad Bogotá',
    link: 'https://www.movilidadbogota.gov.co/web/',
    description:
      'Aplicación de gestión de casos con Angular y Node.js: autenticación JWT, control de roles y generación/descarga de reportes para seguimiento operativo.',
  },
  {
    date: '2025 · Freelance',
    title: 'Desarrollador Frontend',
    empresa: 'Quintechnology',
    link: 'https://aarturo.dev',
    description:
      'Portal corporativo paara Quintechnology usando Astro y TailwindCSS, con optimización SEO y tiempos de carga rápidos.',
  },
  {
    date: '2023 · Freelance',
    title: 'Frontend Developer',
    empresa: 'Pymes locales',
    link: '',
    description:
      'Sitios corporativos en Astro/Tailwind con contacto integrado y optimización de carga (imágenes, fonts, lighthouse 90+).',
  },
  {
    date: '2022 · Internship',
    title: 'Developer Intern',
    empresa: 'Innovatech Labs',
    link: '',
    description:
      'Panel de métricas interno: automatización de reportes y fixes en APIs Node/Express, mejorando tiempos de entrega del equipo.',
  },
];
