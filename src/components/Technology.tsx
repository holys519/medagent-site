import { Code, Cloud, Database, Cpu, Layers, Zap } from 'lucide-react';

const technologies = [
  {
    category: 'フロントエンド',
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    items: [
      { name: 'React Native', description: 'クロスプラットフォーム対応のモバイルアプリ開発' },
      { name: 'Expo', description: 'React Nativeアプリの開発・配信プラットフォーム' },
      { name: 'TypeScript', description: '型安全なJavaScript開発' },
      { name: 'NativeWind (Tailwind)', description: 'ユーティリティファーストのスタイリング' },
    ]
  },
  {
    category: 'バックエンド & AI',
    icon: Cpu,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    items: [
      { name: 'LangChain/LangGraph', description: 'AIエージェントワークフローの構築' },
      { name: 'OpenAI API', description: 'GPT-4o, GPT-4o mini, o1/o3シリーズ' },
      { name: 'Anthropic API', description: 'Claude 3.7 Sonnet, Haiku' },
      { name: 'Google Gemini API', description: 'Gemini 2.0 Flash, 2.5 Pro, 1.5 Pro' },
    ]
  },
  {
    category: 'クラウド & インフラ',
    icon: Cloud,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    items: [
      { name: 'Google Cloud Platform', description: 'スケーラブルなクラウドインフラ' },
      { name: 'Vertex AI', description: 'エンベディング生成とAIモデル管理' },
      { name: 'Firestore', description: 'リアルタイムNoSQLデータベース' },
      { name: 'Cloud Storage', description: 'ドキュメントストレージ' },
    ]
  },
  {
    category: 'データ処理',
    icon: Database,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    items: [
      { name: 'Document AI', description: 'PDF/DOCXからのテキスト抽出' },
      { name: 'Vector Search', description: 'セマンティック検索エンジン' },
      { name: 'Vertex AI Embeddings', description: '高次元ベクトル埋め込み生成' },
    ]
  },
  {
    category: '研究ツール',
    icon: Layers,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    items: [
      { name: 'PubMed API', description: '医学論文データベース統合' },
      { name: '@paper-scout', description: 'インテリジェントな論文検索エージェント' },
      { name: '@paper-scout-auditor', description: '研究品質評価エージェント' },
      { name: '@review-creation', description: 'システマティックレビュー生成' },
    ]
  },
  {
    category: 'パフォーマンス',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    items: [
      { name: '並列処理', description: '高速なドキュメント解析' },
      { name: 'ストリーミング', description: 'リアルタイムレスポンス表示' },
      { name: 'キャッシング', description: '効率的なデータ管理' },
      { name: '最適化', description: 'リソース使用量の最適化' },
    ]
  }
];

export function Technology() {
  return (
    <div id="technology" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-slate-900 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase mb-3">技術スタック</h2>
          <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            最新技術を活用した<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              堅牢なアーキテクチャ
            </span>
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            オープンソースからエンタープライズまで、最新の技術スタックを統合。
            スケーラブルで信頼性の高い研究支援プラットフォームを実現しています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="group bg-slate-800/60 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
              <ul className="space-y-3">
                {tech.items.map((item, idx) => (
                  <li key={idx} className="border-l-2 border-slate-700 pl-3 py-1">
                    <div className="text-sm font-medium text-slate-200 mb-1">{item.name}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">アーキテクチャの特徴</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              MedAgentは、モジュラー設計により各コンポーネントが独立して動作し、
              拡張性とメンテナンス性を両立しています。Google Cloud Platformを活用した
              スケーラブルなインフラストラクチャで、大量の研究データも高速に処理可能です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">モジュラー</div>
                <div className="text-sm text-slate-400">独立したコンポーネント設計</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 mb-2">スケーラブル</div>
                <div className="text-sm text-slate-400">クラウドベースの拡張性</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 mb-2">高信頼性</div>
                <div className="text-sm text-slate-400">エラーハンドリングと監視</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

