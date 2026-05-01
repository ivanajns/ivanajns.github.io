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
  title: "Most Data Problems Are Transformation Problems: A Practitioner's Insight",
  type: 'text-only',
  paragraphs: [
    { text: "Most Data Problems Are Architecture Problems: A Practitioner's Insight", isTitle: true },
    { text: "Most organizations do not have a data problem in the way they think they do. They have a transformation problem that quietly governs how data moves, how logic is defined, and how operational knowledge is distributed across the business." },
    { text: "For a long time, that problem can remain invisible. Teams continue shipping dashboards, automations, extracts, and reporting layers that create real value. From the outside, the function looks productive. In reality, transformation logic is often accumulating across tools faster than the organization is standardizing, documenting, and governing it." },
    { text: "That distinction matters. Once transformation logic is embedded across reporting tools, scripts, local queries, and workflow automations, scale begins to create the appearance of maturity while actually increasing coordination cost. The organization produces more output, but every new initiative inherits more hidden dependencies, more duplicated business rules, and more reconciliation overhead." },
    { text: "I saw this most clearly when structural and platform changes exposed how much logic had been distributed across the delivery layer. What looked like a systems transition was really a visibility event: the underlying issue was not infrastructure alone, but the absence of a shared transformation layer." },
    { text: "That is why I increasingly see analytics maturity not as a function of dashboards produced or platforms adopted, but of whether transformation logic is reusable, governed, and intentionally designed to compound across the enterprise." },
  ],
},
{
  id: 2,
  title: "Architecture Over Accumulation: A Data Fragmentation Matrix",
  type: 'image-text',
  image: strategic1Src.src,
  paragraphs: [
    { text: "Architecture Over Accumulation: A Data Fragmentation Matrix", isTitle: true },
    { text: "This matrix maps where organizations actually are versus where they think they are, across two dimensions: how intentionally they are building their data architecture and how broadly their platform serves the enterprise." },
    { label: "Localized Output:", text: "Teams solve real problems quickly, but logic remains embedded in dashboards, queries, spreadsheets, or scripts. Useful work is delivered, but it does not compound." },
    { label: "Accumulated Fragmentation:", text: "Output scales faster than standards. Multiple teams solve similar problems in parallel, definitions drift, and overlapping transformation logic emerges across tools and functions." },
    { label: "Centralized Platform, Distributed Logic:", text: "This is the deceptive stage. Infrastructure appears more mature because the organization has consolidated systems or adopted a modern warehouse, but business logic still lives downstream across reporting, automation, and analyst-built transformations. Coordination cost stays high even as the platform modernizes." },
    { label: "Shared Transformation Architecture:", text: "Transformation logic becomes an institutional asset rather than a local artifact. Core business rules are centralized, reusable, easier to test, easier to document, and easier to update once instead of many times." },
    { text: "Many organizations mistake platform centralization for transformation maturity. In practice, maturity depends less on where data is stored than on where business logic is allowed to live." },
  ],
},
{
  id: 3,
  title: "From Silos to Systems: A Data Maturity Curve",
  type: 'image-text',
  image: strategic2Src.src,
  paragraphs: [
    { text: "From Silos to Systems: A Data Maturity Curve", isTitle: true },
    { text: "Data maturity in real enterprise environments is rarely linear. It is usually a sequence of partial fixes that only become transformational when the underlying infrastructure is finally consolidated." },
    { label: "Stage 1: Tool-Centric Output", text: "Transformation logic lives where work gets delivered: dashboards, local SQL, spreadsheets, scripts, and workflow tools. The organization is productive, but not cumulative." },
    { label: "Stage 2: Coordinated Fragmentation", text: "Teams begin producing at scale, but shared standards lag behind delivery. Similar logic is rebuilt across functions, and coordination increasingly depends on tribal knowledge." },
    { label: "Stage 3: Platform Consolidation", text: "The organization introduces a more unified data platform, but logic remains distributed. Infrastructure improves faster than transformation design, so operational fragility persists beneath the new architecture." },
    { label: "Stage 4: Shared Transformation Layer", text: "The organization starts moving repeatable business logic upstream into reusable models, views, or modular transformations. Delivery becomes thinner downstream and more consistent across use cases." },    
    { label: "Stage 5: Transformation as Institutional Infrastructure", text: "Transformation logic is treated as a governed, evolving asset of the enterprise: versioned, tested, documented, reusable, and designed to support both analytics and operational consumption at scale." },
    { text: "The decisive transition in data maturity is not from legacy platforms to modern platforms. It is from scattered transformation logic to shared transformation infrastructure." },
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
