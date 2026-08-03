import type { Project } from "../types/project";
import project1Src from "../img/project-1.png";
import project2Src from "../img/project-2.png";
import project3Src from "../img/project-3.png";
import strategic2Src from "../img/strategic-2.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Snowflake Migration & AI-Assisted Analytics Architecture",
    description: "I supported a large-scale migration of 50+ Power BI and Power Platform solutions from SQL Server to Snowflake across business-critical accounting and ERP workflows. To cut down on risk and manual rework, I designed a generative AI model that analyzed transformation logic across overlapping Power BI reports, identifying repeated code patterns and recommending which logic belonged upstream as reusable Snowflake views and stored procedures. I also resolved private-key authentication for scheduled jobs that SSO couldn't reliably support, preserving automation continuity through the transition.",
    results: "The AI-assisted analysis surfaced duplicated transformation logic across dozens of reports and directly informed a new shared transformation layer: reusable Snowflake views and stored procedures that replaced scattered, report-level SQL. This reduced redundant logic, lowered the risk of inconsistent business rules across reports, and gave the team a single governed source of truth for core transformations going forward.",
    image: project2Src.src,
    tags: ["Snowflake", "Generative AI", "SQL Refactoring", "Inventory Audit", "Transformation Layer"],
    featured: true
  },
  {
    id: 2,
    title: "Finance Operations Automation & Self-Service Analytics App",
    description: "The finance team’s fiscal close process required up to eight hours each month to reconcile transactional balances between the SAP ERP and the payables system. I replaced the manual workflow with an automated Python and database solution that standardizes the source data, applies the required reconciliation logic, and preserves historical transactions for analysis. I then developed a self-service analytics application that enables finance leaders to investigate variances, make controlled updates, and export results independently, with all changes and approvals captured in an audit trail.",
    results: "The process dropped from up to eight hours of manual reconciliation each close to an automated self-service workflow. Finance users can now review, filter, and export their own analysis directly from the app, while centralized logic applies the same business rules each cycle. Every edit and approval is captured in the audit trail, reducing manual work and improving control.",
    image: project1Src.src,
    tags: ["Python-based application", "SQL Database", "Self-Service Analytics", "Audit Trail", "Data Governance"],
    featured: true
  },
  {
    id: 3,
  title: "Analytics Modernization Maturity Curve",
  description: `
    <p>
      <strong>Stage 1: Fragmented Logic</strong><br>
      Transformation logic lives in dozens of dashboards, scripts, and one-off reports. Every team has its own version of the numbers, so meetings turn into arguments about whose numbers are right instead of what to do next.
    </p>
    <p>
      <strong>Stage 2: Modernized Platform, Same Old Habits</strong><br>
      The company migrates to a new warehouse or cleans up the pipeline, but nothing changes for the people making decisions. They still pull numbers from whatever report they've always used, so the upgrade doesn't actually move the needle.
    </p>
    <p>
      <strong>Stage 3: Reusable Architecture</strong><br>
      Business logic gets moved upstream into shared views and models that every team pulls from. Analysts stop rebuilding the same calculation five different ways and start actually looking at what the data means.
    </p>
    <p>
      <strong>Stage 4: Numbers People Trust</strong><br>
      Once the logic is centralized and documented, people stop asking where a number came from and start using it to make calls. That trust is the real unlock, not the infrastructure itself.
    </p>
    <p>
      <strong>Stage 5: Analytics Built Into How Decisions Get Made</strong><br>
      At this point, the modernized, reusable, governed data isn't a reporting layer leadership checks after the fact. It's part of how they evaluate performance and set priorities in the room, in real time.
    </p>
  `,
  results: "Organizations that reach the later stages spend less time debating numbers and more time acting on them. Standardized, trusted data leads to faster decisions, better alignment across teams, fewer reporting bottlenecks, and greater confidence that strategic decisions are based on consistent information rather than conflicting metrics.",
    image: strategic2Src.src,
    tags: ["Data Maturity", "Transformation Strategy", "Enterprise Architecture"],
    featured: true
  },
{
    id: 4,
    title: "Analytics Engineering Github",
    description: "",
    results: "",
    image: project3Src.src,
    tags: ["dbt", "Snowflake Views", "Dimensional Modeling", "Kimball", "SQL", "Data Warehouse", "Transformation Layer", "ELT"],
    featured: true
  }
];
