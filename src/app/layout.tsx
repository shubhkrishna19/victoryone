import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope, Newsreader } from "next/font/google";

import "./globals.css";
import { PageViewTracker } from "@/components/analytics/PageViewTracker";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { QuickCallbackDrawer } from "@/components/layout/QuickCallbackDrawer";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { globalSettings } from "@/content/settings";
import { validateContentIntegrity } from "@/lib/contentAssertions";
import { organizationSchema, websiteSchema } from "@/lib/seo";

validateContentIntegrity();

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(globalSettings.siteUrl),
  title: globalSettings.defaultTitle,
  description: globalSettings.defaultDescription,
  applicationName: globalSettings.siteName,
  openGraph: {
    title: globalSettings.defaultTitle,
    description: globalSettings.defaultDescription,
    url: globalSettings.siteUrl,
    siteName: globalSettings.siteName,
    images: ["/legacy/theme-images/amara-park-view.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: globalSettings.defaultTitle,
    description: globalSettings.defaultDescription,
    images: ["/legacy/theme-images/amara-park-view.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4efe7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable} scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <ScrollProgress />
          <PageViewTracker />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <MobileActionBar />
          <QuickCallbackDrawer />
        </MotionProvider>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </body>
    </html>
  );
}
