import Angular from '../components/icons/Angular.astro';
import AstroIcon from '../components/icons/AstroIcon.astro';
import Azure from '../components/icons/Azure.astro';
import C from '../components/icons/C.astro';
import Css from '../components/icons/Css.astro';
import Docker from '../components/icons/Docker.astro';
import Express from '../components/icons/Express.astro';
import FastApi from '../components/icons/FastApi.astro';
import Git from '../components/icons/Git.astro';
import GitHub from '../components/icons/GitHub.astro';
import Html from '../components/icons/Html.astro';
import Jwt from '../components/icons/Jwt.astro';
import Laravel from '../components/icons/Laravel.astro';
import Mongo from '../components/icons/Mongo.astro';
import Mysql from '../components/icons/Mysql.astro';
import Nestjs from '../components/icons/Nestjs.astro';
import Node from '../components/icons/Node.astro';
import Php from '../components/icons/Php.astro';
import Pm2 from '../components/icons/Pm2.astro';
import Postgres from '../components/icons/Postgres.astro';
import Python from '../components/icons/Python.astro';
import SqlServer from '../components/icons/SqlServer.astro';
import Supabase from '../components/icons/Supabase.astro';
import Swager from '../components/icons/Swager.astro';
import Tailwind from '../components/icons/Tailwind.astro';
import Typescript from '../components/icons/Typescript.astro';
import Unity from '../components/icons/Unity.astro';
import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Favoritos',
    items: [
      { name: 'TypeScript', icon: Typescript },
      { name: 'Angular', icon: Angular },
      { name: 'NodeJS', icon: Node },
      { name: 'NestJS', icon: Nestjs },
      { name: 'Python', icon: Python },
      { name: 'Docker', icon: Docker },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', icon: Html },
      { name: 'CSS', icon: Css },
      { name: 'TypeScript', icon: Typescript },
      { name: 'Angular', icon: Angular },
      { name: 'Astro', icon: AstroIcon },
      { name: 'Tailwind', icon: Tailwind },

    ],
  },
  {
    label: 'Backend',
    items: [


      { name: 'NestJS', icon: Nestjs },
      { name: 'FastAPI', icon: FastApi },
      { name: 'PostgreSQL', icon: Postgres },
      { name: 'Docker', icon: Docker },
      { name: 'Laravel', icon: Laravel },
      { name: 'SQL Server', icon: SqlServer },
      { name: 'JWT', icon: Jwt },
      { name: 'Swagger', icon: Swager },
      { name: 'MongoDB', icon: Mongo },
      { name: 'MySQL', icon: Mysql },
      { name: 'NodeJS', icon: Node },
      { name: 'SQL Server', icon: SqlServer },

      { name: 'PHP', icon: Php },
      { name: 'Python', icon: Python },
      { name: 'Express', icon: Express },
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { name: 'Git', icon: Git },
      { name: 'GitHub', icon: GitHub },
      { name: 'PM2', icon: Pm2 },
      { name: 'Azure', icon: Azure },
      { name: 'Supabase', icon: Supabase },
      { name: 'C++', icon: C },
      { name: 'Unity', icon: Unity },
      { name: 'C++', icon: C },
    ],
  },
];
