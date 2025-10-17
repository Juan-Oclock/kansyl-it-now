import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { ErrorBoundary } from "@/components/error-boundary"
import Script from "next/script"

const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

const title = "Kansyl — Never forget a free trial again"
const description =
  "Track free trials effortlessly with Kansyl for iOS. Get smart reminders 3 days, 1 day, and day-of cancellation. Save money on forgotten subscriptions with AI receipt scanning, iCloud sync, and privacy-first design. Download free for iPhone."
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
const appStoreId = process.env.NEXT_PUBLIC_APP_STORE_ID
const appArgument = process.env.NEXT_PUBLIC_APP_ARGUMENT

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Kansyl",
  keywords: [
    "Kansyl",
    "free trial tracker",
    "subscription manager",
    "trial reminder app",
    "cancel subscriptions",
    "iOS subscription tracker",
    "iPhone trial manager",
    "free trial reminders",
    "subscription reminders",
    "avoid unwanted charges",
    "track Netflix trial",
    "track Spotify trial",
    "track Disney Plus trial",
    "AI receipt scanner",
    "subscription organizer",
    "money saving app",
    "trial expiration alerts",
    "iCloud sync subscriptions",
    "privacy-first app",
    "Core Data",
    "SwiftUI",
    "iOS 15",
    "Siri Shortcuts",
    "subscription widgets",
    "trial period tracker",
    "subscription spending tracker",
    "automatic trial reminders",
    "subscription habit tracker",
    // Target terms
    "subscription manager",
    "trial reminders",
    "reminders",
    "cancel subscription",
    "subscriptions",
  ],
  authors: [{ name: "Juan-O'Clock", url: "https://juan-oclock.com" }],
  creator: "Juan-O'Clock",
  publisher: "Juan-O'Clock",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Kansyl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kansyl - Never forget a free trial again",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
    creator: "@JuanOclock",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Canonical is set per-page to avoid incorrect canonicals on subroutes
  icons: { 
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning data-grammarly="false">
      <head>
        {/* iOS Smart App Banner (only if App Store ID provided) */}
        {appStoreId && (
          <meta
            name="apple-itunes-app"
            content={`app-id=${appStoreId}${appArgument ? `, app-argument=${appArgument}` : ''}`}
          />
        )}
        {/* Credential API fix for browser extensions */}
        <Script src="/fix-credentials.js" strategy="beforeInteractive" />
        
        {/* Error prevention for browser extensions */}
        <Script id="error-prevention" strategy="beforeInteractive">
          {`
            // Prevent credential API conflicts from browser extensions
            window.addEventListener('error', function(e) {
              if (e.filename && e.filename.includes('credentials-library')) {
                e.preventDefault();
                return false;
              }
            });
            
            // Protect against read-only property assignment errors
            window.addEventListener('unhandledrejection', function(e) {
              if (e.reason && e.reason.message && e.reason.message.includes('read only property')) {
                e.preventDefault();
                return false;
              }
            });
          `}
        </Script>
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YQMS9PZ3K7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQMS9PZ3K7');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          {children}
          <Toaster position="top-center" richColors />
        </ErrorBoundary>
      </body>
    </html>
  )
}
