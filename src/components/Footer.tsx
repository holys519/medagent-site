import { Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-slate-900 border-t border-slate-800/50 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">MedAgent</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              学術研究を加速する高度なAIアシスタント。マルチモデルAI、RAGシステム、自律型研究エージェントを統合した、次世代の研究支援プラットフォームです。
            </p>
            <a
              href="https://github.com/holys519/medagent-site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHubリポジトリを見る
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">主要機能</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  マルチモデルAI対応
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  高度な研究エージェント
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  RAG知識管理システム
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  知識グラフ可視化
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-400 transition-colors">
                  マルチモーダルチャット
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">技術スタック</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                React Native & Expo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Google Cloud Platform
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                Vertex AI & Firestore
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                LangChain/LangGraph
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MedAgent Project. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Built with React Native, Expo, Google Cloud Platform, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
