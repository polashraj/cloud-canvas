import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Zap, value: "99.99%", label: "Uptime SLA" },
  { icon: Shield, value: "24/7", label: "DDoS Protection" },
  { icon: Clock, value: "<50ms", label: "Global Latency" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">New: Enterprise Cloud Solutions Available</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Lightning-Fast</span>
            <br />
            <span className="gradient-text">Cloud Hosting</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Deploy globally in seconds. Scale infinitely. Built for developers, loved by enterprises. Experience hosting that just works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              View Pricing
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 hidden xl:block animate-float">
          <div className="w-16 h-16 rounded-2xl card-gradient border border-border flex items-center justify-center shadow-lg">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
        <div className="absolute top-1/2 right-10 hidden xl:block animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-14 h-14 rounded-2xl card-gradient border border-border flex items-center justify-center shadow-lg">
            <span className="text-xl">⚡</span>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-20 hidden xl:block animate-float" style={{ animationDelay: "4s" }}>
          <div className="w-12 h-12 rounded-xl card-gradient border border-border flex items-center justify-center shadow-lg">
            <span className="text-lg">🔒</span>
          </div>
        </div>
      </div>
    </section>
  );
}
