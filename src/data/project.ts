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
    title: "Strategic Automation Example",
    description: "I delivered a presentation at the Tech Innovation Forum for the broader accounting division in January 2025, targeting leadership, including the department VP and CFO. The session showcased an ideal Robotic Process Automation (RPA) solution designed to enhance the efficiency and reliability of a key business process. More broadly, it demonstrates a practical framework for identifying and modernizing other finance processes in a way that strengthens controls while increasing efficiency. This work provided leadership with a tangible example of the ROI that a disciplined automation can deliver when it is aligned to business priorities.",
    image: "/img/portfolio/presentation.png",
    tags: ["RPA", "Process Automation", "Strategic Planning"],
    featured: true
  }
];
