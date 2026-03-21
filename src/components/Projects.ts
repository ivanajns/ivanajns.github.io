import type { Project } from "../types/project";
import project1Src from "../img/project-1.png";
import project2Src from "../img/project-2.png";
import project3Src from "../img/project-3.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Full-Stack Cloud Analytics Workflow",
    description: "I designed and implemented a full-stack analytics workflow that allows business users to submit operational data updates through a Power App interface while maintaining governance over reporting data.\nUser submissions trigger an automated workflow that routes requests for manager approval before a pipeline processes the changes to the Azure data tables and updates downstream analytics. I structured the system to separate user interaction, approval workflows, data processing, and analytics delivery, ensuring both usability for business teams and reliability for leadership reporting.",
    results: "Established a governed workflow for operational data updates, ensuring changes were approved before entering reporting systems and automatically reflected in leadership dashboards.\nAutomated the pipeline from request submission to dashboard refresh, improving data reliability while reducing manual coordination across teams.",
    image: project1Src.src,
    tags: ["Power Apps", "Dataverse", "Power Automate", "Power BI", "Microsoft Fabric Pipelines", "Azure Data Tables", "SQL"],
    featured: true
  },
  {
    id: 2,
    title: "End-to-End Automated Reporting Pipeline",
    description: "I developed an automated reporting pipeline to process ERP export files used for recurring accounting reports where direct system access was restricted.\nA Power Automate workflow detects new export files and triggers a Python pipeline that processes the data and stores it in SQL Server data tables to preserve historical records that would otherwise be overwritten. I designed the architecture to separate data ingestion, archival storage, and reporting preparation, allowing Power Query excel reports to refresh automatically as new data becomes available.",
    results: "Automated the ingestion and preparation of ERP export data, eliminating manual report preparation and ensuring consistent refresh of accounting reports.\nIntroduced centralized archival storage and automated transformations, preserving historical data while enabling faster and more reliable reporting.",
    image: project2Src.src,
    tags: ["Power Automate", "Python", "SQL Server Data Tables", "Power Query", "Excel Reporting"],
    featured: true
  },
  {
    id: 3,
    title: "Executive Business Value Presentation",
    descriptionLabel: "About This Presentation",
    description: "I presented to the Accounting Division's VP and CFO at my department's Tech Innovation Forum. I demonstrated an automation solution I developed to streamline a finance workflow, quantified its operational impact, and outlined the approach used to identify high-value automation opportunities within accounting processes.",
    results: "Equipped leadership with a clear view of the ROI and operational benefits of targeted automation, and introduced a practical approach for evaluating and prioritizing future finance process improvements.",
    image: project3Src.src,
    tags: ["Finance Process Optimization", "Operational Efficiency", "ROI Analysis", "Automation Strategy"],
    featured: true
  }
];
