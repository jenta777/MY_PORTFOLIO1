import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <span className="text-sm font-medium text-primary bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            Available for new projects
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Masterpieces
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm Alex Morgan, a Frontend Engineer & UI/UX Designer with 2.3 years of experience crafting high-performance, accessible, and visually stunning web applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="group px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-full font-semibold transition-all flex items-center gap-2">
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-semibold transition-all flex items-center gap-2">
            Download Resume
            <Download className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-6 text-slate-400">
          <a href="#" className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;