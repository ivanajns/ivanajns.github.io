import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface BlogEntry {
  id: number;
  title: string;
  type: 'text-only' | 'image-text';
  paragraphs?: string[];
  imagePlaceholder?: string;
  textPlaceholder?: string;
}

const entries: BlogEntry[] = [
  {
    id: 1,
    title: "The Hidden Cost of Building Without a Blueprint: A Practitioner's Insight",
    type: 'text-only',
    paragraphs: [
      "Most organizations don't have a data problem. They have a strategy problem that shows up as a data problem.",
      "I experienced this firsthand. Our team spent years building dashboards and automations embedded across accounting functions delivering strong value add work. Then leadership made a structural move: pull all the data and technology resources out of the business units and consolidate them into a single organization. On paper, it looked like progress.",
      "But consolidation without strategy is just reorganized chaos.",
      "The redundancy didn't disappear. The inconsistent solutions didn't get reconciled. The ungoverned data pipelines didn't suddenly align. We were now one team in name, still operating like five teams in practice. And leadership, having made the org change, considered the problem solved.",
      "This is the hidden cost of building without a blueprint. When organizations accumulate solutions faster than they establish governance, structural changes create the illusion of progress while the underlying fragmentation compounds. You end up with more coordination overhead, more political complexity around who owns what, and less clarity than you had before.",
      "The answer isn't to stop building. It's to build with architecture in mind from the start — establishing the governance frameworks, ownership models, and consolidation pathways before the accumulation becomes too complex to unwind.",
      "That is the difference between a data team and a data strategy.",
    ],
  },
  {
    id: 2,
    title: "Architecture Over Accumulation: A Fragmentation Matrix",
    type: 'image-text',
    imagePlaceholder: 'INSERT MATRIX IMAGE HERE',
    textPlaceholder: 'INSERT MATRIX TEXT HERE',
  },
  {
    id: 3,
    title: "From Silos to Systems: A Practical Data Maturity Path",
    type: 'image-text',
    imagePlaceholder: 'INSERT MATURITY CURVE IMAGE HERE',
    textPlaceholder: 'INSERT MATURITY CURVE TEXT HERE',
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

            {/* Image placeholder — only for image-text entries */}
            {activeEntry.type === 'image-text' && (
              <div className="w-full overflow-hidden rounded-t-3xl bg-blue-50 min-h-[200px] flex items-center justify-center">
                {/* INSERT MATRIX IMAGE HERE (entry 2) / INSERT MATURITY CURVE IMAGE HERE (entry 3) */}
                <p className="text-blue-300 text-sm font-mono">{activeEntry.imagePlaceholder}</p>
              </div>
            )}

            {/* Modal content */}
            <div className="p-6 space-y-5">

              {/* Text-only entry: clean paragraphs, no headers */}
              {activeEntry.type === 'text-only' && activeEntry.paragraphs && (
                <div className="space-y-4">
                  {activeEntry.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Image-text entry: body text placeholder, no headers */}
              {activeEntry.type === 'image-text' && (
                <div>
                  {/* INSERT MATRIX TEXT HERE (entry 2) / INSERT MATURITY CURVE TEXT HERE (entry 3) */}
                  <p className="text-blue-300 text-sm font-mono">{activeEntry.textPlaceholder}</p>
                </div>
              )}

            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
