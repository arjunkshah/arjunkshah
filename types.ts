
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

export interface Metric {
  name: string;
  value: number;
}

export enum StyleMode {
  BRUTAL = 'BRUTAL',
  GLASS = 'GLASS',
  NEU = 'NEU',
  FUTURE = 'FUTURE'
}
