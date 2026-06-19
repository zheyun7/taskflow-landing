// ============================================================
// lib/config.ts — 产品数据中心
// 所有 Section 的文字内容均从此文件读取，禁止在任何组件中硬编码
// ============================================================

// ---- TypeScript 类型定义 ----

export interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  /** Hero 区域顶部小标签文字 */
  badge: string;
  /** CTA 按钮下方的社会证明 */
  socialProof: string;
}

export interface Feature {
  title: string;
  description: string;
  /** Tailwind CSS 类名的 emoji 图标，或留空使用默认图标 */
  icon: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  /** 设为 true 时该卡片高亮推荐 */
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAData {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  /** 按钮下方信任提示 */
  trustNote: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  copyright: string;
  links: FooterLink[];
}

export interface SiteConfig {
  /** 产品名称 */
  name: string;
  /** 品牌 slogan */
  slogan: string;
  /** SEO 描述 */
  description: string;
  /** 官网 URL */
  url: string;
  hero: HeroData;
  features: Feature[];
  howItWorks: HowItWorksStep[];
  pricing: PricingPlan[];
  faq: FAQItem[];
  cta: CTAData;
  footer: FooterData;
}

// ---- 产品数据 ----

export const siteConfig: SiteConfig = {
  name: "TaskFlow",
  slogan: "AI 驱动的项目管理，让团队跑得更快",
  description:
    "TaskFlow 是一站式 AI 项目管理平台，智能分配任务、自动生成周报、实时风险预警，帮助团队把时间花在真正重要的事情上。",
  url: "https://taskflow.ai",

  // ① Hero Section
  hero: {
    heading: "用 AI 把项目管理\n变成自动驾驶",
    subheading:
      "TaskFlow 自动拆解需求、智能分配任务、实时追踪进度。\n团队省下 40% 的管理时间，专注于交付而非填表。",
    ctaText: "免费开始使用 →",
    ctaLink: "/signup",
    badge: "🚀 全新 AI 版本已上线",
    socialProof: "已服务 5000+ 团队 · 14 天免费试用 · 无需信用卡",
  },

  // ② Features Section
  features: [
    {
      title: "🧠 AI 任务拆解",
      description:
        "粘贴一段需求文档，AI 自动拆成可执行的子任务，估算工时并分配到最合适的人。",
      icon: "🧠",
    },
    {
      title: "📊 智能周报生成",
      description:
        "每周五自动汇总每个人的进度，生成结构化的周报，直接发送到邮箱和 Slack。",
      icon: "📊",
    },
    {
      title: "🚨 风险预警系统",
      description:
        "当任务可能延期时，AI 提前 3 天预警，并建议调整方案——在问题发生之前解决它。",
      icon: "🚨",
    },
    {
      title: "🔄 多平台同步",
      description:
        "深度集成 GitHub、Notion、Slack、飞书。一处更新，处处同步，不改变团队现有习惯。",
      icon: "🔄",
    },
    {
      title: "👥 协作看板",
      description:
        "拖拽式看板 + 时间线视图，从宏观项目到微观任务，一目了然的可视化管理。",
      icon: "👥",
    },
    {
      title: "🔒 企业级安全",
      description:
        "SOC 2 Type II 认证、SSO 单点登录、RBAC 权限控制、数据加密传输，企业安全无忧。",
      icon: "🔒",
    },
  ],

  // ③ How It Works Section
  howItWorks: [
    {
      step: 1,
      title: "连接你的工具",
      description:
        "30 秒绑定 GitHub、Slack、Notion 等工具，TaskFlow 自动导入现有项目和成员。",
    },
    {
      step: 2,
      title: "AI 接管流程",
      description:
        "输入需求或目标，AI 自动规划 Sprint、分配任务、设定里程碑——你只需审核确认。",
    },
    {
      step: 3,
      title: "专注交付即可",
      description:
        "每天早上打开 TaskFlow 看 AI 排序好的「今日优先」，做完一项划掉一项，收工。",
    },
  ],

  // ④ Pricing Section
  pricing: [
    {
      name: "Free",
      price: "¥0",
      period: "/月",
      description: "适合个人或 3 人以下小团队体验",
      features: [
        "最多 3 名成员",
        "5 个活跃项目",
        "基础 AI 任务拆解",
        "看板视图",
        "社区支持",
      ],
      ctaText: "免费开始",
      ctaLink: "/signup?plan=free",
    },
    {
      name: "Pro",
      price: "¥99",
      period: "/人/月",
      description: "适合成长中的团队，解锁全部 AI 能力",
      features: [
        "无限成员",
        "无限项目",
        "完整 AI 套件（拆解 + 周报 + 预警）",
        "多平台同步",
        "自定义工作流",
        "优先邮件支持",
      ],
      ctaText: "开始 14 天免费试用",
      ctaLink: "/signup?plan=pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "定制",
      period: "",
      description: "适合 100 人以上组织，专属部署与支持",
      features: [
        "Pro 全部功能",
        "私有化部署",
        "SSO / SAML 集成",
        "专属客户成功经理",
        "SLA 99.9% 可用性",
        "定制 AI 训练",
      ],
      ctaText: "联系销售",
      ctaLink: "/contact",
    },
  ],

  // ⑤ FAQ Section
  faq: [
    {
      question: "TaskFlow 适合什么规模的团队？",
      answer:
        "从 2 人的初创团队到 500 人的产品组织都在用 TaskFlow。Free 版覆盖小团队基本需求，Pro 版适合 10-100 人的成长型团队，Enterprise 版为大型组织提供私有部署和定制化服务。",
    },
    {
      question: "AI 功能需要额外付费吗？",
      answer:
        "Free 版包含基础 AI 任务拆解（每月 50 次）。Pro 版解锁全部 AI 能力且无使用限制——包括智能周报、风险预警、需求分析等。我们承诺核心 AI 功能不会额外收费。",
    },
    {
      question: "可以和现有的 Jira / Asana 数据打通吗？",
      answer:
        "可以。Pro 版支持一键导入 Jira、Asana、Trello 的项目数据，包括历史任务、附件和评论。导入后 AI 会自动学习你的团队模式，优化后续的任务分配和排期建议。",
    },
    {
      question: "数据安全性如何保证？",
      answer:
        "TaskFlow 已通过 SOC 2 Type II 审计。所有数据传输使用 TLS 1.3 加密，存储使用 AES-256 加密。我们支持数据驻留选择（美区 / 欧区），Enterprise 版支持完全私有化部署。",
    },
    {
      question: "可以随时取消订阅吗？",
      answer:
        "当然。按月订阅随时可取消，未使用天数的费用按比例退还。年付方案享受 20% 折扣，取消时同样按比例退款。数据导出功能永远免费，不锁定你的数据。",
    },
  ],

  // ⑥ CTA Section
  cta: {
    heading: "准备好让 AI 替你管项目了吗？",
    subheading:
      "14 天免费试用，无需信用卡。\n接入你的工具，体验 AI 项目管理的未来。",
    buttonText: "免费开始使用 →",
    buttonLink: "/signup",
    trustNote: "14 天免费试用 · 无需信用卡 · 随时取消",
  },

  // ⑦ Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} TaskFlow. All rights reserved.`,
    links: [
      { label: "产品", href: "/product" },
      { label: "定价", href: "/pricing" },
      { label: "博客", href: "/blog" },
      { label: "关于我们", href: "/about" },
      { label: "隐私政策", href: "/privacy" },
      { label: "服务条款", href: "/terms" },
    ],
  },
};
