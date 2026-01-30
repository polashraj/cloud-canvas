import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Clock, MapPin } from "lucide-react";

const supportChannels = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our experts directly",
    info: "+1 (800) 123-4567",
    availability: "24/7 Available",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses",
    info: "support@nexushost.com",
    availability: "Response within 1 hour",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant messaging support",
    info: "Available on website",
    availability: "24/7 Available",
  },
  {
    icon: Clock,
    title: "Ticket System",
    description: "Track your support requests",
    info: "tickets.nexushost.com",
    availability: "24/7 Available",
  },
];

export default function ContactSupport() {
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
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Get in Touch</span>
              <br />
              <span className="gradient-text">We're Here to Help</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Contact our support team through multiple channels. We're available 24/7 to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">{channel.info}</p>
                      <p className="text-xs text-primary">{channel.availability}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" className="bg-background border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-background border-border" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject" className="bg-background border-border">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <Select>
                      <SelectTrigger id="service" className="bg-background border-border">
                        <SelectValue placeholder="Select your service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hosting">Web Hosting</SelectItem>
                        <SelectItem value="domains">Domain Services</SelectItem>
                        <SelectItem value="email">Email Hosting</SelectItem>
                        <SelectItem value="security">Security Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help..." 
                      className="bg-background border-border min-h-[150px]"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll get back to you within 1 business hour
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Office Locations</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Visit us in person or reach out remotely
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { city: "San Francisco", address: "123 Tech Street, SF, CA 94105", phone: "+1 (415) 555-1234" },
              { city: "New York", address: "456 Business Ave, NY, NY 10001", phone: "+1 (212) 555-5678" },
              { city: "London", address: "789 Office Lane, London, UK SW1A 1AA", phone: "+44 20 7123 4567" },
            ].map((office, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{office.city}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
                  <p className="text-sm font-medium text-primary">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
