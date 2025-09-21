import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const title = "Kansyl — Never forget a free trial again"
const description =
  "Track free trials effortlessly with Kansyl for iOS. Get smart reminders 3 days, 1 day, and day-of cancellation. Save money on forgotten subscriptions with AI receipt scanning, iCloud sync, and privacy-first design. Download free for iPhone."
const url = "https://kansyl.app" // replace when deploying

export const metadata: Metadata = {
  metadataBase: new URL(url),
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
    url,
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
  alternates: {
    canonical: url,
  },
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
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
