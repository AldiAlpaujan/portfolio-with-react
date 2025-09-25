export enum ProjectType {
  MOBILE,
  WEB,
}

export interface ProjectModel {
  image: string;
  title: string;
  description: string;
  tech: string;
  projectType: ProjectType;
  canTouch: boolean;
  link: string;
}
