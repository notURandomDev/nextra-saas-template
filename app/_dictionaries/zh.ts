export default {
  backToTop: "返回顶部",
  logo: {
    title: "Nextra SaaS 模板",
    text: "NextraaS",
    alt: "Nextra SaaS 模板",
  },
  editPage: "在 GitHub 上编辑此页",
  search: {
    placeholder: "搜索内容...",
  },
  feedback: {
    content: "有问题？给我们反馈",
  },
  toc: {
    title: "目录",
  },
  landing: {
    hero: {
      badge: {
        text: "开源模板 · 基于 Nextra 构建",
      },
      headline: "构建你的 SaaS 梦想",
      subheadline: "快速上线",
      description:
        "一个现代化、功能强大的 SaaS 网站构建模板，基于 Nextra、Next.js 和 Tailwind CSS。包含 i18n 支持、可定制的落地页和集成文档系统。",
      ctas: [
        { label: "立即开始", variant: "primary" },
        { label: "查看文档", variant: "outline" },
      ],
      socialProof: {
        description: {
          prefix: "已有",
          count: "1000+",
          middle: "开发者使用此模板构建他们的 SaaS 项目",
        },
      },
    },
    logoMarquee: {
      title: "技术与工具",
      logos: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "Tailwind CSS" },
        { name: "Nextra" },
        { name: "Framer Motion" },
        { name: "Radix UI" },
      ],
    },
    bentoGrid: {
      sectionTitle: "强大功能",
      sectionDescription: "构建现代化、可扩展的 SaaS 网站所需的一切。",
      cards: [
        {
          id: "landing-page",
          icon: "Layout",
          title: "可定制的落地页",
          description:
            "现代化、响应式的落地页，包含预构建组件。Hero、Logo 滚动、Bento 网格、定价、CTA 和页脚完全可定制。",
          span: "wide",
          type: "metrics",
          systemStatus: true,
          metrics: [
            { label: "组件数量", value: "10+" },
            { label: "动画", value: "Framer Motion" },
            { label: "响应式", value: "100%" },
            { label: "可定制性", value: "完全" },
          ],
        },
        {
          id: "i18n",
          icon: "Languages",
          title: "完整的 i18n 支持",
          description:
            "内置多语言支持，包含英语、中文和西班牙语。易于使用的字典系统，方便添加更多语言。",
          type: "tags",
          tags: ["英语", "中文", "西班牙语"],
        },
        {
          id: "docs",
          icon: "FileText",
          title: "集成文档系统",
          description: "基于 Nextra 的强大文档系统。包含全文搜索、导航、语法高亮和 LaTeX 支持。",
          type: "search",
        },
        {
          id: "theme",
          icon: "Moon",
          title: "深色/浅色模式",
          description:
            "完整支持浅色和深色主题，带有流畅的过渡动画。用户可以选择自己的偏好或跟随系统设置。",
          type: "highlight",
          highlight: {
            value: "2",
            label: "主题包含",
          },
        },
        {
          id: "components",
          icon: "Component",
          title: "现代化 UI 组件",
          description: "使用 Radix UI 和 Tailwind CSS 构建。可访问、可定制、即插即用的组件。",
          type: "tags",
          tags: ["Radix UI", "Tailwind CSS", "Lucide Icons"],
        },
      ],
    },
    pricing: {
      sectionTitle: "开始构建",
      sectionDescription: "选择如何使用此模板进行你的下一个项目。",
      plans: [
        {
          name: "个人使用",
          description: "个人和学习项目",
          price: "免费",
          features: ["完整的模板代码", "完整文档", "i18n 支持", "预构建的 UI 组件", "免费更新"],
          cta: "免费开始",
          highlighted: false,
        },
        {
          name: "商业项目",
          description: "商业项目和初创公司",
          price: "MIT 许可证",
          highlighted: true,
          features: ["所有个人使用功能", "允许商业使用", "允许修改", "允许分发", "无额外限制"],
          cta: "查看许可证",
          badge: "推荐",
        },
        {
          name: "贡献",
          description: "帮助改进模板",
          price: "开源",
          features: [
            "报告 bug 和问题",
            "提交 pull request",
            "改进文档",
            "分享想法",
            "为社区做贡献",
          ],
          cta: "贡献",
          highlighted: false,
        },
      ],
    },
    finalCTA: {
      headline: "准备好构建你的下一个 SaaS 项目了吗？",
      description:
        "今天就开始使用 Nextra SaaS 模板，在几分钟内构建你的网站。强大、灵活且易于定制。加入数千名正在构建精彩项目的开发者行列。",
      ctas: [
        { label: "立即开始", variant: "primary" },
        { label: "在 GitHub 上查看", variant: "outline" },
      ],
      note: "基于 MIT 许可证开源。自由使用、修改和分享。",
    },
    footer: {
      brand: {
        name: "Nextra SaaS 模板",
        description:
          "一个现代化的 SaaS 网站构建模板，基于 Nextra、Next.js 和 Tailwind CSS。开源、易于使用且高度可定制。",
        statusText: "活跃项目",
      },
      linkGroups: [
        {
          title: "功能",
          links: ["落地页", "i18n", "文档", "主题", "组件"],
        },
        {
          title: "资源",
          links: ["文档", "GitHub", "示例", "指南"],
        },
        {
          title: "社区",
          links: ["贡献", "讨论", "问题", "路线图"],
        },
        {
          title: "法律",
          links: ["MIT 许可证", "隐私", "条款", "联系"],
        },
      ],
      copyright: "Nextra SaaS 模板. All rights reserved.",
    },
  },
};
