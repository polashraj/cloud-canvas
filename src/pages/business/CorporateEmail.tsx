import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Mail, Shield, Users, BarChart3, Lock, Globe } from "lucide-react";

const emailPlans = [
  {
    name: "Small Team",
    price: "$4.99",
    period: "/user/month",
    description: "For teams up to 10 people",
    features: [
      "100 GB Storage per User",
      "Custom Domain Email",
      "Advanced Security",
      "Team Management",
      "Shared Calendars",
      "Distribution Lists",
      "Mobile Sync",
    ],
  },
  {
    name: "Growing Company",
    price: "$7.99",
    period: "/user/month",
    description: "For teams 10-100 people",
    popular: true,
    features: [
      "Unlimited Storage",
      "Custom Domain Email",
      "Advanced Collaboration",
      "Team Management",
      "Shared Resources",
      "Advanced Security",
      "Analytics",
      "Priority Support",
      "SSO Integration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      "Unlimited Storage",
      "Multi-Domain Support",
      "Advanced Compliance",
      "Custom Workflows",
      "Advanced Analytics",
      "Dedicated Account Manager",
      "24/7 Premium Support",
      "Custom Integration",
      "On-Premise Option",
    ],
  },
];

const features = [
  {
    icon: Mail,
    title: "Professional Email",
    description: "Custom domain email addresses for your entire team.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Shared calendars, contacts, and resource management.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "End-to-end encryption, advanced threat protection, and compliance tools.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track email metrics, usage, and compliance reporting.",
  },
  {
    icon: Shield,
    title: "Advanced Protection",
    description: "Spam filtering, malware detection, and data loss prevention.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Support for multiple languages and international compliance.",
  },
];

export default function CorporateEmail() {
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
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Business Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Corporate Email</span>
              <br />
              <span className="gradient-text">For Enterprise Teams</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Professional email hosting with advanced collaboration, security, and compliance features. Perfect for enterprise organizations.
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

      {/* Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plans for <span className="gradient-text">Every Organization</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Scale your email infrastructure with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {emailPlans.map((plan, index) => (
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
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
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
              Enterprise <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Advanced capabilities for modern corporate teams.
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
