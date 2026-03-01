import { Navbar } from "nextra-theme-docs";
import { Search } from "nextra/components";
import { Footer } from "../_components/footer";
import { Logo } from "../_components/site-logo";
import type { Dictionary } from "../_dictionaries/i18n-config";
import type { Metadata } from "next";

/**
 * Get metadata configuration
 */
export const getMetadata = (): Metadata => ({
  /** Alternates configuration */
  alternates: {
    /** Canonical link */
    canonical: "./",
  },
  /** Apple Web App configuration */
  appleWebApp: {
    /** Apple Web App title */
    title: "NextraaS",
  },
  /** Application name */
  applicationName: "NextraaS",
  /** Website description */
  description:
    "Nextra SaaS Template - A modern and powerful template for building SaaS websites with Nextra, Next.js, and Tailwind CSS.",
  /** Generator name */
  generator: "Next.js",
  /** Website keywords */
  keywords: ["NextraaS", "Nextra", "SaaS", "Template", "Next.js", "Tailwind CSS"],
  /** Metadata base URL */
  metadataBase: new URL("https://nextras.vercel.app/"),
  /** Open Graph social sharing configuration */
  openGraph: {
    /** Locale */
    locale: "zh_CN",
    /** Site name */
    siteName: "NextraaS",
    /** Type */
    type: "website",
    /** Page URL */
    url: "./",
  },
  /** Other metadata */
  other: {
    /** Windows tile color */
    "msapplication-TileColor": "#fff",
  },
  /** Website title configuration */
  title: {
    /** Default title */
    default: "NextraaS",
    /** Title template, %s will be replaced with page title */
    template: "%s | NextraaS",
  },
  /** Twitter card configuration */
  twitter: {
    /** Twitter site URL */
    site: "https://nextras.vercel.app/",
  },
  /** Website icon configuration */
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "favicon.png",
    },
  ],
});

/**
 * Layout component configuration
 * Used for Layout component props in app/layout.tsx
 */
export const getLayoutConfig = (dictionary: Dictionary) => ({
  /** Whether to show copy page content button */
  copyPageButton: false,
  /** Whether to show dark mode toggle button */
  darkMode: true,
  /** Documentation repository base URL */
  docsRepositoryBase: "https://github.com/notURandomDev/nextra-saas-template/blob/main",
  /** Edit link text */
  editLink: dictionary.editPage,
  /** Feedback link configuration */
  feedback: {
    /** Feedback link text */
    content: dictionary.feedback.content,
    /** Labels to add when creating a new issue */
    labels: "feedback",
  },
  /** Top banner content */
  // banner: (
  //   <Banner storageKey={`release-notes-${pack.version}`}>
  //     ✨ v{pack.version} Released - <a href="/docs/release-notes">See the release notes</a>
  //   </Banner>
  // ),
  /** Navbar component */
  navbar: (
    <Navbar
      logo={<Logo size="sm" asLink={false} />}
      projectLink="https://github.com/notURandomDev/nextra-saas-template"
    />
  ),
  /** Footer component */
  footer: <Footer />,
  /** Navigation links configuration */
  navigation: {
    /** Whether to show previous page navigation */
    prev: true,
    /** Whether to show next page navigation */
    next: true,
  },
  /** next-themes theme configuration */
  nextThemes: {
    /** Theme attribute */
    attribute: "class" as const,
    /** Default theme */
    defaultTheme: "system",
    /** Whether to disable transition animation when switching themes */
    disableTransitionOnChange: false,
    /** Theme storage key */
    storageKey: "theme",
  },
  /** Search component */
  search: <Search placeholder={dictionary.search.placeholder} />,
  /** Sidebar configuration */
  sidebar: {
    /** Whether to automatically collapse inactive folders */
    autoCollapse: true,
    /** Default menu collapse level */
    defaultMenuCollapseLevel: 1,
    /** Whether to expand sidebar by default */
    defaultOpen: true,
    /** Whether to show sidebar toggle button */
    toggleButton: true,
  },
  /** Table of contents configuration */
  toc: {
    /** Back to top button text */
    backToTop: dictionary.backToTop,
    /** Whether TOC is displayed floating */
    float: true,
    /** TOC title */
    title: dictionary.toc.title,
  },
});

/**
 * Site configuration
 * Used for other business logic
 */
export const siteConfig = {
  /** Image assets configuration */
  images: {
    /** Social proof avatars for hero section */
    socialProofAvatars: [
      "/images/react.png",
      "/images/nextra.png",
      "/images/nextjs.png",
      "/images/tailwind.png",
      "/images/framer.png",
    ],
  },
  /** GitHub API configuration */
  gitHub: {
    /** Repository name, format: owner/repo */
    repo: "notURandomDev/nextra-saas-template",
  },
  /** Project link configuration */
  project: {
    /** GitHub project link */
    link: "https://github.com/notURandomDev/nextra-saas-template",
  },
  /** Release notes configuration */
  releaseNotes: {
    /** Maximum number of releases to display */
    maxReleases: 10,
    /** Release notes page URL */
    url: "https://github.com/notURandomDev/nextra-saas-template/releases",
  },
  /** Social links configuration */
  socialLinks: {
    github: {
      id: "github",
      title: "GitHub",
      href: "https://github.com/notURandomDev/nextra-saas-template",
      enabled: true,
    },
    twitter: {
      id: "twitter",
      title: "Twitter",
      href: "https://twitter.com/notURandomDev",
      enabled: true,
    },
    discord: {
      id: "discord",
      title: "Discord",
      href: "https://discord.gg/",
      enabled: false,
    },
  },
  /** Landing page sections configuration */
  landingPage: {
    hero: {
      enabled: true,
    },
    logoMarquee: {
      enabled: true,
    },
    bentoGrid: {
      enabled: true,
    },
    pricing: {
      enabled: true,
    },
    finalCTA: {
      enabled: true,
    },
    footer: {
      enabled: true,
    },
  },
};
