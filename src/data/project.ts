import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Cloud Analytics",
    description: "I designed and implemented a full-stack analytics workflow that allows business users to submit operational data updates through a Power App interface while maintaining governance over reporting data.\nUser submissions trigger an automated workflow that routes requests for manager approval before a pipeline processes the changes and updates downstream analytics. I structured the system to separate user interaction, approval workflows, data processing, and analytics delivery, ensuring both usability for business teams and reliability for leadership reporting.",
    image: "/img/portfolio/mpowerbi.png",
    tags: ["Power Apps", "Power Automate", "Microsoft Fabric Pipelines", "Azure Data Tables", "Power BI"],
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
