'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedText } from '@/components/animated-text'
import { Reveal } from '@/components/reveal'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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

      {/* Terms Content */}
      <section className="container max-w-4xl py-16 md:py-24">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            <AnimatedText animation="fadeInUp" delay={0.1}>
              Terms of Service
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
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By downloading, accessing, or using Kansyl (the “App”), you agree to be bound by these Terms of Service. 
                If you do not agree to these Terms, do not use the App.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.4}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Use of the App</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The App is provided for personal, non-commercial use.</li>
                <li>You agree not to misuse, reverse engineer, or interfere with the App’s operation.</li>
                <li>You are responsible for complying with all applicable laws and App Store terms.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.5}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Accounts and Subscriptions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The App may offer a free tier and paid plans (e.g., monthly, yearly, lifetime).</li>
                <li>Payments and subscription management are handled through Apple’s App Store.</li>
                <li>Subscriptions automatically renew unless canceled in your App Store account settings.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.6}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Payments, Trials, and Refunds</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Prices are shown in your local currency and may change.</li>
                <li>Free trials may be offered. If not canceled before the trial ends, you may be charged for the selected plan.</li>
                <li>Refunds are subject to App Store policies; please contact Apple Support for billing issues.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.7}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Privacy and Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We value your privacy. Please review our
                {" "}
                <Link href="/privacy" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline underline-offset-2">
                  Privacy Policy
                </Link>
                {" "}
                to understand how we collect, use, and protect information.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.8}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The App and its content, features, and functionality are owned by the developer and are protected by 
                applicable copyright, trademark, and other laws. You may not copy, modify, or distribute the App or its 
                content without permission.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.9}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Attempting to access or collect data in unauthorized ways.</li>
                <li>Introducing malware, disrupting service, or breaching security.</li>
                <li>Using the App for illegal, harmful, or abusive activities.</li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={1.0}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                The App is provided on an “as is” and “as available” basis without warranties of any kind, express or 
                implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement. 
                Your use of the App is at your sole risk.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.1}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of or relating to your use of the App.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.2}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate access to the App at any time for any reason, including 
                violations of these Terms.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.3}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms from time to time. Changes will be posted on this page with an updated 
                "Last updated" date. Continued use of the App after changes take effect constitutes acceptance.
              </p>
            </section>
          </Reveal>

          <Reveal delay={1.4}>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us:
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
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="mailto:onelasttimejuan@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://github.com/Juan-Oclock/kansyl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </footer>
    </main>
  )
}
