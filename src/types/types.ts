export type ProjectType = {
  id: string;
  title: string;
  project: string;
  duration: string;
  role: string[];
  summary: string;
  description: string;
  skills: string[];
  github: string;
  pageLink: string;
};

export type SkillType = {
  skillName: string;
  skillLogo: string;
  skillType?: string;
};
