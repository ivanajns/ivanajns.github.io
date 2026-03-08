import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Cloud Analytics",
    description: "The Project Tracker Power BI Dashboard automates the process of generating a real-time report that consolidates key project metrics for the project management team. Previously, this data was spread across multiple tools and updated manually, leading to inefficiencies and potential errors. Power BI ensures accurate and timely insights, allowing the team to monitor project status, budgets, deadlines, and priorities effectively. A Power Automate flow kicks off a dashboard refresh whenever changes occur in the centralized SharePoint list, ensuring that the dashboard always reflects the most current project data.",
    image: "/img/portfolio/mpowerbi.png",
    tags: ["Power BI", "Power BI Desktop"],
    featured: true
  },
  {
    id: 2,
    title: "End-to-End Reporting Automation",
    description: "The Project Management Power App automates the project intake, management, and review process for the projects teams. It replaces manual processes and disconnected tools with a unified solution that features a refresh of the Power BI dashboard upon data changes, notifications to stakeholders when a project is updated or approved, and a built-in Copilot Virtual Agent for users to get instant answers. This enhances accuracy, timeliness, and communication, significantly improving project management efficiency.",
    image: "/img/portfolio/mpapp.png",
    tags: ["Power Apps", "Power Automate", "SharePoint", "Copilot Virtual Agent"],
    featured: true
  },
  {
    id: 3,
    title: "Executive Presentation",
    descriptionLabel: "About This Presentation",
    description: "Presented to the Accounting Division's VP and CFO at the Tech Innovation Forum (January 2025). I demonstrated an automation solution I developed to streamline a finance workflow, quantified its operational impact, and outlined the approach used to identify high-value automation opportunities within accounting processes.",
    results: "Equipped leadership with a clear view of the ROI and operational benefits of targeted automation, and introduced a practical approach for evaluating and prioritizing future finance process improvements.",
    image: "/img/portfolio/presentation.png",
    tags: ["Finance Process Optimization", "Operational Efficiency", "ROI Analysis", "Cross-Functional Communication"],
    featured: true
  }
];
