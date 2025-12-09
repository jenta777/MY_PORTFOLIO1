import React, { useState } from 'react';
import { Palette, Code, Layout, Zap, Smartphone, Search, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and aesthetically pleasing interfaces using Figma. I focus on user-centered design principles.',
    longDescription: 'Great design is not just about how things look, but how they work. I bridge the gap between functional requirements and visual delight. My design process is iterative, data-driven, and deeply user-centric, ensuring that every interaction feels natural and every pixel serves a purpose.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'High-Fidelity UI Design',
      'Interaction Design & Micro-animations',
      'Accessibility (a11y) Audits',
      'Design System Creation'
    ],
    tools: ['Figma', 'Adobe XD', 'Framer', 'Protopie'],
    icon: Palette,
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Building responsive, scalable web apps with React, TypeScript, and Tailwind. Clean code is my priority.',
    longDescription: 'I transform static designs into dynamic, high-performance web applications. Specializing in the modern React ecosystem, I write clean, semantic, and maintainable code that scales. Whether it\'s a complex dashboard or a marketing site, I ensure the codebase is as polished as the user interface.',
    features: [
      'Single Page Application (SPA) Development',
      'Server-Side Rendering (SSR) with Next.js',
      'Complex State Management (Redux/Zustand)',
      'API Integration & Data Fetching',
      'Component-Driven Development',
      'Unit & Integration Testing'
    ],
    tools: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
    icon: Code,
  },
  {
    id: '3',
    title: 'Design Systems',
    description: 'Creating cohesive design languages and component libraries to ensure consistency across products.',
    longDescription: 'Consistency is the key to a professional and trustworthy product. I build and document comprehensive design systems that serve as a single source of truth for both design and engineering teams. This accelerates development speed and ensures visual uniformity across all your digital touchpoints.',
    features: [
      'Atomic Design Implementation',
      'Reusable Component Libraries',
      'Design Token Management',
      'Documentation & Storybook Integration',
      'Cross-platform Consistency',
      'Version Control for Design Assets'
    ],
    tools: ['Storybook', 'Radix UI', 'Headless UI', 'Bit.dev'],
    icon: Layout,
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Auditing and improving website performance for better SEO and user retention. 99+ Lighthouse scores.',
    longDescription: 'In the digital world, speed is money. Slow websites drive users away and hurt search rankings. I conduct deep-dive audits into your application\'s performance metrics and implement advanced optimization techniques to ensure instant load times and buttery-smooth interactions.',
    features: [
      'Core Web Vitals Optimization',
      'Bundle Size Reduction',
      'Code Splitting & Lazy Loading',
      'Image & Asset Optimization',
      'Caching Strategies',
      'Third-party Script Management'
    ],
    tools: ['Lighthouse', 'Web Vitals', 'Chrome DevTools', 'Bundle Analyzer'],
    icon: Zap,
  },
  {
    id: '5',
    title: 'Mobile First Responsive',
    description: 'Ensuring your application looks and works perfectly on any device, from mobile phones to 4k desktops.',
    longDescription: 'With the majority of web traffic coming from mobile devices, a "desktop-last" approach is no longer viable. I build with a mobile-first philosophy, ensuring your content is accessible, readable, and interactive on screens of all sizes. I test rigorously across devices to prevent layout shifts and broken interfaces.',
    features: [
      'Fluid & Flexible Grids',
      'Touch-friendly Interactions',
      'Adaptive Layouts',
      'Media Query Breakpoints',
      'Cross-browser Compatibility',
      'Mobile Navigation Patterns'
    ],
    tools: ['CSS Grid', 'Flexbox', 'BrowserStack', 'PostCSS'],
    icon: Smartphone,
  },
  {
    id: '6',
    title: 'SEO & Accessibility',
    description: 'Implementing best practices to ensure your site is findable and usable by everyone.',
    longDescription: 'An invisible website is a useless website. I build with SEO best practices baked into the code structure, not bolted on later. Simultaneously, I ensure your site is accessible to all users, including those using screen readers, adhering to WCAG 2.1 standards.',
    features: [
      'Semantic HTML5 Structure',
      'Meta Tag & Open Graph Optimization',
      'Structured Data (JSON-LD)',
      'Keyboard Navigation Support',
      'ARIA Attribute Implementation',
      'Sitemap & Robots.txt Configuration'
    ],
    tools: ['Google Search Console', 'Axe DevTools', 'SEO Minion', 'NVDA'],
    icon: Search,
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive blend of technical expertise and creative flair to elevate your digital presence. 
            Click on any service to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="glass-card p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2 cursor-pointer border border-slate-800 hover:border-indigo-500/30"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                {service.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal/Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-slate-800 flex justify-between items-start bg-slate-800/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-400">
                  <selectedService.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">{selectedService.title}</h3>
                  <p className="text-indigo-400 text-sm font-medium mt-1">Professional Service</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
              
              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">About this Service</h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {selectedService.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Features List */}
                <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" /> What's Included
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Tech */}
                <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tools?.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-slate-700 text-indigo-200 text-sm font-medium rounded-full border border-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-800/50 flex justify-end gap-4">
              <button 
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 text-slate-300 font-medium hover:text-white transition-colors"
              >
                Close
              </button>
              <a 
                href="#contact" 
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all flex items-center gap-2"
              >
                Inquire About This
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;