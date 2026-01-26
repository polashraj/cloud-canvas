import { Server, Globe, Cpu, Cloud, Mail, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Shared Hosting",
    description: "Perfect for beginners. Get started with reliable hosting at an affordable price.",
    price: "From $2.99/mo",
  },
  {
    icon: Globe,
    title: "WordPress Hosting",
    description: "Optimized for WordPress with 1-click installs and automatic updates.",
    price: "From $4.99/mo",
  },
  {
    icon: Cpu,
    title: "VPS Hosting",
    description: "Full root access with dedicated resources for complete control.",
    price: "From $9.99/mo",
  },
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Auto-scaling infrastructure that grows with your traffic.",
    price: "From $14.99/mo",
  },
  {
    icon: Server,
    title: "Dedicated Servers",
    description: "Maximum performance with hardware dedicated entirely to you.",
    price: "From $79.99/mo",
  },
  {
    icon: Mail,
    title: "Email Hosting",
    description: "Professional email with your domain. Spam protection included.",
    price: "From $1.99/mo",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hosting Solutions for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From personal blogs to enterprise applications, we have the perfect hosting solution for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-mono text-primary">{feature.price}</span>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
