import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Tracker Dashboard",
    description: "The Project Tracker Power BI Dashboard automates the process of generating a real-time report that consolidates key project metrics for the project management team. Previously, this data was spread across multiple tools and updated manually, leading to inefficiencies and potential errors. Power BI ensures accurate and timely insights, allowing the team to monitor project status, budgets, deadlines, and priorities effectively. A Power Automate flow kicks off a dashboard refresh whenever changes occur in the centralized SharePoint list, ensuring that the dashboard always reflects the most current project data.",
    image: "/img/portfolio/mpowerbi.png",
    tags: ["Power BI", "Power BI Desktop"],
    featured: true
  },
  {
    id: 2,
    title: "Project Management Power App",
    description: "The Project Management Power App automates the project intake, management, and review process for the projects teams. It replaces manual processes and disconnected tools with a unified solution that features a refresh of the Power BI dashboard upon data changes, notifications to stakeholders when a project is updated or approved, and a built-in Copilot Virtual Agent for users to get instant answers. This enhances accuracy, timeliness, and communication, significantly improving project management efficiency.",
    image: "/img/portfolio/mpapp.png",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Copilot Virtual Agent"],
    featured: true
  },
  {
    id: 3,
    title: "Executive Presentations",
    descriptionLabel: "About This Presentation",
    description: "Presented to the accounting division's VP and CFO at the Tech Innovation Forum, January 2025. Showcased a practical RPA framework for identifying and modernizing finance processes for efficiency gains and strengthened controls.",
    results: "Gave leadership a concrete ROI model for disciplined automation aligned to business priorities, and established a replicable framework for evaluating future finance process modernization opportunities.",
    image: "/img/portfolio/presentation.png",
    tags: [],
    featured: true
  }
];
