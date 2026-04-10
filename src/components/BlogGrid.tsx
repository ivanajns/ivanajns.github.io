import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import strategic1Src from '../img/strategic-1.png';
import strategic2Src from '../img/strategic-2.png';

interface Para {
  label?: string;
  text: string;
  isTitle?: boolean;
}

interface BlogEntry {
  id: number;
  title: string;
  type: 'text-only' | 'image-text';
  paragraphs: Para[];
  image?: string;
  imagePlaceholder?: string;
}

const entries: BlogEntry[] = [
{
  id: 1,
  title: "Most Data Problems Are Strategy Problems: A Practitioner's Insight",
  type: 'text-only',
  paragraphs: [
    { text: "Most Data Problems Are Architecture Problems: A Practitioner's Insight", isTitle: true },
    { text: "Most organizations don't have a data problem. They have an architecture problem that eventually shows up in their data." },
    { text: "I saw this firsthand. For years, our team was embedded within the accounting organization, building dashboards and automations that delivered real business value. The work was impactful, the stakeholders were satisfied, and from the outside, it looked like the data function was working." },
    { text: "Then leadership made a structural decision: centralize all data and technology resources into a single organization. On paper, it looked like progress." },
    { text: "In practice, it exposed the real issue. And as a systems thinker, I coudn't help but notice the dysfunction." },
    { text: "The redundancy didn't disappear. The inconsistent logic didn't reconcile. The pipelines built across teams didn't align. We became one team in name, still operating like five teams in practice because we were still working across five disconnected data platforms." },
    { text: "Because consolidation without unified infrastructure is just reorganized chaos." },
    { text: "When organizations accumulate solutions faster than they consolidate their data architecture, structural changes create the illusion of progress while the underlying fragmentation compounds. You don't get alignment, you get more coordination overhead, more reconciliation logic to maintain disparate systems, and more technical debt as teams try to stitch together incompatible platforms." },
    { text: "The problem was never a lack of output. It was the absence of a unified foundation." },
    { text: "The answer isn't to stop building. It's to build on shared infrastructure from the start — a modern data platform that consolidates pipelines, standardizes transformations, and eliminates the architectural fragmentation that governance policies alone can't fix." },
    { text: "That is the difference between a data team that delivers outputs and a data architecture that creates leverage." },
  ],
},
{
  id: 2,
  title: "Architecture Over Accumulation: A Data Fragmentation Matrix",
  type: 'image-text',
  image: strategic1Src.src,
  paragraphs: [
    { text: "Architecture Over Accumulation: A Data Fragmentation Matrix", isTitle: true },
    { text: "Most data teams don't fail because they lack talent. They fail because they accumulate solutions faster than they establish a system with consolidated architecture." },
    { text: "Organizations often believe they are maturing because they are producing more dashboards, automations, or centralized activity. But maturity is not defined by output alone. It's also defined by whether the infrastructure enables work to compound across the organization." },
    { text: "This matrix maps where organizations actually are versus where they think they are, across two dimensions: how intentionally they are building their data architecture and how broadly their platform serves the enterprise." },
    { label: "Ad Hoc Analytics:", text: "High output, zero architectural leverage. Teams solve real problems locally using departmental databases and disconnected tools, but each solution remains isolated. Over time, this creates an inventory of dashboards and reports that deliver value individually but can't scale because they're built on incompatible foundations." },
    { label: "Centralized Chaos:", text: "The most dangerous stage because it feels like progress. Teams are reorganized and resources are consolidated, but the underlying data silos persist with SQL queries and spreadsheets everywhere. Technical fragmentation remains unresolved, and complexity increases as teams try to reconcile systems that were never designed to work together." },
    { label: "Engineer-Driven Optimization:", text: "Delivery improves within silos, but platform consolidation is still incomplete. Pipelines become more robust and individual systems more efficient, yet data still lives in multiple platforms requiring constant integration overhead and duplicate transformation logic." },
    { label: "Strategic Data Architecture:", text: "Data becomes infrastructure. Teams build on a shared platform, whether that's Snowflake, Databricks, Fabric, or something similar, that eliminates architectural fragmentation. Pipelines, transformations, and governance layer on top of a single source of truth, enabling systems to be reusable, consistent, and scalable across the organization without reconciliation overhead." },
    { text: "The goal is not to move quickly through these stages. The goal is to understand where you are so you can make intentional decisions about consolidating your architecture and not just your org chart." },
  ],
},
{
  id: 3,
  title: "From Silos to Systems: A Data Maturity Curve",
  type: 'image-text',
  image: strategic2Src.src,
  paragraphs: [
    { text: "From Silos to Systems: A Data Maturity Curve", isTitle: true },
    { text: "Most organizations don't plan their way into data maturity. They react to pain, reorganize around symptoms, and mistake operational improvements for architectural transformation." },
    { text: "That is why maturity is rarely linear. It is usually a sequence of partial fixes that only become transformational when the underlying infrastructure is finally consolidated." },
    { label: "Stage 1: Reporting", text: "Insights exist but they live in disconnected systems. Dashboards pull from department-specific databases, Excel exports, and legacy platforms. Definitions, data models, and transformation logic vary across teams because the technical foundation is fragmented, limiting trust and scalability." },
    { label: "Stage 2: Automation", text: "Efficiency improves within silos but architecture remains distributed. Teams reduce manual work by automating pipelines, but often these pipelines just move data faster between the same disconnected systems, reinforcing a foundation that was never designed to scale." },
    { label: "Stage 3: Consolidation", text: "Alignment is declared but technical fragmentation persists. Resources are centralized into a single data team, yet data still lives across SQL Server, Oracle, cloud warehouses, and departmental systems. Teams spend more time reconciling platforms than building on them. This is where most organizations stall because org chart changes get mistaken for infrastructure transformation." },
    { label: "Stage 4: Governance and Architecture", text: "The architecture begins to consolidate. Organizations migrate pipelines, models, and transformations to a unified cloud data platform — Snowflake, Databricks, or similar. Duplicate systems are retired. Transformation logic moves from scattered ETL jobs into a shared layer (dbt, Spark). Data quality, governance, and observability become platform capabilities, not afterthoughts." },    
    { label: "Stage 5: Decision Infrastructure", text: "The data platform becomes the foundation for how the organization operates. Systems are designed to support decisions consistently, at scale, and across business units because the technical foundation enables it." },
    { text: "The hardest transition is not from reporting to automation. It is from organizational consolidation to platform consolidation." },
    { text: "That is where organizations have to stop assuming team restructuring is enough and start migrating to unified infrastructure that eliminates fragmentation at the source." },
    { text: "That gap is where most data transformations stall because they never consolidated the technical architecture to make everything work together a system." },
  ],
},
];

export default function BlogGrid() {
  const [activeEntry, setActiveEntry] = useState<BlogEntry | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeEntry) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeEntry]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveEntry(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Card grid */}
      <div className="grid gap-4">
        {entries.map((entry) => (
          <button
            key={entry.id}
            onClick={() => setActiveEntry(entry)}
            className="w-full text-left bg-gradient-to-br from-blue-50 to-white p-4 rounded-2xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              {/* Thumbnail placeholder */}
              <div className="w-16 h-16 rounded-xl flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-medium text-blue-600 mb-1 group-hover:text-blue-800 transition-colors leading-snug">
                  {entry.title}
                </h4>
              </div>
              <div className="flex-shrink-0 text-blue-300 group-hover:text-blue-500 transition-colors mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal overlay — rendered via portal to escape any parent stacking context */}
      {activeEntry && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveEntry(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal card */}
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveEntry(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-gray-100 rounded-full shadow transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image section — only for image-text entries */}
            {activeEntry.type === 'image-text' && (
              activeEntry.image ? (
                <div className="w-full overflow-hidden rounded-t-3xl bg-blue-50">
                  <img
                    src={activeEntry.image}
                    alt={activeEntry.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="w-full overflow-hidden rounded-t-3xl bg-blue-50 min-h-[200px] flex items-center justify-center">
                  {/* INSERT MATURITY CURVE IMAGE HERE (entry 3) */}
                  <p className="text-blue-300 text-sm font-mono">{activeEntry.imagePlaceholder}</p>
                </div>
              )
            )}

            {/* Modal content — clean paragraphs, no headers */}
            <div className="p-6 space-y-4">
              {activeEntry.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={
                    para.isTitle
                      ? "text-gray-800 font-medium text-base leading-snug"
                      : "text-gray-600 leading-relaxed text-sm"
                  }
                >
                  {para.label && (
                    <strong className="text-gray-700">{para.label} </strong>
                  )}
                  {para.text}
                </p>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
