export interface Project {
  id: number;
  title: string;
  descriptionLabel?: string; // Overrides "About This Project" heading in modal
  description: string;
  details?: string;           // Extended content shown only in the modal
  results?: string;           // Prose results text — replaces tags pills when present
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
