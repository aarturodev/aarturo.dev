export type SkillItem = {
  name: string;
  icon?: any;
};

export type SkillCategory = {
  label: string;
  items: SkillItem[];
};

export type Project = {
  title: string;
  logo: string;
  description: string;
  link: string;
  gitHub: string;
  visibility?: string;
  tags: string[];
};

export type Course = {
  title: string;
  logo?: string;
  description: string;
  link: string;
  gitHub: string;
  visibility?: string;
  tags: string[];
};

export type Experience = {
  date: string;
  title: string;
  empresa: string;
  link: string;
  description: string;
};

export type Education = {
  date: string;
  title: string;
  empresa: string;
  link: string;
  description: string;
};
