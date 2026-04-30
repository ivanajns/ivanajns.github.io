import type { Project } from "../types/project";
import project1Src from "../img/project-1.png";
import project2Src from "../img/project-2.png";
import project3Src from "../img/project-3.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Analytics Engineering Github",
    description: "",
    results: "",
    image: project3Src.src,
    tags: ["dbt", "Snowflake", "Data Modeling", "Kimball", "SQL", "Data Warehouse", "Transformation Layer", "ELT"],
    featured: true
  },
  {
    id: 2,
    title: "Snowflake Migration & Data Impact Agent",
    description: "I supported the migration of 50+ Power BI and Power Platform solutions from SQL Server to Snowflake across accounting and ERP workflows. During the transition, I refactored SQL logic, rebuilt data connections, and helped resolve an authentication issue that would have broken unattended automations in the new environment. To reduce downstream risk, I also designed a dependency-aware data impact analysis agent in Copilot Studio that helps users understand how tables, reports, and workflows are connected.",
    results: "Helped preserve reporting and automation continuity during a high-impact platform migration while improving visibility into upstream and downstream dependencies. The project also exposed how much business logic was duplicated across reporting and workflow tools, which led me to begin building reusable Snowflake views to centralize transformation logic and reduce future migration risk.",
    image: project2Src.src,
    tags: ["Snowflake", "Copilot Studio AI Agent", "Data Migration", "SQL Refactoring", "Data Lineage", "Impact Analysis"],
    featured: true
  },
  {
    id: 3,
    title: "End-to-end Cloud Finance Analytics Dashboard",
    description: "I designed and implemented a full-stack analytics workflow that processes excel SAP ERP exports for recurring accounting reports where direct system access was restricted. A Power Automate workflow detects new export files and triggers a Python pipeline that processes the data and stores it in Azure SQL data tables to preserve historical records that would otherwise be overwritten. A Fabric dataflow then standardizes ingestion and transformation into analytics-ready datasets for dashboards and excel reporting. I designed the architecture to separate data ingestion, archival storage, and reporting preparation, allowing Power BI to refresh automatically as new data becomes available.",
    results: "Automated the ingestion and preparation of SAP ERP export data, eliminating manual report preparation and ensuring consistent refresh of accounting reports. Introduced centralized archival storage and automated transformations, preserving historical data while enabling faster and more reliable reporting.",
    image: project1Src.src,
    tags: ["Power Platform", "Python", "Azure SQL Data Tables", "Microsoft Fabric Pipelines", "Power Query", "Power BI"],
    featured: true
  }
];
