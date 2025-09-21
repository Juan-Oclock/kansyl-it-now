'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedText } from '@/components/animated-text'
import { Reveal } from '@/components/reveal'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Privacy Content */}
      <section className="container max-w-4xl py-16 md:py-24">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <AnimatedText animation="fadeInUp" delay={0.1}>
              Privacy Policy
            </AnimatedText>
          </h1>
          <p className="text-muted-foreground mb-8">
            <AnimatedText animation="fadeInUp" delay={0.2}>
              Last updated: October 2025
            </AnimatedText>
          </p>
        </Reveal>

        <Separator className="mb-8" />

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <Reveal delay={0.3}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment to Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Kansyl, your privacy is our top priority. We believe in complete transparency about 
                what data we collect, how we use it, and most importantly, what we don&apos;t do with it.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
              <h3 className="text-xl font-medium mb-2">What We Store</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Your subscription and free trial information (stored locally on your device)</li>
                <li>Notification preferences</li>
                <li>App settings and customizations</li>
                <li>Receipt data for AI scanning (processed locally)</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-2 mt-4">What We DON&apos;T Store</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Personal identification information beyond what you explicitly provide</li>
                <li>Location data</li>
                <li>Browsing history</li>
                <li>Contact lists</li>
                <li>Financial information or credit card details</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All your data is stored locally on your device using Apple&apos;s Core Data framework. 
                This means:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Your data never leaves your device unless you enable iCloud sync</li>
                <li>We have no access to your personal information</li>
                <li>If you delete the app, all data is permanently removed</li>
                <li>No third-party servers are involved in storing your information</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.6}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">iCloud Sync</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you choose to enable iCloud sync:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Your data is encrypted and synced through Apple&apos;s secure iCloud infrastructure</li>
                <li>Only devices logged into your Apple ID can access this data</li>
                <li>We cannot access your iCloud data</li>
                <li>You can disable sync at any time from the app settings</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.7}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use privacy-focused, opt-in analytics to improve the app:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Analytics are completely optional and disabled by default</li>
                <li>Only anonymous usage patterns are collected (no personal data)</li>
                <li>You can opt-out at any time in settings</li>
                <li>We never sell or share analytics data with third parties</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.8}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">AI Receipt Scanning</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our AI receipt scanning feature:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Processes images entirely on your device</li>
                <li>Does not send images to external servers</li>
                <li>Automatically deletes processed images after extraction</li>
                <li>Never stores or shares receipt images</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.9}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kansyl minimizes third-party integrations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Apple&apos;s frameworks for core functionality</li>
                <li>No advertising networks</li>
                <li>No social media tracking</li>
                <li>No data brokers or resellers</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={1.0}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have complete control over your data:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
                <li>Export all your data at any time</li>
                <li>Delete individual entries or all data</li>
                <li>Disable analytics and telemetry</li>
                <li>Control notification permissions</li>
                <li>Request information about data practices</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={1.1}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Kansyl is not intended for children under 13. We do not knowingly collect 
                information from children under 13 years of age.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.2}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the &quot;Last updated&quot; 
                date.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.3}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-2">
                <li>
                  Email:{' '}
                  <a 
                    href="mailto:onelasttimejuan@gmail.com" 
                    className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline underline-offset-2"
                  >
                    onelasttimejuan@gmail.com
                  </a>
                </li>
                <li>
                  GitHub:{' '}
                  <a 
                    href="https://github.com/Juan-Oclock/kansyl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline underline-offset-2"
                  >
                    github.com/Juan-Oclock/kansyl
                  </a>
                </li>
              </ul>
            </section>
          </Reveal>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          <span className="whitespace-nowrap">
            © 2025 Kansyl | Proudly over-engineered by{" "}
            <a 
              href="https://juan-oclock.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#A8DE28] hover:text-[#A8DE28]/80 transition-colors underline underline-offset-2"
            >
              Juan-O&apos;Clock
            </a>
          </span>
        </div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <a href="mailto:onelasttimejuan@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://github.com/Juan-Oclock/kansyl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </footer>
    </main>
  )
}