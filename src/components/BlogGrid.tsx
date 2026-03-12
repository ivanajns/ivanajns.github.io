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
    title: "The Hidden Cost of Building Analytics Without a Blueprint: A Practitioner's Insight",
    type: 'text-only',
    paragraphs: [
      { text: "The Hidden Cost of Building Analytics Without a Blueprint: A Practitioner's Insight", isTitle: true },
      { text: "Most organizations don't have a data problem. They have a strategy problem that shows up as a data problem." },
      { text: "I experienced this firsthand. Our team spent years embedded within the accounting organization, building dashboards and automations that delivered real business value. Then leadership made a structural move: pull all the data and technology resources out of the business units and consolidate them into a single organization. On paper, it looked like progress." },
      { text: "But consolidation without strategy is just reorganized chaos." },
      { text: "The redundancy didn't disappear. The inconsistent solutions didn't get reconciled. The ungoverned data pipelines didn't suddenly align. We were now one team in name, still operating like five teams in practice. And leadership, having made the org change, considered the problem solved." },
      { text: "This is the hidden cost of building without a blueprint. When organizations accumulate solutions faster than they establish governance, structural changes create the illusion of progress while the underlying fragmentation compounds. You end up with more coordination overhead, more political complexity around who owns what, and less clarity than you had before." },
      { text: "The answer isn't to stop building. It's to build with architecture in mind from the start — establishing the governance frameworks, ownership models, and consolidation pathways before the accumulation becomes too complex to unwind." },
      { text: "That is the difference between a data team and a data strategy." },
    ],
  },
  {
    id: 2,
    title: "Architecture Over Accumulation: A Data Fragmentation Matrix",
    type: 'image-text',
    image: strategic1Src.src,
    paragraphs: [
      { text: "Architecture Over Accumulation: A Data Fragmentation Matrix", isTitle: true },
      { text: "Most data teams don't fail because they lack talent. They fail because they accumulate solutions faster than they establish systems." },
      { text: "This matrix maps where organizations actually are versus where they think they are, plotted across two dimensions: how intentionally they are building and how broadly their solutions serve the organization." },
      { label: "Ad-hoc Analytics:", text: "High output, zero compounding. An inventory of local dashboards solving local problems." },
      { label: "Centralized Chaos:", text: "The most dangerous quadrant because it feels like progress. The reorganization happened but the fragmentation is still unresolved and creating mass confusion." },
      { label: "Engineer-Driven Optimization:", text: "Delivery improves but strategy is still missing. Technical goals and organizational goals are not yet the same thing." },
      { label: "Strategic Data Architecture:", text: "Data stops being a collection of reporting tools and becomes organizational infrastructure — a strategic asset that compounds over time rather than a source of technical debt." },
      { text: "The goal is not to move fast through these quadrants. The goal is to know which one you are in so you can make intentional decisions about how to move forward." },
    ],
  },
  {
    id: 3,
    title: "From Silos to Systems: A Data Maturity Curve",
    type: 'image-text',
    image: strategic2Src.src,
    paragraphs: [
      { text: "From Silos to Systems: A Data Maturity Curve", isTitle: true },
      { text: "Most organizations don't plan their way into data maturity. They stumble through it — reacting to pain, reorganizing around symptoms, and mistaking operational changes for strategic ones." },
      { label: "Stage 1: Reporting Tools", text: "Insights exist but they are fragmented. This stage feels sufficient until it doesn't." },
      { label: "Stage 2: Automation", text: "Operations improve but architecture is still undefined. The foundation is getting stronger without anyone agreeing on what to build on top of it." },
      { label: "Stage 3: Consolidation", text: "Alignment is announced but the underlying solutions were never reconciled. This is where most organizations stall." },
      { label: "Stage 4: Governance and Architecture", text: "Tools begin serving the architecture instead of the other way around. This stage requires organizational will as much as technical capability." },
      { label: "Stage 5: Decision Intelligence", text: "Data is no longer a reporting function. It is organizational infrastructure." },
      { text: "The gap between Stage 3 and Stage 4 is where most enterprise data transformations fail. Crossing it requires more than technical investment — it requires strategic clarity about what you are building toward and why." },
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
