import { Bot, Layers, FileText, Network, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'マルチモデルAI対応',
    description: 'OpenAI (GPT-4o, GPT-4o mini, o1/o3)、Anthropic (Claude 3.7 Sonnet, Haiku)、Google (Gemini 2.0 Flash, 2.5 Pro) をシームレスに切り替え可能。',
    icon: Layers,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    details: ['3つの主要AIプロバイダー', 'リアルタイムモデル切り替え', 'ストリーミングレスポンス対応']
  },
  {
    name: '高度な研究エージェント',
    description: '自律型エージェント(@paper-scout-auditor, @paper-scout)が論文検索、分析、監査を自動実行。品質スコアリング(A+～D)とバイアス検出機能付き。',
    icon: Bot,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    details: ['PubMed統合検索', '自動品質評価', 'バイアス検出機能']
  },
  {
    name: 'マルチモーダルチャット',
    description: 'テキストだけでなく画像も活用した対話が可能。Google Gemini、OpenAI GPT-4o、Anthropic Claudeのマルチモーダル機能を活用。',
    icon: MessageSquare,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    details: ['画像認識対応', '複数画像アップロード', '視覚的分析機能']
  },
  {
    name: 'マインドマップ機能',
    description: '思考を整理するためのマインドマップを作成・編集。Firestoreによるリアルタイム履歴管理と共有機能。',
    icon: Network,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    details: ['インタラクティブ編集', 'リアルタイム同期', '共有機能']
  },
  {
    name: '自動レビュー生成',
    description: '@review-creationエージェントによるシステマティックレビューの自動生成ワークフロー。研究効率を大幅に向上。',
    icon: FileText,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    details: ['自動ワークフロー', 'システマティックレビュー', '品質保証機能']
  },
  {
    name: '処理パイプライン',
    description: 'Google Cloud Platform (Document AI, Vertex AI, Cloud Storage)を活用した高効率なドキュメント処理パイプライン。',
    icon: Sparkles,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    details: ['並列処理', 'リアルタイム進捗表示', 'エラーハンドリング']
  }
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase mb-3">主な機能</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            学術研究の全プロセスを<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">
              包括的に支援
            </span>
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            論文検索から品質評価、知識管理まで、研究活動に必要なすべてのツールを統合。
            最新のAI技術を活用した、次世代の研究支援プラットフォームです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.name}
              className="relative group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {feature.description}
              </p>
              {feature.details && (
                <ul className="space-y-1.5">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
