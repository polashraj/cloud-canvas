import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Shield, Zap, BarChart3, AlertCircle, Globe, Clock } from "lucide-react";

const protectionLevels = [
  {
    name: "Basic",
    price: "$9.99",
    period: "/month",
    description: "Essential DDoS protection for small sites",
    features: [
      "Up to 10 Gbps Protection",
      "Basic Attack Mitigation",
      "24/7 Monitoring",
      "IP Reputation Filtering",
      "Automatic Threat Detection",
    ],
  },
  {
    name: "Professional",
    price: "$29.99",
    period: "/month",
    description: "Advanced protection for growing businesses",
    popular: true,
    features: [
      "Up to 100 Gbps Protection",
      "Advanced ML-Based Detection",
      "24/7 Monitoring & Response",
      "IP Reputation Filtering",
      "Automatic Threat Detection",
      "Real-time Analytics",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Mission-critical DDoS protection",
    features: [
      "Unlimited Protection",
      "Dedicated Security Team",
      "24/7 Active Monitoring",
      "Adaptive Algorithms",
      "Real-time Analytics",
      "Incident Response",
      "Custom SLA",
      "On-Call Support",
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: "Multi-Layer Protection",
    description: "Protects against L3, L4, L7 and application-layer attacks.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor attacks and mitigation in real-time with detailed dashboards.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Response",
    description: "Automatic attack detection and mitigation in milliseconds.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Protected by a global network of 500+ POPs worldwide.",
  },
  {
    icon: AlertCircle,
    title: "Smart Alerts",
    description: "Intelligent notifications keep you informed of threats.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description: "Guaranteed uptime with redundant infrastructure.",
  },
];

const attackTypes = [
  { name: "Volumetric Attacks", protected: true },
  { name: "Protocol Attacks", protected: true },
  { name: "Application Layer", protected: true },
  { name: "DNS Amplification", protected: true },
  { name: "SYN Floods", protected: true },
  { name: "UDP Floods", protected: true },
];

export default function DDoSProtection() {
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Security Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">DDoS Protection</span>
              <br />
              <span className="gradient-text">Stay Online, Always</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Enterprise-grade DDoS mitigation that stops attacks before they reach your infrastructure. Protect against all attack vectors with our intelligent defense system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Start Protection
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Protection Level</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Scalable DDoS protection for every size of business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {protectionLevels.map((level, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  level.popular
                    ? "card-gradient border-2 border-primary shadow-glow"
                    : "card-gradient border border-border"
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{level.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{level.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{level.price}</span>
                    <span className="text-muted-foreground text-sm">{level.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={level.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attack Types Protected */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Attack Protection</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We protect against all known DDoS attack vectors.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {attackTypes.map((attack, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{attack.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our DDoS Protection?
            </h2>
            <p className="text-muted-foreground text-lg">
              Industry-leading protection with transparent pricing and excellent support.
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
