// Server Component (no 'use client') to allow metadata export

import type { Metadata } from 'next'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kansyl',
  description: 'Kansyl is a privacy-first subscription manager. Your data is stored locally on your device; we do not use third-party analytics or advertising SDKs.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    url: `${siteUrl}/privacy`,
    title: 'Privacy Policy | Kansyl',
    description: 'Privacy-first subscription manager with local storage and no third-party tracking.',
    images: ['/og-image.png'],
  },
}

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
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Privacy Policy for Kansyl
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
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Introduction</h2>
            <p className="leading-relaxed">
              Welcome to Kansyl (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Kansyl mobile application (the &quot;App&quot;).
            </p>
            <p className="leading-relaxed mt-4">
              By using Kansyl, you agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">1.1 Information You Provide Directly</h3>
            
            <h4 className="text-lg font-medium mb-2 text-foreground">Account Information:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Email Address:</strong> When you sign in with Google, we collect your email address for authentication and account management purposes.</li>
              <li><strong className="text-foreground">Name:</strong> We may collect your name from your Google account profile (if provided).</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">Subscription Data:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Service Names: Names of subscription services you track (e.g., &quot;Netflix,&quot; &quot;Spotify&quot;).</li>
              <li>Pricing Information: Monthly or annual subscription costs.</li>
              <li>Dates: Start dates, end dates, renewal dates, and billing cycle information.</li>
              <li>Notes: Any personal notes you add to your subscriptions.</li>
              <li>Categories: Subscription categories you assign.</li>
              <li>Payment Methods: Information about how you pay for subscriptions (stored as text, not actual payment credentials).</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">1.2 Information Collected Automatically</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Device & Usage Data:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Device model and iOS version</li>
              <li>App version and build number</li>
              <li>App usage patterns and feature usage</li>
              <li>Crash reports and error logs (anonymized)</li>
              <li>App performance metrics</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">1.3 Photos and Camera Access</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Receipt Scanning (Optional Feature):</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Camera Access:</strong> When you use the AI receipt scanning feature, we access your device camera to capture receipt images.</li>
              <li><strong className="text-foreground">Photo Library Access:</strong> You may select existing receipt images from your photo library.</li>
              <li><strong className="text-foreground">Image Processing:</strong> Receipt images are processed locally on your device using iOS Vision framework for optical character recognition (OCR).</li>
              <li><strong className="text-foreground">Text Transmission:</strong> Only the extracted text content (not images) is sent to our third-party AI service (DeepSeek) for analysis.</li>
              <li><strong className="text-foreground">No Image Storage:</strong> We do not store, transmit, or retain receipt images on our servers.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">1.4 Calendar Access (Optional)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Calendar Integration:</strong> With your permission, we can add subscription renewal reminders to your device calendar.</li>
              <li><strong className="text-foreground">No Calendar Data Collection:</strong> We do not collect or store your calendar data. Integration is handled entirely on your device.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">1.5 Third-Party Authentication Data</h3>
            <h4 className="text-lg font-medium mb-2 text-foreground">Google Sign-In:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>When you sign in with Google, we receive your email address and basic profile information from Google.</li>
              <li>We use this information solely for authentication and do not access other Google services or data.</li>
              <li>Google&apos;s privacy practices are governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">Google&apos;s Privacy Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">2.1 Primary Uses</h3>
            <p className="leading-relaxed mb-3">We use the collected information to:</p>
            
            <h4 className="text-lg font-medium mb-2 text-foreground">Provide Core Functionality:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Track your subscription services and free trials</li>
              <li>Calculate total spending and savings</li>
              <li>Send timely renewal reminders</li>
              <li>Store your data securely on your device</li>
            </ul>
            <p className="leading-relaxed mt-3">
              <strong className="text-foreground">Note:</strong> In v1.0, data is stored locally on your device only and does not sync across multiple devices.
            </p>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">AI Receipt Scanning:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Analyze receipt text to automatically detect subscription information</li>
              <li>Extract service names, prices, and billing dates from receipts</li>
              <li>Match detected services with your existing subscriptions</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">Account Management:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Authenticate your identity</li>
              <li>Manage your account settings</li>
              <li>Provide customer support</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">App Improvement:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Analyze app usage patterns to improve features</li>
              <li>Identify and fix bugs</li>
              <li>Optimize app performance</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">2.2 We DO NOT Use Your Data For:</h3>
            <ul className="list-none space-y-2">
              <li>❌ Selling or renting your personal information to third parties</li>
              <li>❌ Serving advertisements</li>
              <li>❌ Building user profiles for marketing purposes</li>
              <li>❌ Tracking you across other apps or websites</li>
              <li>❌ Training AI models on your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Data Storage and Security</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">3.1 Where Your Data is Stored</h3>
            
            <h4 className="text-lg font-medium mb-2 text-foreground">Local Storage Only (v1.0):</h4>
            <p className="leading-relaxed mb-3">Your subscription data is stored ONLY on your device:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Local Storage:</strong> All subscription data is stored locally on your iPhone using Core Data (Apple&apos;s local database framework)</li>
              <li><strong className="text-foreground">No Cloud Sync:</strong> In version 1.0, your data does NOT sync across devices</li>
              <li><strong className="text-foreground">Device-Only:</strong> Your data remains on your iPhone and is never uploaded to cloud servers</li>
            </ul>
            <p className="leading-relaxed mt-3">
              <strong className="text-foreground">Note:</strong> iCloud sync will be available as a premium feature in a future update.
            </p>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">API Keys:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>DeepSeek API keys (if you provide your own) are stored securely in your device&apos;s iOS Keychain</li>
              <li>We never transmit or store API keys on our servers</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">3.2 Security Measures</h3>
            <p className="leading-relaxed mb-3">We implement industry-standard security measures:</p>
            <ul className="list-none space-y-2">
              <li>✅ <strong className="text-foreground">Encryption in Transit:</strong> All data transmitted between your device and our servers uses HTTPS/TLS encryption</li>
              <li>✅ <strong className="text-foreground">Encryption at Rest:</strong> Your subscription data is encrypted in the Supabase database</li>
              <li>✅ <strong className="text-foreground">Secure Authentication:</strong> We use Supabase&apos;s secure authentication system with Google OAuth 2.0</li>
              <li>✅ <strong className="text-foreground">No Plaintext Passwords:</strong> We do not store passwords; authentication is handled by Google</li>
              <li>✅ <strong className="text-foreground">API Security:</strong> All API calls require authentication tokens</li>
              <li>✅ <strong className="text-foreground">Row-Level Security:</strong> Database access is restricted to your own data only</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">3.3 Data Retention</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Active Accounts:</strong> Your data is retained as long as your account is active.</li>
              <li><strong className="text-foreground">Account Deletion:</strong> When you delete your account, all your subscription data is permanently deleted within 30 days.</li>
              <li><strong className="text-foreground">Inactive Accounts:</strong> Accounts inactive for more than 2 years may be subject to deletion after notification.</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">3.4 Data Sync Status (v1.0)</h3>
            <p className="leading-relaxed mb-3"><strong className="text-foreground">Important Notice About Data Sync:</strong></p>
            <p className="leading-relaxed mb-3">In the current version (v1.0) of Kansyl:</p>
            <ul className="list-none space-y-2">
              <li>❌ Your subscription data does NOT sync across devices</li>
              <li>❌ Your data does NOT get backed up to iCloud or cloud storage</li>
              <li>✅ Your data is stored ONLY on your iPhone using local Core Data storage</li>
              <li>✅ Your data is protected by your device&apos;s security features (encryption, passcode, Face ID/Touch ID)</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong className="text-foreground">Recommendation:</strong> Use the &quot;Export Data&quot; feature (Settings → Account → Export Data) to create backups of your subscription data manually.
            </p>
            <p className="leading-relaxed mt-4">
              <strong className="text-foreground">Future Updates:</strong> iCloud sync will be available as a premium feature in a future version.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Third-Party Services</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">4.1 Services We Use</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Supabase (Authentication ONLY):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Purpose:</strong> User authentication via Google OAuth ONLY</li>
                  <li><strong className="text-foreground">Data Shared:</strong> Email address (for authentication purposes only)</li>
                  <li><strong className="text-foreground">Data NOT Shared:</strong> Subscription data is NOT stored on Supabase</li>
                  <li><strong className="text-foreground">Scope:</strong> Supabase is used exclusively for sign-in/sign-out functionality</li>
                  <li><strong className="text-foreground">Privacy Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://supabase.com/privacy</a></li>
                  <li><strong className="text-foreground">Security:</strong> SOC 2 Type II certified, GDPR compliant</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">DeepSeek (AI Receipt Analysis):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Purpose:</strong> Analyzing receipt text to extract subscription information</li>
                  <li><strong className="text-foreground">Data Shared:</strong> Only text extracted from receipts (OCR text), never images</li>
                  <li><strong className="text-foreground">Privacy Policy:</strong> <a href="https://platform.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://platform.deepseek.com/privacy</a></li>
                  <li><strong className="text-foreground">Data Retention:</strong> DeepSeek does not store or use API call data for training</li>
                  <li><strong className="text-foreground">Usage:</strong> Only when you use the AI receipt scanning feature</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-2 text-foreground">Google OAuth (Authentication):</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Purpose:</strong> Sign in with Google account</li>
                  <li><strong className="text-foreground">Data Shared:</strong> Email address and basic profile information</li>
                  <li><strong className="text-foreground">Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">https://policies.google.com/privacy</a></li>
                  <li><strong className="text-foreground">Control:</strong> Managed by Google&apos;s authentication system</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">4.2 No Third-Party Analytics or Advertising</h3>
            <p className="leading-relaxed mb-3">We do NOT use:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Analytics</li>
              <li>Facebook Pixel</li>
              <li>Advertising SDKs</li>
              <li>User tracking services</li>
              <li>Cross-app tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Your Privacy Rights</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">5.1 Under GDPR (European Users)</h3>
            <p className="leading-relaxed mb-3">If you are located in the European Economic Area (EEA), you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-foreground">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your data</li>
              <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong className="text-foreground">Right to Restrict Processing:</strong> Limit how we process your data</li>
              <li><strong className="text-foreground">Right to Object:</strong> Object to certain data processing activities</li>
              <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">Legal Basis for Processing:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Consent:</strong> AI receipt scanning, calendar integration</li>
              <li><strong className="text-foreground">Contract Performance:</strong> Providing subscription tracking services</li>
              <li><strong className="text-foreground">Legitimate Interest:</strong> App improvement and security</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">5.2 Under CCPA (California Users)</h3>
            <p className="leading-relaxed mb-3">If you are a California resident, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">Right to Know:</strong> Request information about data collection and use</li>
              <li><strong className="text-foreground">Right to Delete:</strong> Request deletion of your personal data</li>
              <li><strong className="text-foreground">Right to Opt-Out:</strong> Opt out of the &quot;sale&quot; of personal information (we do not sell data)</li>
              <li><strong className="text-foreground">Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">5.3 How to Exercise Your Rights</h3>
            <p className="leading-relaxed mb-3">To exercise any of these rights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-foreground">In-App:</strong> Go to Settings → Account → Privacy Settings → &quot;Request Data&quot; or &quot;Delete Account&quot;</li>
              <li><strong className="text-foreground">Email:</strong> Contact us at <a href="mailto:kansyl@juan-oclock.com" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">kansyl@juan-oclock.com</a></li>
              <li><strong className="text-foreground">Response Time:</strong> We will respond within 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">6.1 We Do Not Sell Your Data</h3>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties for monetary consideration.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">6.2 Limited Sharing</h3>
            <p className="leading-relaxed mb-3">We may share your data only in these specific circumstances:</p>
            
            <h4 className="text-lg font-medium mb-2 text-foreground">Service Providers:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Supabase (backend infrastructure)</li>
              <li>DeepSeek (AI receipt analysis, only when you use this feature)</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">Legal Compliance:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>When required by law, court order, or government regulation</li>
              <li>To protect our legal rights or defend against legal claims</li>
              <li>To prevent fraud, security threats, or illegal activity</li>
            </ul>

            <h4 className="text-lg font-medium mb-2 mt-4 text-foreground">Business Transfers:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new owner (you will be notified)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">6.3 No Cross-Border Data Transfers (Except as Specified)</h3>
            <p className="leading-relaxed">
              Your data is primarily stored in the United States (Supabase servers). If you are outside the US, your data may be transferred to and processed in the US.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Kansyl is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that a child under 13 has provided us with personal information, we will delete it immediately.
            </p>
            <p className="leading-relaxed mt-4">
              If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:kansyl@juan-oclock.com" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline">kansyl@juan-oclock.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Data Export and Deletion</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">8.1 Export Your Data</h3>
            <p className="leading-relaxed mb-3">You can export all your subscription data:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the app</li>
              <li>Go to Settings → Account → &quot;Export Data&quot;</li>
              <li>Receive a JSON file with all your subscription information</li>
            </ol>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">8.2 Delete Your Account and Data</h3>
            <p className="leading-relaxed mb-3">You can permanently delete your account and all associated data:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Open the app</li>
              <li>Go to Settings → Account → &quot;Delete Account&quot;</li>
              <li>Confirm deletion</li>
              <li>All your data will be permanently deleted within 30 days</li>
            </ol>
            <p className="leading-relaxed mt-4">
              <strong className="text-foreground">Note:</strong> Deletion is irreversible and cannot be undone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We do not use cookies as Kansyl is a native iOS app. We do not track you across websites or other apps.
            </p>
            <p className="leading-relaxed mt-4">
              <strong className="text-foreground">Analytics:</strong> We do not use third-party analytics services. Any app usage analytics are collected anonymously and used solely to improve the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">10. International Users</h2>
            <p className="leading-relaxed mb-3">Kansyl is designed to comply with:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>GDPR (General Data Protection Regulation) - European Union</li>
              <li>CCPA (California Consumer Privacy Act) - California, USA</li>
              <li>PIPEDA (Personal Information Protection and Electronic Documents Act) - Canada</li>
              <li>Apple&apos;s App Store Guidelines - Worldwide</li>
            </ul>
            <p className="leading-relaxed mt-4">
              If you use Kansyl from outside the United States, your data may be transferred to and processed in the US where Supabase servers are located.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed mb-3">We may update this Privacy Policy from time to time. When we make changes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>We will update the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>We will notify you through the app or via email (for material changes)</li>
              <li>Your continued use of the app after changes constitutes acceptance of the new policy</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Us</h2>
            <p className="leading-relaxed mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                <strong className="text-foreground">Email:</strong>{' '}
                <a href="mailto:kansyl@juan-oclock.com" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline underline-offset-2">
                  kansyl@juan-oclock.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">App:</strong> Settings → Support → &quot;Contact Us&quot;
              </li>
              <li>
                <strong className="text-foreground">Website:</strong>{' '}
                <a href="https://kansyl.juan-oclock.com" target="_blank" rel="noopener noreferrer" className="text-[#A8DE28] hover:text-[#A8DE28]/80 underline underline-offset-2">
                  https://kansyl.juan-oclock.com
                </a>
              </li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong className="text-foreground">Response Time:</strong> We aim to respond to all inquiries within 5 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Transparency Report</h2>
            
            <h3 className="text-xl font-medium mb-3 text-foreground">What Data We Collect:</h3>
            <ul className="list-none space-y-2">
              <li>✅ Email address (for authentication)</li>
              <li>✅ Subscription information you enter</li>
              <li>✅ Receipt text (only when using AI scanning)</li>
              <li>✅ Basic app usage data (anonymized)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">Where Your Data is Stored:</h3>
            <ul className="list-none space-y-2">
              <li>✅ Locally on your device (Core Data)</li>
              <li>❌ NOT on cloud servers</li>
              <li>❌ NOT synced to iCloud (in v1.0)</li>
              <li>❌ NOT uploaded to Supabase</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">What Data We DO NOT Collect:</h3>
            <ul className="list-none space-y-2">
              <li>❌ Credit card or payment information</li>
              <li>❌ Social Security numbers or government IDs</li>
              <li>❌ Location data or GPS coordinates</li>
              <li>❌ Contacts or phone numbers</li>
              <li>❌ Messages or communications</li>
              <li>❌ Browsing history or search queries</li>
              <li>❌ Receipt images (only text is extracted locally)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">How We Use Your Data:</h3>
            <ul className="list-none space-y-2">
              <li>✅ Provide subscription tracking services</li>
              <li>✅ Store your data securely on your device</li>
              <li>✅ Send renewal reminders</li>
              <li>✅ Analyze receipts with AI (opt-in feature)</li>
              <li>✅ Improve app functionality</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">How We DO NOT Use Your Data:</h3>
            <ul className="list-none space-y-2">
              <li>❌ Sell or rent to third parties</li>
              <li>❌ Show advertisements</li>
              <li>❌ Track you across other apps</li>
              <li>❌ Train AI models without consent</li>
              <li>❌ Share with marketers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">14. Your Consent</h2>
            <p className="leading-relaxed mb-3">
              By using Kansyl, you consent to this Privacy Policy and agree to its terms.
            </p>
            <p className="leading-relaxed mb-3">You can withdraw consent at any time by:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Disabling specific permissions in iOS Settings</li>
              <li>Deleting your account</li>
              <li>Uninstalling the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">15. Compliance Certifications</h2>
            <ul className="list-none space-y-2">
              <li>✅ <strong className="text-foreground">GDPR Compliant:</strong> European data protection standards</li>
              <li>✅ <strong className="text-foreground">CCPA Compliant:</strong> California privacy regulations</li>
              <li>✅ <strong className="text-foreground">Apple App Store Guidelines:</strong> Privacy and security requirements</li>
              <li>✅ <strong className="text-foreground">HTTPS/TLS Encryption:</strong> All network communications</li>
              <li>✅ <strong className="text-foreground">SOC 2 Type II:</strong> Our backend provider (Supabase) is certified</li>
            </ul>
          </section>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground text-center">Thank you for trusting Kansyl with your subscription management!</h2>
            <p className="leading-relaxed text-center italic">
              This Privacy Policy is written in plain English to be easily understood. If you have any questions about any section, please don&apos;t hesitate to contact us.
            </p>
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
          <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="mailto:kansyl@juan-oclock.com" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://github.com/Juan-Oclock/kansyl" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </footer>
    </main>
  )
}