import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal projects and small websites",
    price: "4.99",
    period: "/mo",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    description: "For growing businesses with higher demands",
    price: "14.99",
    period: "/mo",
    features: [
      "Unlimited Websites",
      "100 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Daily Backups",
      "Priority Support",
      "Staging Environment",
      "CDN Included",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Maximum power for demanding applications",
    price: "49.99",
    period: "/mo",
    features: [
      "Unlimited Websites",
      "500 GB NVMe Storage",
      "Unmetered Bandwidth",
      "Wildcard SSL",
      "Hourly Backups",
      "Dedicated Support",
      "Multiple Environments",
      "Global CDN",
      "DDoS Protection Pro",
      "Custom Solutions",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees. No surprises. Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative card-gradient border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <p className="text-center text-muted-foreground mt-12">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}
