import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, HardDrive, Clock, RefreshCw, Lock, Shield, Database } from "lucide-react";

const backupPlans = [
  {
    name: "Essential",
    price: "$4.99",
    period: "/month",
    description: "Daily automated backups for peace of mind",
    features: [
      "Daily Automated Backups",
      "30 Day Retention",
      "1-Click Restore",
      "Email Notifications",
      "File-Level Recovery",
    ],
  },
  {
    name: "Professional",
    price: "$9.99",
    period: "/month",
    description: "Hourly backups with extended retention",
    popular: true,
    features: [
      "Hourly Automated Backups",
      "90 Day Retention",
      "1-Click Restore",
      "Real-time Alerts",
      "Database Backups",
      "Bandwidth Unlimited",
      "Multiple Restore Points",
    ],
  },
  {
    name: "Enterprise",
    price: "$24.99",
    period: "/month",
    description: "Mission-critical backup solution",
    features: [
      "15-Min Interval Backups",
      "1 Year Retention",
      "Instant Restore",
      "24/7 Priority Support",
      "Multi-Site Backups",
      "Geo-Redundant Storage",
      "Custom Retention Policies",
      "Compliance Reports",
    ],
  },
];

const features = [
  {
    icon: Clock,
    title: "Automatic Scheduling",
    description: "Set and forget. Backups run on your schedule without manual intervention.",
  },
  {
    icon: Database,
    title: "Database Protection",
    description: "Complete MySQL, PostgreSQL, and MongoDB backup solutions.",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "AES-256 encryption for data at rest and in transit.",
  },
  {
    icon: HardDrive,
    title: "Unlimited Storage",
    description: "Store as many backups as needed with our cloud storage.",
  },
  {
    icon: RefreshCw,
    title: "One-Click Restore",
    description: "Recover your entire website or specific files instantly.",
  },
  {
    icon: Shield,
    title: "Disaster Recovery",
    description: "Recover from ransomware, hacks, or accidental deletions.",
  },
];

export default function BackupSolutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
              <HardDrive className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Security Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Backup Solutions</span>
              <br />
              <span className="gradient-text">Never Lose Data Again</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automated, encrypted backups with one-click restore. Protect your website and data from disaster with our enterprise-grade backup solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Backup Plan</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible backup options for every budget and requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {backupPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "card-gradient border-2 border-primary shadow-glow"
                    : "card-gradient border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Backup with Us?
            </h2>
            <p className="text-muted-foreground text-lg">
              Industry-leading backup technology with unmatched reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
