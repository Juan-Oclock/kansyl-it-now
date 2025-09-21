"use client"

import React from 'react'
import Image from 'next/image'
import { DotGridHero } from "@/components/dot-grid-reactbits"
import { PhoneMockup } from "@/components/phone-mockup"
import { NumberTicker } from "@/components/number-ticker"
import { Reveal } from "@/components/reveal"
import { AnimatedGradientButton } from "@/components/animated-gradient-button"
import { FloatingFeatureCard, FloatingFeatureGrid } from "@/components/floating-feature-cards"
import { AnimatedText, GlitchText } from "@/components/animated-text"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Zap, Bell, TrendingUp, Shield, Cog, UserCheck, Check, Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  return (
    <main>
      {/* Sticky nav */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <a href="#" className="font-semibold">Kansyl</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="container flex flex-col gap-4 py-4 text-sm">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#how" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]">
        <DotGridHero className="-z-10" />
        <div className="container relative z-10 grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
                <AnimatedText animation="stagger" delay={0.2}>
                  Never forget a free trial again
                </AnimatedText>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                <AnimatedText animation="fadeInUp" delay={0.6}>
                  Track free trials, get smart reminders, and stop wasting money on forgotten subscriptions.
                </AnimatedText>
              </p>
            </Reveal>
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <AnimatedGradientButton gradientColor="primary" className="w-full sm:w-auto h-12 sm:h-10 text-base font-semibold">
                Download from the App Store
              </AnimatedGradientButton>
              <Button variant="ghost" className="w-full sm:w-auto h-12 sm:h-10 text-base font-semibold border border-gray-400 hover:bg-[#A8DE28] hover:text-black hover:border-[#A8DE28] transition-all duration-200">See how it works</Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border px-3 py-1">iOS 15+</span>
              <span className="rounded-full border px-3 py-1">Privacy-first</span>
              <span className="rounded-full border px-3 py-1">No account required</span>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="container py-16 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">
            <AnimatedText animation="gradientWipe" delay={0.2}>
              Everything you need to stay on top of trials
            </AnimatedText>
          </h2>
          <p className="mt-2 text-muted-foreground">
            <AnimatedText animation="fadeInUp" delay={0.4}>
              Lightning-fast entry, smart reminders, and privacy-first design.
            </AnimatedText>
          </p>
        </Reveal>
        
        {/* React Bits Enhanced Feature Cards */}
        <FloatingFeatureGrid className="mt-8">
          <FloatingFeatureCard 
            title="Lightning-fast trial entry" 
            description="Add a trial in under 30 seconds with service templates and smart defaults."
            icon={<Zap className="w-8 h-8" />}
            delay={0.1}
          />
          <FloatingFeatureCard 
            title="Smart notifications" 
            description="3-day, 1-day, and day-of reminders with rich actions."
            icon={<Bell className="w-8 h-8" />}
            delay={0.2}
          />
          <FloatingFeatureCard 
            title="Savings tracking" 
            description="See how much you've saved and build better subscription habits."
            icon={<TrendingUp className="w-8 h-8" />}
            delay={0.3}
          />
          <FloatingFeatureCard 
            title="Privacy-first" 
            description="Local Core Data storage. No data selling. Opt-in analytics only."
            icon={<Shield className="w-8 h-8" />}
            delay={0.4}
          />
          <FloatingFeatureCard 
            title="Power features" 
            description="Siri Shortcuts, Share Extension, Widgets, iCloud sync, export options."
            icon={<Cog className="w-8 h-8" />}
            delay={0.5}
          />
          <FloatingFeatureCard 
            title="No account required" 
            description="Start tracking instantly with no sign-up friction."
            icon={<UserCheck className="w-8 h-8" />}
            delay={0.6}
          />
        </FloatingFeatureGrid>
      </section>

      {/* Animated stats */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-8 text-center sm:grid-cols-3 px-4">
          <div>
            <div className="text-3xl font-semibold"><NumberTicker end={248} prefix="$" /></div>
            <p className="text-sm text-muted-foreground">Average saved / year</p>
          </div>
          <div>
            <div className="text-3xl font-semibold"><NumberTicker end={1240} /></div>
            <p className="text-sm text-muted-foreground">Trials tracked</p>
          </div>
          <div>
            <div className="text-3xl font-semibold"><NumberTicker end={4821} /></div>
            <p className="text-sm text-muted-foreground">Reminders sent</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container py-16 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            <AnimatedText animation="gradientWipe" delay={0.2}>
              How it works
            </AnimatedText>
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            <AnimatedText animation="fadeInUp" delay={0.4}>
              Three simple steps to never miss a cancel date
            </AnimatedText>
          </p>
        </Reveal>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-2 items-center lg:gap-2 lg:max-w-4xl lg:mx-auto">
          {/* Left column - Video/Demo */}
          <Reveal delay={0.2}>
            <div className="flex justify-center lg:justify-end lg:mr-[-3rem]">
              <div className="relative group lg:pr-20">
                <div className="relative w-[280px] sm:w-[320px] md:w-[360px] h-[500px] sm:h-[570px] md:h-[640px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/video/kansel app demo.gif"
                    alt="Kansyl app demo showing how to add trials and manage subscriptions"
                    fill
                    className="object-cover object-center"
                    unoptimized={true}
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
          
          {/* Right column - Steps */}
          <div className="flex flex-col justify-center space-y-4">
            {[
              { 
                title: "Add your trial", 
                desc: "Templates & smart defaults"
              },
              { 
                title: "Get smart reminders", 
                desc: "3-day, 1-day, and day-of"
              },
              { 
                title: "Cancel or continue", 
                desc: "Track savings & build habits"
              }
            ].map((step, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1}>
                <div className="group relative">
                  {/* Connection line */}
                  {i < 2 && (
                    <div className="absolute left-6 top-14 h-8 w-0.5 bg-gradient-to-b from-muted-foreground/20 to-transparent"></div>
                  )}
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-default">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300">
                        <span className="text-lg font-semibold text-primary">{i + 1}</span>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-medium">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-16 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            <AnimatedText animation="gradientWipe" delay={0.2}>
              Simple, transparent pricing
            </AnimatedText>
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            <AnimatedText animation="fadeInUp" delay={0.4}>
              Choose the plan that works best for you
            </AnimatedText>
          </p>
        </Reveal>
        
        {/* Pricing Cards */}
        <div className="mt-12 mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Monthly */}
            <Reveal delay={0.1}>
              <Card className="relative overflow-hidden bg-background/60 backdrop-blur border-muted hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl">Monthly</CardTitle>
                  <CardDescription>Pay as you go</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$2.99</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            
            {/* Yearly - Most Popular */}
            <Reveal delay={0.2}>
              <Card className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background border-primary/50 shadow-lg md:scale-105 md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    MOST POPULAR
                  </span>
                </div>
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl">Yearly</CardTitle>
                  <CardDescription>Best value for regular users</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$19.99</span>
                    <span className="text-muted-foreground ml-2">/year</span>
                  </div>
                  <p className="text-sm text-primary mt-2 font-medium">Save 44%</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
            
            {/* Lifetime */}
            <Reveal delay={0.3}>
              <Card className="relative overflow-hidden bg-background/60 backdrop-blur border-muted hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-8">
                  <CardTitle className="text-xl">Lifetime</CardTitle>
                  <CardDescription>One-time purchase</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">$49.99</span>
                    <span className="text-muted-foreground ml-2">once</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Forever access</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          </div>
          
          {/* Premium Features List */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">All plans include</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Unlimited subscriptions</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>AI receipt scanning</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Siri Shortcuts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Smart notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Calendar sync</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Full history</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>iCloud backup</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Priority support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Section - Sleek and Minimal */}
      <section className="container py-16 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 backdrop-blur-sm p-8 md:p-12 shadow-lg shadow-primary/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Free Trial Available
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3">Start Free, Upgrade Anytime</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track up to 5 subscriptions for free. No credit card required. 
                    Upgrade to Premium when you need more.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:flex-shrink-0">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Download Free
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">iOS 15+ Required</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">FAQs</h2>
          </Reveal>
          <div className="mt-6">
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do reminders work?</AccordionTrigger>
              <AccordionContent>
                3-day, 1-day, and day-of reminders with rich actions. You control notification settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What data is stored and where?</AccordionTrigger>
              <AccordionContent>
                Your data lives locally in Core Data. We don&apos;t sell data. Analytics are opt-in only.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it sync with iCloud?</AccordionTrigger>
              <AccordionContent>
                Yes. iCloud sync keeps your trials up-to-date across devices, privately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Which devices are supported?</AccordionTrigger>
              <AccordionContent>
                iOS 15+ on iPhone. More platforms may come later.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What&apos;s in Premium vs Free?</AccordionTrigger>
              <AccordionContent>
                Free gets the basics. Premium adds savings tracking, Shortcuts, widgets, iCloud sync, and export.
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container text-center">
          <h3 className="text-3xl font-semibold">
            <GlitchText intensity="low">
              Never forget a free trial again
            </GlitchText>
          </h3>
          <p className="mt-2 text-muted-foreground">
            <AnimatedText animation="typewriter" delay={0.5}>
              Avoid unwanted charges with smart reminders and privacy-first design.
            </AnimatedText>
          </p>
          <div className="mt-6 flex justify-center">
            <AnimatedGradientButton size="lg" gradientColor="success">
              Download from the App Store
            </AnimatedGradientButton>
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="text-sm text-muted-foreground">© 2025 Kansyl</div>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Support</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          <a href="https://github.com/" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </footer>
    </main>
  )
}
