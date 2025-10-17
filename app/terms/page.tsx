// Server Component (no 'use client') to allow metadata export

import type { Metadata } from 'next'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Terms of Service | Kansyl',
  description: 'Read Kansyl’s Terms of Service covering app usage, data handling, AI features, and user rights.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  openGraph: {
    url: `${siteUrl}/terms`,
    title: 'Terms of Service | Kansyl',
    description: 'Terms of Service for Kansyl, the privacy-first subscription manager.',
    images: ['/og-image.png'],
  },
}

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
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Terms of Service for Kansyl
          </h1>
          <p className="text-muted-foreground mb-2">
            Last Updated: October 3, 2025
          </p>
          <p className="text-muted-foreground mb-8">
            Effective Date: October 3, 2025
          </p>
        </div>

        <Separator className="mb-8" />

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
            <p className="leading-relaxed">
              By downloading, installing, or using the Kansyl mobile application (&quot;App,&quot; &quot;Service,&quot; or &quot;Kansyl&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="leading-relaxed mt-3">
              These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Kansyl (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Description of Service</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">1.1 What Kansyl Does</h3>
            <p className="leading-relaxed">Kansyl is a subscription management and free trial tracking application that helps you:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Track subscription services and free trials</li>
              <li>Monitor subscription costs and spending</li>
              <li>Receive renewal reminders before billing dates</li>
              <li>Scan receipts using AI to automatically detect subscription information</li>
              <li>Store your subscription data locally on your device (no cloud sync in v1.0)</li>
              <li>Calculate savings from cancelled subscriptions</li>
              <li>Organize subscriptions by category</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">1.2 Service Limitations</h3>
            <p className="leading-relaxed">Kansyl is a tracking and reminder tool only. We do not:</p>
            <ul className="list-none space-y-2">
              <li>❌ Manage your actual subscriptions or payments</li>
              <li>❌ Cancel subscriptions on your behalf</li>
              <li>❌ Have access to your payment methods or credit cards</li>
              <li>❌ Guarantee that reminders will prevent all unwanted charges</li>
              <li>❌ Provide financial advice or recommendations</li>
            </ul>
            <p className="leading-relaxed mt-2">You are solely responsible for managing and cancelling your actual subscriptions with service providers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Account Registration and Security</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">2.1 Account Creation</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You must create an account to use certain features of Kansyl</li>
              <li>You must provide accurate and complete information</li>
              <li>You must be at least 13 years old to use Kansyl</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">2.2 Google Sign-In</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kansyl uses Google OAuth for authentication</li>
              <li>By signing in with Google, you agree to Google&apos;s Terms of Service</li>
              <li>We receive only your email address and basic profile information from Google</li>
              <li>You can revoke Kansyl&apos;s access through your Google account settings</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">2.3 Account Security</h3>
            <p className="leading-relaxed">You agree to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Keep your account credentials secure</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Not share your account with others</li>
              <li>Not use another person&apos;s account without permission</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">2.4 Account Termination</h3>
            <p className="leading-relaxed">We reserve the right to suspend or terminate accounts that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent or illegal activity</li>
              <li>Abuse the Service or harm other users</li>
              <li>Remain inactive for extended periods (with notice)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. User Conduct and Prohibited Uses</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">3.1 Acceptable Use</h3>
            <p className="leading-relaxed">You agree to use Kansyl only for its intended purpose: tracking your personal subscriptions and free trials.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">3.2 Prohibited Activities</h3>
            <ul className="list-none space-y-2">
              <li>❌ Use the Service for any illegal purpose</li>
              <li>❌ Attempt to hack, reverse engineer, or compromise the App</li>
              <li>❌ Upload malicious code, viruses, or harmful content</li>
              <li>❌ Abuse the AI receipt scanning feature with excessive requests</li>
              <li>❌ Scrape, data mine, or extract data from the Service</li>
              <li>❌ Impersonate others or create fake accounts</li>
              <li>❌ Share or sell your account access</li>
              <li>❌ Use automated tools or bots to access the Service</li>
              <li>❌ Interfere with other users&apos; enjoyment of the Service</li>
              <li>❌ Violate any applicable laws or regulations</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">3.3 Consequences of Violation</h3>
            <p className="leading-relaxed">Violation of these Terms may result in:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Warning or account suspension</li>
              <li>Permanent account termination</li>
              <li>Legal action if necessary</li>
              <li>Reporting to law enforcement for illegal activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. AI Receipt Scanning Feature</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">4.1 How It Works</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You can photograph or select receipt images</li>
              <li>Images are processed locally on your device using OCR (Optical Character Recognition)</li>
              <li>Only extracted text is sent to our AI service provider (DeepSeek)</li>
              <li>The AI analyzes text to detect subscription information</li>
              <li>You review and confirm detected information before saving</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">4.2 AI Service Limitations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AI detection is not 100% accurate</li>
              <li>You must review and verify all AI-detected information</li>
              <li>Receipt images must be clear and legible for best results</li>
              <li>We are not responsible for errors in AI-detected information</li>
              <li>The AI service is subject to usage limits and availability</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">4.3 Fair Use Policy</h3>
            <p className="leading-relaxed">To ensure fair use of AI resources:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>We may limit the number of receipt scans per day</li>
              <li>Excessive or abusive use may result in temporary restrictions</li>
              <li>Commercial use of receipt scanning is prohibited without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Subscription Data and Content</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">5.1 Your Data Ownership</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You own all subscription data you create in Kansyl</li>
              <li>You grant us a limited license to process and store your data to provide the Service</li>
              <li>This license ends when you delete your account or data</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">5.2 Data Accuracy</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You are responsible for the accuracy of data you enter</li>
              <li>We are not responsible for incorrect reminders based on inaccurate data</li>
              <li>You should verify all information with your subscription providers</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">5.3 Data Backup</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>While we implement backup systems, you are responsible for maintaining your own backups</li>
              <li>We recommend using the &quot;Export Data&quot; feature regularly</li>
              <li>We are not liable for data loss due to technical failures, account deletion, or other causes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Intellectual Property Rights</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">6.1 Kansyl&apos;s Property</h3>
            <p className="leading-relaxed">All content, features, and functionality of Kansyl, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>App design, interface, and user experience</li>
              <li>Software code, algorithms, and architecture</li>
              <li>Logos, trademarks, and branding</li>
              <li>Service templates and logos</li>
            </ul>
            <p className="leading-relaxed mt-2">...are owned by Kansyl and protected by copyright, trademark, and other intellectual property laws.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">6.2 Limited License</h3>
            <p className="leading-relaxed">We grant you a limited, non-exclusive, non-transferable, revocable license to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Download and use the App on your personal devices</li>
              <li>Use the Service for personal, non-commercial purposes</li>
            </ul>
            <p className="leading-relaxed mt-2">You may NOT:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modify, copy, distribute, or create derivative works</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use Kansyl&apos;s trademarks without written permission</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">6.3 Third-Party Content</h3>
            <p className="leading-relaxed">Some subscription service logos and names are trademarks of their respective owners. We use these for identification purposes only and do not claim ownership.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Fees and Payment</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">7.1 Free Service</h3>
            <p className="leading-relaxed">Kansyl is currently a free service. We do not charge subscription fees or in-app purchases.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">7.2 Future Pricing Changes</h3>
            <p className="leading-relaxed">We reserve the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Introduce premium features or subscription tiers in the future</li>
              <li>Provide advance notice of any pricing changes (at least 30 days)</li>
              <li>Allow existing users to continue using current features under grandfathered terms</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">7.3 AI Service Costs</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>If you provide your own DeepSeek API key, you are responsible for any costs incurred with DeepSeek</li>
              <li>We are not responsible for charges from third-party AI services</li>
              <li>Usage limits apply to prevent excessive costs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Third-Party Services</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">8.1 Services We Use</h3>
            <p className="leading-relaxed">Kansyl integrates with third-party services:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-foreground">Supabase (Authentication Only):</strong><br />
                Purpose: User authentication via Google OAuth<br />
                Data Shared: Email address only (for authentication)<br />
                Data NOT Shared: Your subscription data is NOT stored on or synced via Supabase<br />
                Scope: Supabase is used exclusively for sign-in/sign-out functionality<br />
                Privacy Policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://supabase.com/privacy</a><br />
                Terms: <a href="https://supabase.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://supabase.com/terms</a>
              </li>
              <li>
                <strong className="text-foreground">DeepSeek (AI Receipt Analysis):</strong><br />
                Privacy Policy: <a href="https://platform.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://platform.deepseek.com/privacy</a><br />
                Terms: Governed by DeepSeek API terms
              </li>
              <li>
                <strong className="text-foreground">Google OAuth (Authentication):</strong><br />
                Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://policies.google.com/privacy</a><br />
                Terms: <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://policies.google.com/terms</a>
              </li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">8.2 Third-Party Responsibility</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>We are not responsible for third-party service failures or changes</li>
              <li>Third-party terms and privacy policies apply to their respective services</li>
              <li>Service availability may change without notice</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">8.3 iCloud/CloudKit (Not Used in v1.0)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Status:</strong> Not implemented in version 1.0</li>
              <li><strong className="text-foreground">Future Plans:</strong> iCloud sync will be available as a premium feature in a future update</li>
              <li><strong className="text-foreground">Current Storage:</strong> All data is stored locally on your device using Core Data</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">8.4 No Affiliation</h3>
            <p className="leading-relaxed">Kansyl is not affiliated with, endorsed by, or sponsored by any subscription service providers whose services you track in the App.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Disclaimers and Warranties</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">9.1 &quot;AS IS&quot; Service</h3>
            <p className="leading-relaxed">KANSYL IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Accuracy or reliability of information</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">9.2 No Guarantee of Results</h3>
            <p className="leading-relaxed">We do not guarantee that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Reminders will always be delivered on time</li>
              <li>The Service will be available 24/7 without interruptions</li>
              <li>AI receipt scanning will be 100% accurate</li>
              <li>Your data will never be lost</li>
              <li>The App will be compatible with all devices or OS versions</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">9.3 User Responsibility</h3>
            <p className="leading-relaxed">YOU ACKNOWLEDGE AND AGREE THAT:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>You are solely responsible for managing your subscriptions</li>
              <li>Kansyl is a tracking tool, not a subscription cancellation service</li>
              <li>You must cancel unwanted subscriptions directly with service providers</li>
              <li>We are not liable for charges resulting from forgotten cancellations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Limitation of Liability</h2>
            <p className="leading-relaxed font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <h3 className="text-xl font-medium mb-2 text-foreground">10.1 No Liability for Damages</h3>
            <p className="leading-relaxed">WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Lost profits or revenues</li>
              <li>Data loss or corruption</li>
              <li>Subscription charges you failed to cancel</li>
              <li>Opportunity costs or business interruption</li>
              <li>Emotional distress or other non-monetary damages</li>
            </ul>
            <p className="leading-relaxed mt-2">...EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">10.2 Maximum Liability</h3>
            <p className="leading-relaxed">IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS, OR $50, WHICHEVER IS GREATER.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">10.3 Jurisdictional Limitations</h3>
            <p className="leading-relaxed">Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities, so the above limitations may not apply to you.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Indemnification</h2>
            <p className="leading-relaxed">You agree to indemnify, defend, and hold harmless Kansyl and its affiliates, officers, directors, employees, and agents from any and all claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of applicable laws or regulations</li>
              <li>Content you submit or actions you take in the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Privacy Policy</h2>
            <p className="leading-relaxed">Your use of Kansyl is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.</p>
            <p className="leading-relaxed mt-2">Key Privacy Points:</p>
            <ul className="list-none space-y-2">
              <li>✅ We do not sell your personal data</li>
              <li>✅ We use industry-standard security measures</li>
              <li>✅ You can export or delete your data at any time</li>
              <li>✅ We comply with GDPR, CCPA, and Apple&apos;s guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Modifications to Terms</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">13.1 Right to Modify</h3>
            <p className="leading-relaxed">We reserve the right to modify these Terms at any time. When we make changes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>We will update the &quot;Last Updated&quot; date</li>
              <li>We will notify you through the App or via email (for material changes)</li>
              <li>Your continued use of the Service after changes constitutes acceptance</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">13.2 Rejecting Changes</h3>
            <p className="leading-relaxed">If you do not agree to modified Terms:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Stop using the Service</li>
              <li>Delete your account</li>
              <li>Contact us for account closure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Termination</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">14.1 Termination by You</h3>
            <p className="leading-relaxed">You may terminate your account at any time by:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Using the &quot;Delete Account&quot; feature in Settings</li>
              <li>Uninstalling the App</li>
              <li>Contacting us directly</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">14.2 Termination by Us</h3>
            <p className="leading-relaxed">We may terminate or suspend your account immediately, without notice, for:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Extended periods of inactivity (with prior notice)</li>
              <li>At our discretion for any other reason</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">14.3 Effect of Termination</h3>
            <p className="leading-relaxed">Upon termination:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your right to use the Service ends immediately</li>
              <li>Your data will be deleted within 30 days (unless required by law to retain)</li>
              <li>Sections of these Terms that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Dispute Resolution</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">15.1 Informal Resolution</h3>
            <p className="leading-relaxed">Before filing any legal claim, you agree to first contact us to attempt to resolve the dispute informally. We will do our best to resolve disputes amicably.</p>
            <p className="leading-relaxed">Contact: <a href="mailto:kansyl@juan-oclock.com" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">kansyl@juan-oclock.com</a></p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">15.2 Arbitration Agreement</h3>
            <p className="leading-relaxed">Any dispute arising from these Terms or the Service shall be resolved through binding arbitration, rather than in court, except that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>You may assert claims in small claims court</li>
              <li>Either party may seek injunctive relief</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">15.3 Class Action Waiver</h3>
            <p className="leading-relaxed">YOU AGREE THAT ANY DISPUTE SHALL BE BROUGHT ON AN INDIVIDUAL BASIS ONLY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, OR REPRESENTATIVE ACTION.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">15.4 Governing Law</h3>
            <p className="leading-relaxed">These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">16. General Provisions</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">16.1 Entire Agreement</h3>
            <p className="leading-relaxed">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Kansyl regarding the Service.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">16.2 Severability</h3>
            <p className="leading-relaxed">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">16.3 Waiver</h3>
            <p className="leading-relaxed">Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">16.4 Assignment</h3>
            <p className="leading-relaxed">You may not assign or transfer these Terms or your account without our written consent. We may assign these Terms without restriction.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">16.5 No Agency</h3>
            <p className="leading-relaxed">No agency, partnership, joint venture, or employment relationship is created between you and Kansyl by these Terms or use of the Service.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">16.6 Force Majeure</h3>
            <p className="leading-relaxed">We shall not be liable for any failure to perform due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Apple App Store Terms</h2>
            <h3 className="text-xl font-medium mb-2 text-foreground">17.1 Acknowledgment</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>These Terms are between you and Kansyl, not Apple</li>
              <li>Apple is not responsible for the App or its content</li>
              <li>Apple has no obligation to provide maintenance or support</li>
              <li>Apple is not responsible for product liability claims</li>
              <li>Apple is not responsible for intellectual property infringement claims</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">17.2 Third-Party Beneficiary</h3>
            <p className="leading-relaxed">Apple is a third-party beneficiary of these Terms and may enforce them against you.</p>
            <h3 className="text-xl font-medium mt-6 mb-2 text-foreground">17.3 Apple Media Services Terms</h3>
            <p className="leading-relaxed">Your use of the App is also subject to the Apple Media Services Terms and Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">18. Contact Information</h2>
            <p className="leading-relaxed">For questions, concerns, or notices regarding these Terms:</p>
            <ul className="list-none space-y-2">
              <li><strong className="text-foreground">Email:</strong> <a href="mailto:kansyl@juan-oclock.com" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">kansyl@juan-oclock.com</a></li>
              <li><strong className="text-foreground">App:</strong> Settings → Support → &quot;Contact Us&quot;</li>
              <li><strong className="text-foreground">Website:</strong> <a href="https://kansyl.juan-oclock.com" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://kansyl.juan-oclock.com</a></li>
            </ul>
            <p className="leading-relaxed mt-2">We aim to respond to all inquiries within 5 business days.</p>
          </section>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground text-center">19. Acceptance of Terms</h2>
            <p className="leading-relaxed text-center">BY DOWNLOADING, INSTALLING, OR USING KANSYL, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.</p>
            <p className="leading-relaxed text-center mt-2">IF YOU DO NOT AGREE, DO NOT USE THE APP.</p>
            <p className="leading-relaxed text-center mt-6 italic">Thank you for using Kansyl!<br />Last Updated: October 3, 2025</p>
          </section>
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
          <a href="mailto:kansyl@juan-oclock.com" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://github.com/Juan-Oclock/kansyl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </footer>
    </main>
  )
}
