import React from 'react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React & Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Figma & UI Design', level: 85, category: 'design' },
  { name: 'Node.js', level: 75, category: 'tools' },
  { name: 'Git & CI/CD', level: 80, category: 'tools' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl transform rotate-3 blur-sm opacity-50"></div>
              <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700">
                <h3 className="font-display text-2xl font-bold mb-6">Technical Arsenal</h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              More Than Just Code
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              I started my journey 2.3 years ago, transitioning from a graphic design background into software engineering. This unique blend allows me to speak the language of both designers and developers, ensuring that the final product is not only robust but also visually pixel-perfect.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I believe in the power of the web to create accessible and immersive experiences. When I'm not coding, I'm experimenting with new JS frameworks, contributing to open source, or exploring the latest in generative AI.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">2.3+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">20+</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;