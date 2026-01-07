import { ArrowRight, Bot, Brain, Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:mx-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-400">v2.0 Now Available</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Advanced AI for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
                Medical Research
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              MedAgent combines multi-model AI, advanced RAG systems, and autonomous research agents to accelerate academic discovery and analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#features"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              >
                Explore Features
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="https://github.com/holys519/ChatLLMApp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all duration-200"
              >
                View Repository
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-sm text-slate-500">AI Providers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">A+</div>
                <div className="text-sm text-slate-500">Research Quality</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-500">Open Source</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700 p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto text-xs text-slate-500">@paper-scout-auditor</div>
              </div>

              <div className="space-y-4 font-mono text-sm max-h-[400px] overflow-hidden relative">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-300">Searching for recent papers on "CRISPR off-target effects"...</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sky-300">Found 14 relevant papers. Analyzing methodology...</p>
                    <div className="mt-2 p-3 bg-slate-900/50 rounded border border-slate-700">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Relevance Score</span>
                        <span className="text-emerald-400">92%</span>
                      </div>
                      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-purple-300">Detailed Audit Report Generated:</p>
                    <ul className="mt-2 text-slate-400 space-y-1 list-disc pl-4">
                      <li>Methodology: <span className="text-emerald-400">Robust</span></li>
                      <li>Sample Size: <span className="text-yellow-400">Moderate (n=45)</span></li>
                      <li>Bias Risk: <span className="text-emerald-400">Low</span></li>
                    </ul>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
