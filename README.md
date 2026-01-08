# MedAgent - 公式ウェブサイト

**学術研究を加速する高度なAIアシスタント**

MedAgent は、React Native と Expo を使用して構築された、モダンなチャットインターフェースを持つ AI アシスタントアプリケーションです。複数の AI モデルを切り替えて使用できる柔軟な設計になっています。

## 主な機能

### 🤖 マルチモデルAI対応
主要なAIモデルをシームレスに切り替え可能:
- **OpenAI**: GPT-4o, GPT-4o mini, o1/o3 シリーズ
- **Anthropic**: Claude 3.7 Sonnet, Haiku
- **Google**: Gemini 2.0 Flash, 2.5 Pro, 1.5 Pro

### 🔬 高度な研究エージェントシステム
学術研究と分析のための包括的なシステム:
- **@paper-scout-auditor**: 完全な研究監査サイクル (検索 → 批評 → 修正 → 監査)。品質スコアリング (A+ ～ D) とバイアス検出機能を提供。
- **@paper-scout**: PubMed統合と関連性スコアリングを備えたインテリジェントな論文検索。
- **@review-creation**: 自動化されたシステマティックレビュー生成ワークフロー。

### 🧠 知識管理
- **RAGシステム**: PDF/DOCXをアップロードしてベクトル検索とセマンティック検索を実現。
- **知識グラフ**: ドキュメントから抽出したエンティティと関係を可視化。
- **処理パイプライン**: Google Cloudベースのパイプライン (Document AI, Vertex AI Embeddings)。

### 🗺️ マインドマップ
- 思考を整理するためのマインドマップを作成・編集。
- Firestoreによるリアルタイム履歴管理と共有機能を統合。

## 技術スタック

- **フロントエンド**: React Native, Expo, NativeWind (Tailwind), TypeScript
- **バックエンドAPI**: Python (FastAPI/Flask相当、エージェント用), Google Cloud Platform (Vertex AI, Firestore, Cloud Storage)
- **AI統合**: LangChain/LangGraph によるエージェントワークフロー

## はじめに

このリポジトリは、MedAgent プロジェクトの公式ランディングページをホストしています。

## 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## デプロイメント

このサイトは GitHub Pages にデプロイされています。

### GitHub Pages へのデプロイ

```bash
# ビルドとデプロイ
npm run deploy
```

これにより、`dist` ディレクトリが `gh-pages` ブランチにデプロイされます。

### 公式サイト

公式サイト: [https://holys519.github.io/medagent-site/](https://holys519.github.io/medagent-site/)

## ライセンス

このプロジェクトはオープンソースです。
