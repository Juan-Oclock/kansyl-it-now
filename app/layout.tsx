import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const title = "Kansyl — Never forget a free trial again"
const description =
  "Track free trials, get smart reminders, and stop wasting money on forgotten subscriptions."
const url = "https://kansyl.app" // replace when deploying

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  applicationName: "Kansyl",
  keywords: [
    "Kansyl",
    "free trial",
    "subscription",
    "reminders",
    "iOS",
    "SwiftUI",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    url,
    siteName: "Kansyl",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
