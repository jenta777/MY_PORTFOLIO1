import React from 'react';
import { Palette, Code, Layout, Zap, Smartphone, Search } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'Crafting intuitive and aesthetically pleasing interfaces using Figma. I focus on user-centered design principles.',
    icon: Palette,
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Building responsive, scalable web apps with React, TypeScript, and Tailwind. Clean code is my priority.',
    icon: Code,
  },
  {
    id: '3',
    title: 'Design Systems',
    description: 'Creating cohesive design languages and component libraries to ensure consistency across products.',
    icon: Layout,
  },
  {
    id: '4',
    title: 'Performance Optimization',
    description: 'Auditing and improving website performance for better SEO and user retention. 99+ Lighthouse scores.',
    icon: Zap,
  },
  {
    id: '5',
    title: 'Mobile First Responsive',
    description: 'Ensuring your application looks and works perfectly on any device, from mobile phones to 4k desktops.',
    icon: Smartphone,
  },
  {
    id: '6',
    title: 'SEO & Accessibility',
    description: 'Implementing best practices to ensure your site is findable and usable by everyone.',
    icon: Search,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What I Bring to the Table</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive blend of technical expertise and creative flair to elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="glass-card p-8 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;