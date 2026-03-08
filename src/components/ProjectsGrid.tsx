import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Project } from '../types/project';

interface Props {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: Props) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Card grid */}
      <div className="grid gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="w-full text-left bg-gradient-to-br from-blue-50 to-white p-4 sm:p-5 rounded-2xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full sm:w-20 h-40 sm:h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-medium text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden sm:flex items-center text-blue-300 group-hover:text-blue-500 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal overlay — rendered via portal to escape any parent stacking context */}
      {activeProject && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
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
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-gray-100 rounded-full shadow transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Project image */}
            <div className="w-full overflow-hidden rounded-t-3xl bg-blue-50">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Modal content */}
            <div className="p-6 space-y-5">
              <h2 className="text-2xl font-semibold text-blue-900">
                {activeProject.title}
              </h2>

              {/* About this project */}
              <div>
                <h3 className="text-sm font-semibold text-apple-gray-400 uppercase tracking-wide mb-2">
                  {activeProject.descriptionLabel ?? 'About This Project'}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {activeProject.description}
                </p>
                {activeProject.details && (
                  <p className="text-gray-600 leading-relaxed text-sm mt-3">
                    {activeProject.details}
                  </p>
                )}
              </div>

              {/* Results */}
              <div>
                <h3 className="text-sm font-semibold text-apple-gray-400 uppercase tracking-wide mb-2">
                  Results
                </h3>
                {activeProject.results ? (
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {activeProject.results}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              {(activeProject.demoUrl || activeProject.githubUrl) && (
                <div className="flex gap-3 pt-1">
                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      View Demo
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      View Code
                    </a>
                  )}
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
