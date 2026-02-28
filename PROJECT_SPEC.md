# Nextra SaaS Template Project Specification

## Project Overview

**Project Name**: Nextra SaaS Template
**Purpose**: Modern SaaS website template built with Nextra, Next.js, and Tailwind CSS
**Deployment**: Vercel → [https://nextras.vercel.app/](https://nextras.vercel.app/)
**Repository**: [https://github.com/notURandomDev/nextra-saas-template](https://github.com/notURandomDev/nextra-saas-template)

---

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Documentation**: Nextra + nextra-theme-docs
- **Styling**: Tailwind CSS 4.x (OKLCH)
- **Animation**: Framer Motion + Lenis
- **UI**: Radix UI + Lucide Icons

---

## Project Structure

```text
nextra-saas-template/
├── app/[lang]/              # i18n routes
│   ├── _components/         # React components
│   ├── _config/           # Unified configuration
│   │   └── index.tsx     # getMetadata(), getLayoutConfig(), siteConfig
│   ├── _dictionaries/     # i18n dictionaries
│   ├── _hooks/            # Custom hooks
│   ├── _lib/              # Utility functions
│   ├── _types/            # TypeScript type definitions
│   ├── docs/              # Documentation routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── content/               # MDX documentation content
├── mdx-components.ts      # MDX component configuration
└── public/               # Static assets
```

---

## Core Modules

### Homepage Module

| Component   | Purpose                   |
| ----------- | ------------------------- |
| Hero        | Hero section display      |
| LogoMarquee | Tech stack logo scrolling |
| BentoGrid   | Project features display  |
| Pricing     | Pricing plans display     |
| FinalCTA    | Final call-to-action      |
| Footer      | Footer links              |

### Internationalization Module (i18n)

- **Routes**: `/[lang]/*` supports multi-language routing
- **Dictionaries**: `app/_dictionaries/` manages multi-language content
- **Hook**: `useDictionary()` provides client-side dictionary access
- **Content**: MDX documentation content in `content/` directory

### Documentation Module

- **Routes**: `/[lang]/docs/*` → Nextra MDX rendering
- **Features**: Full-text search, table of contents, syntax highlighting, LaTeX support

---

## Configuration Architecture

The project follows the **Single Source of Truth** principle, with all configuration centralized in `app/_config/index.tsx`.

### Configuration Modules

1. **`getMetadata()`** - Website metadata configuration (SEO, social media, icons, etc.)
2. **`getLayoutConfig(dictionary)`** - Layout component configuration (navigation, search, sidebar, etc.)
3. **`siteConfig`** - Site configuration (GitHub, project links, social media, page toggles, etc.)

### Configuration Relationships

- `getLayoutConfig` accepts `dictionary` parameter, enabling configuration integration with i18n
- `siteConfig` serves as the global configuration source, referenced by multiple modules
- Documentation navigation is automatically generated from MDX files in `content/` directory
- Social media links are unified in `siteConfig.socialLinks`

---

## Routing Structure

| Path             | Description       |
| ---------------- | ----------------- |
| `/zh/*`          | Chinese pages     |
| `/en/*`          | English pages     |
| `/es/*`          | Spanish pages     |
| `/[lang]/docs/*` | MDX documentation |

---

## Code Standards

- Arrow functions + named exports
- Type definitions: `interface IxxxProps`
- Parameter naming: `props`, destructured inside function body
