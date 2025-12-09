import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    category: 'SaaS Platform',
    description: 'A comprehensive analytics dashboard for a fictional SaaS company featuring real-time data visualization with Recharts and D3.',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    link: '#',
  },
  {
    id: '2',
    title: 'Aura Commerce',
    category: 'E-commerce',
    description: 'A headless e-commerce frontend built with Next.js, featuring smooth page transitions and a custom cart implementation.',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    tags: ['Next.js', 'Framer Motion', 'Zustand', 'Stripe'],
    link: '#',
  },
  {
    id: '3',
    title: 'ZenTask',
    category: 'Productivity Tool',
    description: 'A minimalist task management application focusing on drag-and-drop interactions and local-first data persistence.',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    tags: ['React', 'Beautiful DnD', 'LocalForage', 'PWA'],
    link: '#',
  },
  {
    id: '4',
    title: 'CryptoFolio',
    category: 'Fintech',
    description: 'Real-time cryptocurrency portfolio tracker connecting to multiple exchanges via public APIs.',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    tags: ['React', 'WebSockets', 'Chart.js', 'Axios'],
    link: '#',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              A selection of my recent work demonstrating capabilities in complex UI logic, API integration, and responsive design.
            </p>
          </div>
          <button className="hidden md:block text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
            View GitHub Profile &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300">
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-white hover:text-slate-900 transition-all" aria-label="Github Repo">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} className="p-2 bg-slate-700 rounded-full hover:bg-indigo-500 hover:text-white transition-all" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <button className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
            View GitHub Profile &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;