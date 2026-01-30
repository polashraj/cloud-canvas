import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Cloud, Zap, Lock, Users, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Private Cloud",
    description: "Dedicated cloud infrastructure for your organization's needs.",
  },
  {
    icon: Zap,
    title: "Enterprise Performance",
    description: "Guaranteed performance with SLA uptime of 99.99% or higher.",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "HIPAA, SOC2, ISO27001 compliant with advanced encryption.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "24/7 dedicated account management and technical support team.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time monitoring, reporting, and cost optimization tools.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across multiple regions with automatic failover.",
  },
];

export default function EnterpriseCloud() {
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
              <Cloud className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Business Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Enterprise Cloud</span>
              <br />
              <span className="gradient-text">Dedicated Infrastructure</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Fully managed cloud infrastructure with enterprise-grade security, compliance, and dedicated support. Designed for mission-critical applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Contact Sales
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Custom pricing based on your requirements
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">Enterprise Cloud</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solution for enterprise organizations.
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

      {/* Services Included */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Cloud Solution</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything included in your enterprise cloud package.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
                <ul className="space-y-3">
                  {["Dedicated servers", "Private network", "Load balancing", "Auto-scaling", "Database management"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Management & Support</h3>
                <ul className="space-y-3">
                  {["24/7 monitoring", "Incident response", "Backup & disaster recovery", "Patch management", "Performance optimization"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Enterprise Cloud?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our sales team is ready to discuss your organization's cloud infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Schedule Consultation
              </Button>
              <Button variant="hero-outline" size="xl">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
