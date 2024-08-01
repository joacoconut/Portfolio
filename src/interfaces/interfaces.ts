
export interface DescriptionProjectsProps {
  id: string;
  desc: string;
  url: string;
  title: string;
  tags: validateTypes[];
}

export interface IDescriptionHome {
  id: string;
  desc: string;
  url: string;
  title: string;
  github:string;
  tags: validateTypes[];
}


export type validateTypes =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "TypeScript"
  | "PHP"
  | "API"
  | "React"
  | "SASS"
  | "Node"
  | "TailwindCSS"
  | "Redux"
  | "NextJS"
  | 'Jotai'