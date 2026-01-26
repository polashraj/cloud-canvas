import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative card-gradient border border-border rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Start in under 60 seconds</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Launch Your <span className="gradient-text">Next Project?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of developers and businesses who trust NexusHost for their mission-critical applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Talk to Sales
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free tier forever • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
