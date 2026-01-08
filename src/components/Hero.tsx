import { ArrowRight, Bot, Brain, Search, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mx-auto max-w-2xl lg:max-w-none lg:mx-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-400">MedAgent v2.0 リリース</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              学術研究を加速する<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">
                高度なAIアシスタント
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              <strong>MedAgent</strong>は、マルチモデルAI、高度なRAGシステム、自律型研究エージェントを統合し、
              論文検索から品質評価まで、学術研究の全プロセスを支援します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#features"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-200 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-105"
              >
                機能を見る
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="https://github.com/holys519/medagent-site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-white font-medium border border-slate-700 transition-all duration-200 backdrop-blur-sm"
              >
                GitHubで見る
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 mb-1">3+</div>
                <div className="text-sm text-slate-400">AIプロバイダー</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-1">A+</div>
                <div className="text-sm text-slate-400">研究品質評価</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">オープンソース</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            
            <div className="relative bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">@paper-scout-auditor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
              </div>

              <div className="space-y-4 font-mono text-sm max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-300">「CRISPRオフターゲット効果」に関する最近の論文を検索中...</p>
                    <span className="text-xs text-slate-500 mt-1 block">PubMed API接続済み</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sky-300">関連論文14件を発見。メソッドロジーを分析中...</p>
                    <div className="mt-2 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>関連性スコア</span>
                        <span className="text-emerald-400 font-semibold">92%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-purple-300">詳細な監査レポートを生成:</p>
                    <div className="mt-2 p-3 bg-slate-900/50 rounded-lg border border-slate-700 space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-slate-300">メソッドロジー: <span className="text-emerald-400 font-semibold">堅牢</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-yellow-400" />
                        <span className="text-slate-300">サンプルサイズ: <span className="text-yellow-400 font-semibold">中程度 (n=45)</span></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-slate-300">バイアスリスク: <span className="text-emerald-400 font-semibold">低</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-emerald-300 font-semibold">品質スコア: A+</p>
                    <p className="text-xs text-slate-400 mt-1">総合評価: 非常に高品質な研究</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
