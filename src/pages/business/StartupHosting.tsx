import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Rocket, Zap, Code, Users, TrendingUp, Lightbulb } from "lucide-react";

const startupPlans = [
  {
    name: "MVP Stage",
    price: "$29.99",
    period: "/month",
    description: "Launch your prototype",
    features: [
      "4 vCPU Cores",
      "8 GB RAM",
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Full Developer Access",
      "Git Integration",
      "API Access",
    ],
  },
  {
    name: "Growth Stage",
    price: "$79.99",
    period: "/month",
    description: "Scale your operations",
    popular: true,
    features: [
      "8 vCPU Cores",
      "16 GB RAM",
      "250 GB SSD Storage",
      "Unmetered Bandwidth",
      "Full Developer Access",
      "CI/CD Pipeline",
      "Database Backups",
      "Priority Support",
      "Startup Mentorship",
    ],
  },
  {
    name: "Series A",
    price: "$199.99",
    period: "/month",
    description: "Enterprise-ready infrastructure",
    features: [
      "16 vCPU Cores",
      "32 GB RAM",
      "500 GB SSD Storage",
      "Dedicated IP",
      "Full Developer Access",
      "Advanced CI/CD",
      "Real-time Analytics",
      "24/7 Dedicated Support",
      "Investor Relations Help",
    ],
  },
];

const features = [
  {
    icon: Rocket,
    title: "Launch Ready",
    description: "Deploy your MVP in minutes with pre-configured environments.",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Full Git integration, SSH access, and command-line tools included.",
  },
  {
    icon: Zap,
    title: "Auto-Scaling",
    description: "Automatically handle traffic spikes without manual intervention.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Invite your team with role-based access controls.",
  },
  {
    icon: TrendingUp,
    title: "Growth Resources",
    description: "Access to growth hacking guides, best practices, and case studies.",
  },
  {
    icon: Lightbulb,
    title: "Startup Support",
    description: "Mentorship from experienced entrepreneurs and technical experts.",
  },
];

export default function StartupHosting() {
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
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Business Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Startup Hosting</span>
              <br />
              <span className="gradient-text">Built for Founders</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Infrastructure designed for startups at every stage. From MVP to Series A, we've got the tools and support you need to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Launch Your Startup
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hosting for <span className="gradient-text">Every Stage</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Grow from MVP to scale-up with infrastructure that grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {startupPlans.map((plan, index) => (
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

      {/* Features */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Startup-Focused <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tools and support designed specifically for founding teams.
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
