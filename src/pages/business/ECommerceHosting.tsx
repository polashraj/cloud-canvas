import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, ShoppingCart, Zap, Lock, BarChart3, Users, Globe } from "lucide-react";

const ecommercePlans = [
  {
    name: "Starter Store",
    price: "$19.99",
    period: "/month",
    description: "Perfect for new online stores",
    features: [
      "1 WooCommerce Store",
      "20 GB SSD Storage",
      "5,000 Products Supported",
      "Basic Payment Gateways",
      "Email Marketing Integration",
      "Free SSL Certificate",
      "Automatic Backups",
    ],
  },
  {
    name: "Growing Store",
    price: "$49.99",
    period: "/month",
    description: "For established e-commerce",
    popular: true,
    features: [
      "3 WooCommerce Stores",
      "100 GB SSD Storage",
      "50,000 Products Supported",
      "All Payment Gateways",
      "Advanced Marketing Tools",
      "Wildcard SSL",
      "Hourly Backups",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    name: "Enterprise Store",
    price: "$149.99",
    period: "/month",
    description: "For high-volume sellers",
    features: [
      "Unlimited Stores",
      "500 GB SSD Storage",
      "Unlimited Products",
      "Custom Payment Solutions",
      "Full Marketing Suite",
      "EV SSL Certificate",
      "Real-time Backups",
      "24/7 Dedicated Support",
      "Advanced Analytics",
      "API Access",
    ],
  },
];

const features = [
  {
    icon: ShoppingCart,
    title: "E-commerce Ready",
    description: "Pre-configured with WooCommerce, Shopify compatibility, and shopping cart optimization.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Optimized for product pages and checkout speed. Every millisecond matters.",
  },
  {
    icon: Lock,
    title: "Payment Security",
    description: "PCI-DSS compliant with fraud detection and secure payment processing.",
  },
  {
    icon: BarChart3,
    title: "Built-in Analytics",
    description: "Track sales, customer behavior, and conversion metrics in real-time.",
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "24/7 e-commerce specialists ready to help with your store.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Multi-currency support, international shipping, and geo-targeting.",
  },
];

export default function ECommerceHosting() {
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
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Business Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">E-commerce Hosting</span>
              <br />
              <span className="gradient-text">Sell Online with Confidence</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Purpose-built hosting for online stores. Built-in payment processing, inventory management, and analytics to help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Start Your Store
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
              Hosting Plans for <span className="gradient-text">Every Store Size</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Start small and scale as your business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ecommercePlans.map((plan, index) => (
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
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete e-commerce solution with all the tools your store needs.
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
