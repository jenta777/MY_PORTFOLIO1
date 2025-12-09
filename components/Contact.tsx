import React from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to Start a Project?</h2>
        <p className="text-slate-400 text-lg mb-10">
          I'm currently available for freelance work and full-time positions. 
          If you have a project that needs some creative touch, I'd love to hear about it.
        </p>
        
        <form className="space-y-4 text-left glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input type="text" id="name" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea id="message" rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell me about your project..."></textarea>
          </div>

          <button type="button" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mt-4">
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;