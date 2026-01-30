import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Lock, Shield, Globe, Zap, Clock, BarChart } from "lucide-react";

const sslTypes = [
  {
    title: "Domain Validated (DV)",
    price: "FREE",
    features: [
      "Standard SSL encryption",
      "Single domain protection",
      "5-minute validation",
      "1-year validity",
      "Support 24/7",
      "Auto-renewal included",
    ],
    icon: Lock,
  },
  {
    title: "Organization Validated (OV)",
    price: "$79.99",
    period: "/year",
    features: [
      "Enhanced validation",
      "Organization name in cert",
      "Organization display",
      "1-year validity",
      "Support 24/7",
      "Auto-renewal included",
      "Warranty included",
    ],
    icon: Shield,
    popular: true,
  },
  {
    title: "Extended Validation (EV)",
    price: "$199.99",
    period: "/year",
    features: [
      "Highest trust level",
      "Green address bar",
      "Full organization verification",
      "1-year validity",
      "Support 24/7",
      "Auto-renewal included",
      "$1.75M warranty",
    ],
    icon: Globe,
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Start using your SSL certificate immediately after validation.",
  },
  {
    icon: Clock,
    title: "Fast Validation",
    description: "Domain validation completed in minutes, not hours.",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "256-bit encryption standard for maximum security.",
  },
  {
    icon: BarChart,
    title: "SEO Boost",
    description: "HTTPS is now a Google ranking signal. Improve your SEO.",
  },
  {
    icon: Shield,
    title: "Browser Compatibility",
    description: "Works on 99.9% of browsers and devices worldwide.",
  },
  {
    icon: Globe,
    title: "Unlimited Reissuance",
    description: "Reissue your certificate anytime without additional fees.",
  },
];

export default function SSLCertificates() {
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
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Security Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">SSL Certificates</span>
              <br />
              <span className="gradient-text">Secure Your Website</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Protect your visitors and boost your SEO with industry-leading SSL certificates. Choose from DV, OV, or EV validation levels.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Free SSL
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Compare Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SSL Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">SSL Certificate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Select the validation level that best fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sslTypes.map((ssl, index) => {
              const Icon = ssl.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    ssl.popular
                      ? "card-gradient border-2 border-primary shadow-glow"
                      : "card-gradient border border-border"
                  }`}
                >
                  {ssl.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{ssl.title}</h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-foreground">{ssl.price}</span>
                      {ssl.period && <span className="text-muted-foreground">{ssl.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {ssl.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={ssl.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our SSL Certificates?
            </h2>
            <p className="text-muted-foreground text-lg">
              Industry-leading security with unmatched customer support.
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
