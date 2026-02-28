export default {
  backToTop: "Scroll to top",
  logo: {
    title: "Nextra SaaS Template",
    text: "NextraaS",
    alt: "Nextra SaaS Template",
  },
  editPage: "Edit this page on GitHub",
  search: {
    placeholder: "Search content...",
  },
  feedback: {
    content: "Have questions? Give us feedback",
  },
  toc: {
    title: "On this page",
  },
  landing: {
    hero: {
      badge: {
        text: "Open Source Template · Built with Nextra",
      },
      headline: "Build Your SaaS Dream",
      subheadline: "Ship It Fast",
      description:
        "A modern and powerful template for building SaaS websites with Nextra, Next.js, and Tailwind CSS. Includes i18n support, customizable landing page, and integrated documentation.",
      ctas: [
        { label: "Get Started Now", variant: "primary" },
        { label: "View Documentation", variant: "outline" },
      ],
      socialProof: {
        avatars: ["/images/qi.png", "/images/vessel.png", "/images/joint.png"],
        description: {
          prefix: "Used by",
          count: "1000+",
          middle: "developers worldwide to build their SaaS projects",
        },
      },
    },
    logoMarquee: {
      title: "Technologies & Tools",
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
      sectionTitle: "Powerful Features",
      sectionDescription: "Everything you need to build a modern and scalable SaaS website.",
      cards: [
        {
          id: "landing-page",
          icon: "Layout",
          title: "Customizable Landing Page",
          description:
            "Modern and responsive landing page with pre-built components. Hero, Logo Marquee, Bento Grid, Pricing, CTA, and Footer fully customizable.",
          span: "wide",
          type: "metrics",
          systemStatus: true,
          metrics: [
            { label: "Components", value: "10+" },
            { label: "Animations", value: "Framer Motion" },
            { label: "Responsive", value: "100%" },
            { label: "Customizable", value: "Full" },
          ],
        },
        {
          id: "i18n",
          icon: "Languages",
          title: "Full i18n Support",
          description:
            "Built-in multilingual support with English, Chinese, and Spanish. Easy-to-use dictionary system for adding more languages.",
          type: "tags",
          tags: ["English", "Chinese", "Spanish"],
        },
        {
          id: "docs",
          icon: "FileText",
          title: "Integrated Documentation",
          description:
            "Powerful documentation system based on Nextra. Search, navigation, syntax highlighting, and LaTeX support included.",
          type: "chart",
        },
        {
          id: "theme",
          icon: "Moon",
          title: "Dark/Light Mode",
          description:
            "Full support for light and dark themes with smooth transitions. Users can choose their preference or follow system settings.",
          type: "highlight",
          highlight: {
            value: "2",
            label: "themes included",
          },
        },
        {
          id: "components",
          icon: "Component",
          title: "Modern UI Components",
          description:
            "Built with Radix UI and Tailwind CSS. Accessible, customizable, and ready-to-use components.",
          type: "tags",
          tags: ["Radix UI", "Tailwind CSS", "Lucide Icons"],
        },
      ],
    },
    pricing: {
      sectionTitle: "Start Building",
      sectionDescription: "Choose how you want to use this template for your next project.",
      plans: [
        {
          name: "Personal Use",
          description: "Personal and learning projects",
          price: "Free",
          features: [
            "Complete template code",
            "Full documentation",
            "i18n support",
            "Pre-built UI components",
            "Free updates",
          ],
          cta: "Get Started Free",
          highlighted: false,
        },
        {
          name: "Commercial Projects",
          description: "Commercial projects and startups",
          price: "MIT License",
          highlighted: true,
          features: [
            "All personal use features",
            "Commercial use allowed",
            "Modification allowed",
            "Distribution allowed",
            "No additional restrictions",
          ],
          cta: "View License",
          badge: "Recommended",
        },
        {
          name: "Contribution",
          description: "Help improve the template",
          price: "Open Source",
          features: [
            "Report bugs and issues",
            "Submit pull requests",
            "Improve documentation",
            "Share ideas",
            "Contribute to community",
          ],
          cta: "Contribute",
          highlighted: false,
        },
      ],
    },
    finalCTA: {
      headline: "Ready to Build Your Next SaaS Project?",
      description:
        "Start with Nextra SaaS Template today and build your website in minutes. Powerful, flexible, and easy to customize. Join thousands of developers already building amazing projects.",
      ctas: [
        { label: "Get Started Now", variant: "primary" },
        { label: "View on GitHub", variant: "outline" },
      ],
      note: "Open source under MIT License. Use it, modify it, and share it freely.",
    },
    footer: {
      brand: {
        name: "Nextra SaaS Template",
        description:
          "A modern template for building SaaS websites with Nextra, Next.js, and Tailwind CSS. Open source, easy to use, and highly customizable.",
        statusText: "Active Project",
      },
      linkGroups: [
        {
          title: "Features",
          links: ["Landing Page", "i18n", "Documentation", "Themes", "Components"],
        },
        {
          title: "Resources",
          links: ["Documentation", "GitHub", "Examples", "Guides"],
        },
        {
          title: "Community",
          links: ["Contribute", "Discussions", "Issues", "Roadmap"],
        },
        {
          title: "Legal",
          links: ["MIT License", "Privacy", "Terms", "Contact"],
        },
      ],
      copyright: "Nextra SaaS Template. All rights reserved.",
    },
  },
};
