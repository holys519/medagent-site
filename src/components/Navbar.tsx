import { Terminal, Github, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500/20 transition-colors">
              <Terminal className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">
              MedAgent
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            <a 
              href="#features" 
              className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800/50"
            >
              機能
            </a>
            <a 
              href="#technology" 
              className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800/50"
            >
              技術スタック
            </a>
            <a 
              href="#about" 
              className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-800/50"
            >
              概要
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/holys519/medagent-site"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 text-white px-4 py-2 rounded-lg transition-all duration-200 border border-slate-700/50 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              aria-label="メニュー"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-800/50 mt-2 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/50"
              >
                機能
              </a>
              <a 
                href="#technology" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/50"
              >
                技術スタック
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/50"
              >
                概要
              </a>
              <a
                href="https://github.com/holys519/medagent-site"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-slate-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-slate-800/50"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
