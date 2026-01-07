import { Bot, Database, GitBranch, Layers } from 'lucide-react';

const features = [
  {
    name: 'Multi-Model AI Support',
    description: 'Switch seamlessly between OpenAI (GPT-4o), Anthropic (Claude 3.5), and Google (Gemini 1.5 Pro) models.',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    name: 'Research Agent System',
    description: 'Autonomous agents (@paper-scout) that search, analyze, and audit academic papers with quality scoring.',
    icon: Bot,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10'
  },
  {
    name: 'RAG Knowledge Base',
    description: 'Upload PDFs and DOCX files to build a vector-searchable knowledge base for accurate citations.',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    name: 'Knowledge Graph',
    description: 'Visualize complex relationships between extracted entities using Google Cloud Vertex AI.',
    icon: GitBranch,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-slate-800/20 skew-y-3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything needed for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
              Academic Excellence
            </span>
          </p>
          <p className="mt-4 text-lg text-slate-400">
            A comprehensive suite of tools designed to streamline the research process, 
            from discovery to analysis and synthesis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name}
              className="relative group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
