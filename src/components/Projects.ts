import type { Project } from "../types/project";
import project1Src from "../img/project-1.png";
import project2Src from "../img/project-2.png";
import project3Src from "../img/project-3.png";
import strategic2Src from "../img/strategic-2.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Analytics Engineering Github",
    description: "",
    results: "",
    image: project3Src.src,
    tags: ["dbt", "Snowflake Views", "Dimensional Modeling", "Kimball", "SQL", "Data Warehouse", "Transformation Layer", "ELT"],
    featured: true
  },
  {
    id: 2,
    title: "Snowflake Migration & Data Impact Agent",
    description: "I supported a large scale migration of 50+ Power BI and Power Platform solutions from SQL Server to Snowflake across business critical accounting and ERP workflows. During the transition, I refactored SQL logic, rebuilt data connections, and helped resolve authentication and SSO-related issues that would have broken unattended automations in the new environment. To reduce production risk during and after migration, I also designed a dependency-aware data impact analysis agent in Copilot Studio to map relationships between datasets, reports, and downstream automation flows, improving visibility into how changes to upstream tables would affect business processes.",
    results: "Helped preserve reporting and automation continuity during a high-impact platform migration while improving visibility into upstream and downstream dependencies. The project also exposed how much business logic was duplicated across Power BI reports and automation workflows, which led me consolidating the transformation logic into reusable Snowflake views and establishing a more centralized, maintainable semantic layer for future development.",
    image: project2Src.src,
    tags: ["Snowflake", "Copilot Studio AI Agent", "Data Migration", "SQL Refactoring", "Data Lineage", "Impact Analysis"],
    featured: true
  },
  {
    id: 3,
    title: "End-to-end Cloud Finance Analytics Dashboard",
    description: "I designed and implemented a full-stack analytics workflow that processes excel SAP ERP exports for recurring accounting reports where direct system access was restricted. A Fabric Pipeline triggers a Python notebook that processes the data and stores it in Azure SQL data tables to preserve historical records that would otherwise be overwritten. A Dataflow power query then standardizes ingestion and transformation into analytics-ready datasets for dashboards and excel reporting. I designed the architecture to separate data ingestion, archival storage, and reporting preparation, allowing Power BI to refresh automatically as new data becomes available.",
    results: "Automated the ingestion and preparation of SAP ERP export data, eliminating manual report preparation and ensuring consistent refresh of accounting reports. Introduced centralized archival storage and automated transformations, preserving historical data while enabling faster and more reliable reporting.",
    image: project1Src.src,
    tags: ["Microsoft Fabric Pipeline", "Python Notebook", "Azure SQL Data Table", "Dataflow Power Query", "Power BI"],
    featured: true
  },
  {
    id: 4,
    title: "From Silos to Systems: A Transformation Maturity Curve",
    description: "Transformation maturity in real enterprise environments is rarely linear. It is usually a sequence of partial fixes that only become transformational when the underlying infrastructure is finally consolidated.",
    details: "Stage 1: Tool-Centric Output — transformation logic lives where work gets delivered: dashboards, local SQL, spreadsheets, scripts, and workflow tools. The organization is productive, but not cumulative. Stage 2: Coordinated Fragmentation — teams begin producing at scale, but shared standards lag behind delivery, and coordination increasingly depends on tribal knowledge. Stage 3: Platform Consolidation — a more unified data platform is introduced, but logic remains distributed, so operational fragility persists beneath the new architecture. Stage 4: Shared Transformation Layer — repeatable business logic moves upstream into reusable models and modular transformations, making delivery thinner and more consistent. Stage 5: Transformation as Institutional Infrastructure — transformation logic becomes a governed, versioned, documented asset designed to support both analytics and operational consumption at scale.",
    results: "The decisive transition in data maturity is from scattered transformation logic to shared transformation infrastructure.",
    image: strategic2Src.src,
    tags: ["Data Maturity", "Transformation Strategy", "Enterprise Architecture"],
    featured: true
  }
];
