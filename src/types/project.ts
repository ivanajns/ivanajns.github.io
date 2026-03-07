export interface Project {
  id: number;
  title: string;
  description: string;
  details?: string;       // Extended content shown only in the modal
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
