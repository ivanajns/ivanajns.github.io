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
    title: "Snowflake Migration & AI-Assisted Analytics Architecture",
    description: "I supported a large-scale migration of 50+ Power BI and Power Platform solutions from SQL Server to Snowflake across business-critical accounting and ERP workflows. To cut down on risk and manual rework, I designed a generative AI model that analyzed transformation logic across overlapping Power BI reports, identifying repeated code patterns and recommending which logic belonged upstream as reusable Snowflake views and stored procedures. I also resolved private-key authentication for scheduled jobs that SSO couldn't reliably support, preserving automation continuity through the transition.",
    results: "The AI-assisted analysis surfaced duplicated transformation logic across dozens of reports and directly informed a new shared transformation layer: reusable Snowflake views and stored procedures that replaced scattered, report-level SQL. This reduced redundant logic, lowered the risk of inconsistent business rules across reports, and gave the team a single governed source of truth for core transformations going forward.",
    image: project2Src.src,
    tags: ["Snowflake", "Generative AI", "SQL Refactoring", "Stored Procedures", "Tech Inventory Optimization", "Transformation Layer"],
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
