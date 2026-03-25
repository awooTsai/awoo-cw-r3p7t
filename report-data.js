// awoo x 天下雜誌 — 會議摘要報告資料
// 資料來源：SeaMeet 逐字稿 (2026-03-24)
// 此檔案可複用於未來會議報告，僅需替換資料內容

const REPORT_DATA = {
  meeting: {
    title: "awoo x 天下雜誌 — AI 廣編成效追蹤合作討論",
    date: "2026 年 3 月 24 日（一）",
    time: "10:03 — 11:04",
    duration: "約 60 分鐘",
    location: "線上會議（SeaMeet）",
    participants: {
      awoo: [
        { name: "蔡阿達（Ada Tsai）", role: "資深總監暨共同創辦人" },
        { name: "Angelline", role: "業務開發" }
      ],
      client: [
        { name: "周峯玉", role: "天下雜誌" }
      ]
    }
  },

  summary: "本次會議聚焦於 awoo 與天下雜誌在「AI 廣編成效追蹤」領域的合作可能性。天下雜誌面臨客戶對 AI 時代廣編成效衡量的需求，awoo 具備自研的 AI 聲量追蹤工具（GEO Suite），能提供品牌提及率、聲量占比、情緒分析、引用追蹤等指標。雙方達成共識，將以「關鍵字 + Prompt 延伸追蹤」為核心模式，先從小規模 POC 測試開始，逐步驗證成效後擴大合作規模。",

  discussionPoints: [
    {
      id: 1,
      title: "合作需求與痛點對焦",
      icon: "🎯",
      details: "天下雜誌有兩大需求：一是提升自身品牌的 AI 聲量表現（目前在同業中略為領先 5-10 分）；二是為廣編客戶提供 AI 成效追蹤服務。客戶購買 AU 式廣編後，需要具體數據證明投放在天下的廣編對 AI 聲量提升確實有幫助。",
      insight: "天下的核心痛點不只是「做 AI 優化」，而是需要一套可量化、可回報給客戶的成效證明機制。"
    },
    {
      id: 2,
      title: "awoo AI 聲量追蹤工具介紹",
      icon: "🔧",
      details: "awoo 自研工具透過模擬真人搜尋行為，向大語言模型提問並爬取回答結果，追蹤五大核心指標：品牌提及率、聲量占比（與競品比較）、排名表現、情緒分析（正負面評價）、引用率（網址是否出現在 AI 回答中）。工具的優勢在於隨機切換伺服器位置，確保數據接近真實使用者的搜尋結果。",
      insight: "目前市場上缺乏標準化的 AI 成效追蹤第三方工具，awoo 佔有先機優勢。"
    },
    {
      id: 3,
      title: "合作模式與收費結構",
      icon: "💰",
      details: "以關鍵字為計價基礎，20 個關鍵字約 35,000 元/月，每個關鍵字延伸 3 個 Prompt（共約 60 個 Prompt）進行追蹤。服務包含：關鍵字分析與策略規劃、Prompt 延伸與追蹤、文章撰寫建議、頁面優化建議。未來大量合作時，可討論經銷價與量體折扣。",
      insight: "收費邏輯延續 awoo 既有的 SEO 服務模式，客戶理解成本低；以客戶為單位的計價方式，天下可靈活轉嫁成本。"
    },
    {
      id: 4,
      title: "合作流程設計",
      icon: "📋",
      details: "預期流程：客戶下單 → 天下提供 Brief（含主題、目標族群、溝通重點）→ awoo 分析關鍵字與制定 Prompt → 天下訪談客戶撰寫文章（融入關鍵字與 Prompt 策略）→ awoo 審閱 → 文章上線 → awoo 啟動追蹤。從確定合作到文章上線，預估約一個月工作時程。",
      insight: "雙方接觸節點精簡，實際工作時間不長，主要變數在客戶端的訪談排程。"
    },
    {
      id: 5,
      title: "POC 試點規劃",
      icon: "🧪",
      details: "雙方同意先以一家客戶進行 POC 測試，選定少量關鍵字（約 5-20 個），追蹤期至少兩個月。天下具備高網域權重優勢，文章上線後被 AI 引用的機率較高，適合快速驗證成效。SEO/GEO 本質上需要時間累積信任度，理想追蹤期為半年，但先以階段性結案方式推進。",
      insight: "天下的媒體權重是天然優勢，配合精準的關鍵字策略，POC 成功機率相當樂觀。"
    },
    {
      id: 6,
      title: "長期合作展望",
      icon: "🚀",
      details: "天下預期未來所有廣編都將轉為 AU 式（兼顧曝光與 AI 聲量），量體將顯著成長。雙方可探討經銷合作模式：天下取得經銷價，依量體靈活定價。此外，awoo 也可協助天下進行網站體質優化（SEO 基礎、Schema 佈建等），從底層提升整體 AI 友善度。",
      insight: "這不只是單點合作，而是開啟媒體端全新營收管道的起點，成功模式可複製到其他大型媒體。"
    }
  ],

  decisions: [
    { text: "合作以「關鍵字 + Prompt 延伸追蹤」為核心模式", priority: "high" },
    { text: "先以一家客戶進行 POC 小規模測試", priority: "high" },
    { text: "收費基準：20 個關鍵字 / 35,000 元月，延伸 60 個 Prompt 追蹤", priority: "medium" },
    { text: "確定合作（客戶簽約）後才啟動關鍵字與 Prompt 制定，避免白做工", priority: "medium" },
    { text: "合作流程精簡化：天下提供標準化 Brief → awoo 分析回饋 → 融入文章 → 上線追蹤", priority: "medium" },
    { text: "追蹤期建議至少兩個月（階段性結案），理想狀態半年", priority: "medium" },
    { text: "已交換 LINE 聯絡方式，後續溝通走 LINE 加速", priority: "low" }
  ],

  actionItems: [
    {
      task: "盤點適合 POC 的客戶名單與廣編需求",
      owner: "周峯玉（天下）",
      timeline: "近期",
      status: "待啟動",
      category: "client"
    },
    {
      task: "評估合作量體與數量，回饋合理收費區間",
      owner: "周峯玉（天下）",
      timeline: "近期",
      status: "待啟動",
      category: "client"
    },
    {
      task: "準備 POC 合作提案細節（含報價方案）",
      owner: "蔡阿達 + Angelline（awoo）",
      timeline: "待天下回饋後",
      status: "待啟動",
      category: "awoo"
    },
    {
      task: "設計標準化 Brief 公版格式",
      owner: "雙方協作",
      timeline: "合作確認後",
      status: "待啟動",
      category: "both"
    },
    {
      task: "針對 POC 客戶進行關鍵字分析與 Prompt 策略制定",
      owner: "awoo",
      timeline: "收到 Brief 後",
      status: "待啟動",
      category: "awoo"
    },
    {
      task: "建構客戶專屬 AI 聲量監控儀表板",
      owner: "awoo",
      timeline: "合作啟動後",
      status: "待啟動",
      category: "awoo"
    }
  ],

  valueHighlights: [
    {
      title: "市場先機",
      description: "awoo 是台灣少數擁有自研 AI 聲量追蹤工具的公司，在 GEO 領域具備先行者優勢，能提供市場上稀缺的第三方數據佐證。"
    },
    {
      title: "SEO → GEO 完整知識體系",
      description: "從傳統 SEO 到 GEO 的轉型經驗，讓 awoo 能從「網站體質優化」到「AI 內容策略」提供端到端的服務。"
    },
    {
      title: "三贏合作模式",
      description: "awoo 提供技術與策略、天下提供媒體平台與權重、客戶獲得可量化的 AI 廣編成效 — 形成永續的三方價值循環。"
    },
    {
      title: "可擴展的商業模式",
      description: "一旦 POC 驗證成功，此模式可快速複製到天下所有廣編客戶，並延伸至其他大型媒體合作。"
    }
  ],

  preparedBy: {
    name: "蔡阿達（Ada Tsai）",
    title: "資深總監暨共同創辦人",
    company: "awoo 阿物科技",
    email: "ada@awoo.com.tw"
  }
};
