import { Layout } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";

import "../globals.css";
import { getLayoutConfig, getMetadata } from "../_config";
import { getDictionary } from "../_dictionaries/get-dictionary";

export const metadata: Metadata = getMetadata();

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const calSans = localFont({
  display: "swap",
  src: "../../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});

const instrumentSans = localFont({
  display: "swap",
  src: "../../public/fonts/InstrumentSans-VariableFont.ttf",
  variable: "--font-instrument-sans",
});

interface IRootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function RootLayout({ children, params }: IRootLayoutProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const pageMap = await getPageMap(`/${lang}/docs`);
  const layoutConfig = getLayoutConfig(dictionary);

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>{/* Your additional tags should be passed as `children` of `<Head>` element */}</Head>
      <body
        className={`${manrope.variable} ${calSans.variable} ${instrumentSans.variable} font-sans antialiased`}
      >
        <Layout
          pageMap={pageMap}
          {...layoutConfig}
          i18n={[
            { locale: "zh", name: "简体中文" },
            { locale: "en", name: "English" },
            { locale: "es", name: "Español" },
          ]}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
