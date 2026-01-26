import { Star } from "lucide-react";

const testimonials = [
  {
    content: "NexusHost transformed our deployment workflow. What used to take hours now takes minutes. The uptime is incredible.",
    author: "Sarah Chen",
    role: "CTO, TechStartup Inc.",
    avatar: "SC",
  },
  {
    content: "Best hosting decision we ever made. The support team is exceptional and the performance is unmatched.",
    author: "Marcus Johnson",
    role: "Lead Developer, DevAgency",
    avatar: "MJ",
  },
  {
    content: "We scaled from 1,000 to 1 million users without a single hiccup. NexusHost handled everything seamlessly.",
    author: "Emily Rodriguez",
    role: "Founder, ScaleApp",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">10,000+</span> Developers
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers have to say about their experience with NexusHost.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="card-gradient border border-border rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-medium text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Powering applications for industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["TechCorp", "StartupIO", "DevLabs", "CloudCo", "DataFlow"].map((company) => (
              <span key={company} className="text-xl font-bold text-muted-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
