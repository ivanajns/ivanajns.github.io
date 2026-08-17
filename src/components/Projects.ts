import type { Project } from "../types/project";
import project1Src from "../img/project-1.png";
import project2Src from "../img/project-2.png";
import project3Src from "../img/project-3.png";
import strategic2Src from "../img/strategic-2.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Snowflake Migration & Reusable Analytics Architecture",
    description: "I supported a large-scale migration of 50+ Power BI and Power Platform solutions from SQL Server to Snowflake across business-critical accounting and ERP workflows. I took this as an opportunity to centralize and I designed a generative AI model that analyzed transformation logic across overlapping Power BI reports, identifying repeated code patterns and recommending which logic belonged upstream as reusable Snowflake views and stored procedures. Now 15 downstream revenue reports use consistent and standardized business logic that the finance teams can better trust. I also resolved private-key authentication for scheduled jobs that SSO couldn't reliably support, preserving automation continuity through the transition.",
    results: "The AI-assisted analysis surfaced duplicated transformation logic across reports and directly informed a new shared transformation layer: reusable Snowflake views and stored procedures that replaced scattered, report-level SQL. This reduced redundant logic, lowered the risk of inconsistent business rules across reports, and gave the team a single governed source of truth for core transformations going forward.",
    image: project2Src.src,
    tags: ["Reusable Analytics", "Generative AI", "SQL Refactoring", "Inventory Mgmt", "Cloud Platform", "Data Standardization"],
    featured: true
  },
  {
    id: 2,
    title: "Finance Operations Automation & Self-Service Analytics App",
    description: "The finance team’s fiscal close process required up to eight hours each month to reconcile transactional balances between the SAP ERP and the payables system. I replaced the manual workflow with an automated Python and database solution that standardizes the source data, applies the required reconciliation logic, and preserves historical transactions for analysis. I then developed a self-service analytics application that enables finance leaders to investigate variances, make controlled updates, and export results independently, with all changes and approvals captured in an audit trail.",
    results: "The process dropped from up to eight hours of manual reconciliation each close to an automated self-service workflow. Finance users can now review, filter, and export their own analysis directly from the app, while centralized logic applies the same business rules each cycle. Every edit and approval is captured in the audit trail, reducing manual work and improving control.",
    image: project1Src.src,
    tags: ["Self-Service Analytics", "Python Application", "Audit Trail", "SQL Querying", "Data Automation", "Data Governance"],
    featured: true
  },
  {
    id: 3,
  title: "Analytics Modernization Maturity Curve",
  description: "Presented this maturity curve to senior leadership to show the value added as organizations move from fragmented, report-level logic to a governed analytics environment where trusted data is built directly into decision-making. The progression is not just about upgrading the technology with a modern platform; it is about centralizing business logic, creating reusable architecture, and building enough trust in the data so that leaders can spend less time debating numbers and more time acting on them.",
  results: "Created a roadmap for senior leadership to see what analytics modernization looks like in current state vs future state and connected technology investments to business outcomes. Standardized, trusted data leads to faster decisions, better alignment across teams, fewer reporting bottlenecks, and greater confidence that strategic decisions are based on consistent information.",
    image: strategic2Src.src,
    tags: ["Analytics Strategy", "Data Maturity", "Exec Presentations", "Enterprise Architecture", "Decision Intelligence"],
    featured: true
  },
{
    id: 4,
    title: "End-to-End Fabric Analytics Engineering Solution in Github",
    description: "",
    results: "",
    image: project3Src.src,
    tags: ["Unified Analytics Platform", "Metrics Delivery", "Data Quality", "Dimensional Data & Schema Modeling", "Semantic Modeling"],
    featured: true
  }
];
