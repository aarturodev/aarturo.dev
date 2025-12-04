export type Project = {
  title: string;
  logo: string;
  description: string;
  link: string;
  gitHub: string;
  visibility?: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'PulsePay',
    logo: '💳',
    description:
      'Pasarela de pagos con onboarding KYC, panel de comercio y webhooks para notificaciones en tiempo real.',
    link: 'https://pulsepay.app/demo',
    gitHub: 'https://github.com/aarturodev/pulsepay',
    visibility: 'private',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'Stripe', 'TailwindCSS'],
  },
  {
    title: 'Quintechnology',
    logo: '🧩',
    description:
      'Sitio web corporativo para Quintechnology con página de servicios, blog y panel de contenido optimizado para SEO.',
    link: 'https://www.quintechnologysas.com/',
    gitHub: 'https://github.com/aarturodev/',
    visibility: 'private',
    tags: ['Astro', 'TailwindCSS', 'SEO', 'Vercel'],
  },
  {
    title: 'Atlas Analytics',
    logo: '📈',
    description:
      'Dashboard de métricas multi-tenant con ETL ligero, reportes PDF y alertas configurables.',
    link: 'https://atlas-analytics.app',
    gitHub: 'https://github.com/aarturodev/atlas-analytics',
    visibility: 'private',
    tags: ['Astro', 'React', 'Supabase', 'Prisma', 'Vercel'],
  },
  {
    title: 'Nómada',
    logo: '🧭',
    description:
      'App para nómadas digitales con mapas offline, recomendaciones locales y espacio de comunidad.',
    link: '',
    gitHub: 'https://github.com/aarturodev/nomada-app',
    visibility: 'private',
    tags: ['Angular', 'Capacitor', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Sfera Docs',
    logo: '🗂️',
    description:
      'Sistema de gestión documental con versionado, firmas y búsqueda semántica.',
    link: '',
    gitHub: 'https://github.com/aarturodev/sfera-docs',
    visibility: 'private',
    tags: ['Express', 'TypeScript', 'Azure Blob', 'JWT', 'Swagger'],
  },
  {
    title: 'GrowShop',
    logo: '🛒',
    description:
      'Ecommerce headless con catálogo inteligente, checkout optimizado y panel de inventario.',
    link: 'https://growshop.dev',
    gitHub: 'https://github.com/aarturodev/growshop',
    visibility: 'private',
    tags: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'IoT Fleet',
    logo: '🚚',
    description:
      'Monitoreo de flotas IoT con MQTT, dashboards en vivo y alertas de mantenimiento.',
    link: '',
    gitHub: 'https://github.com/aarturodev/iot-fleet',
    visibility: 'private',
    tags: ['ESP32', 'MQTT', 'NestJS', 'TimescaleDB', 'WebSockets'],
  },
];
