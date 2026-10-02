# デジタルヘルス指標

デジタルヘルス指標の定義に関するリファレンスブックです。各指標の意味、計算方法、解決済みの例、データソースと注意点、よくある間違いをまとめており、デジタルヘルス製品やサービスを構築、運用、評価する人々のために整理されています。

初めての方へ: [患者ポータル導入率](topics/patient-portal-adoption-rate/)と[予約不履行率](topics/appointment-no-show-rate/)から始めてみてください。これら2つの指標は、ほぼすべてのデジタルヘルスのビジネスケースに登場します。

## 患者エンゲージメントとアクセス

- [患者ポータル導入率](topics/patient-portal-adoption-rate/) — 登録、アクティベーション、アクティブ利用。しばしば1つに混同される3つの異なる比率
- [遠隔医療受診率](topics/telehealth-visit-rate/) — 遠隔で提供されるケアの割合、そしてビデオと電話を決して1つの数字として報告すべきでない理由
- [予約不履行率](topics/appointment-no-show-rate/) — 医療における最も古い運用指標であり、デジタルリマインダーの効果が最もよく実証されている対象の一つ
- [患者エンゲージメント一貫性率](topics/patient-engagement-consistency-rate/) — 患者が時間をかけてデジタルツールとどれだけ定期的に相互作用するか、使用したことがあるかどうかとは異なる
- [ユーザー継続率](topics/user-retention-rate/) — 持続可能な使用パターンを持つ製品と新奇性の波に乗っているだけの製品を区別するコホート継続曲線
- [DAU/MAU粘着率](topics/dau-mau-stickiness-ratio/) — ユーザーベース全体にわたるエンゲージメント強度の標準的なプロダクトアナリティクス指標
- [患者ネットプロモータースコア](topics/patient-net-promoter-score/) — 広く使用され、広く批判されている、単一質問の満足度指標
- [システムユーザビリティスケールスコア](topics/system-usability-scale-score/) — ソフトウェアが実際にどれほど使いやすいかを測定する標準化された10項目の質問票

## デジタルケアの運用と安全性

- [臨床アラート無効化率](topics/clinical-alert-override-rate/) — 臨床意思決定支援におけるアラート疲労の標準的なシグナル
- [デジタル紹介処理時間](topics/digital-referral-turnaround-time/) — 電子紹介システムが実際に時間を節約しているかどうかを示すプロセス指標
- [介入までの時間](topics/time-to-intervention-rate/) — 臨床チームが自動化された健康アラートにどれだけ迅速に対応するか
- [病床日数削減](topics/bed-day-reduction/) — 回復をバーチャル病棟に移行することで節約された入院病床日数、常に安全性指標とともに報告される

## 臨床転帰と品質

- [バイオメトリック改善率](topics/biometric-improvement-rate/) — HbA1cやBMIなどの追跡対象バイオメトリックで臨床的に意味のある変化を達成した患者の割合
- [バイオメトリック安定化率](topics/biometric-stabilization-rate/) — 単一の改善とは異なる、目標範囲内での持続的なコントロール
- [トリアージ振り分け精度](topics/triage-routing-accuracy/) — AIまたはデジタルトリアージツールが患者を正しいレベルのケアに振り分けているかどうか
- [服薬アドヒアランス率](topics/medication-adherence-rate/) — 患者が処方通りに薬剤にアクセスできていた日数の割合
- [病院再入院率](topics/hospital-readmission-rate/) — 支払者の経済性と価値ベースケア契約に最も直接的に結びついた指標
- [ePROM完了率](topics/epro-completion-rate/) — 電子患者報告アウトカム指標の完了率、そしてなぜ低下する率自体が臨床的シグナルになりうるのか

## マーケティングと成長経済性

- [真の顧客獲得コスト](topics/true-customer-acquisition-cost/) — 1人の新規患者を獲得するための全負荷コスト、通常30-50%過小評価される
- [LTV対CAC比率](topics/ltv-to-cac-ratio/) — 真の獲得コストに対する生涯価値。3:1は広く引用される持続可能な基準
- [マーケティング効率比率](topics/marketing-efficiency-ratio/) — プラットフォームが報告するROASに対する独立した検証である、総マーケティング費用に対する総収益

## デジタルヘルスエクイティ

- [デジタルアクセス率](topics/digital-access-rate/) — 本書の他のすべてのデジタルヘルス指標にとっての前提条件指標
- [デジタルリテラシー率](topics/digital-literacy-rate/) — アクセスを持つ人々が実際に支援なしでそれを使用できるかどうか

## 技術・運用インフラ

- [医師バーンアウト率](topics/physician-burnout-rate/) — 臨床医が直面するデジタルツールの負担とともに追跡される。設計の悪いソフトウェアは文書化された寄与要因である
- [デバイス稼働率](topics/device-uptime-rate/) — あらゆる遠隔モニタリングプログラムの背後にある基礎的なインフラ指標

## 財務・経済的価値

- [ケアエピソードあたりコスト](topics/cost-per-episode-of-care/) — 価値ベースケア契約における財務比較の標準単位
- [救急外来転送回避率](topics/ed-diversion-rate/) — EDから安全に転送された患者接触、常に見逃された緊急事態の安全性指標とともに報告される
- [投資収益率(ROI)と投資価値(VOI)](topics/roi-and-voi/) — デジタル投資が財務的に元を取ったかどうか、そして重要なすべてを考慮して行う価値があったかどうか

## 評価フレームワーク

- [RE-AIMフレームワーク](topics/re-aim-framework/) — 到達、有効性、採用、実装、維持。単一の指標ではなく5つの次元
- [WHOデジタルヘルス評価フレームワーク](topics/who-digital-health-assessment-framework/) — 国家規模の展開全体にわたって実現可能性、安全性、公平性を評価するためのWHOのガイダンス
- [ISO/TS 82304-2](topics/iso-ts-82304-2/) — ほとんどの健康・ウェルネスアプリ品質ラベルの背後にある国際技術仕様

---

*注記: この言語版はAI支援による翻訳であり、日本語を母語とする方によるレビューを待っています。詳細はプロジェクトの[README.md](../../README.md)をご覧ください。*
