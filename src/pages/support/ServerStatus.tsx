import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertCircle, Clock, TrendingUp } from "lucide-react";

const servers = [
  {
    name: "US West (California)",
    status: "operational",
    uptime: "99.99%",
    latency: "12ms",
    locations: ["US-West-1", "US-West-2"],
  },
  {
    name: "US East (Virginia)",
    status: "operational",
    uptime: "99.99%",
    latency: "8ms",
    locations: ["US-East-1", "US-East-2"],
  },
  {
    name: "Europe (London)",
    status: "operational",
    uptime: "99.98%",
    latency: "15ms",
    locations: ["EU-West-1"],
  },
  {
    name: "Asia Pacific (Singapore)",
    status: "operational",
    uptime: "99.97%",
    latency: "25ms",
    locations: ["AP-Southeast-1"],
  },
];

const recentIncidents = [
  {
    date: "Jan 28, 2024",
    title: "Scheduled Maintenance - US East",
    duration: "30 minutes",
    status: "completed",
  },
  {
    date: "Jan 25, 2024",
    title: "Brief Email Service Interruption",
    duration: "15 minutes",
    status: "resolved",
  },
  {
    date: "Jan 20, 2024",
    title: "Scheduled Database Upgrades",
    duration: "1 hour",
    status: "completed",
  },
];

export default function ServerStatus() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">All Systems Operational</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Server Status</span>
              <br />
              <span className="gradient-text">System Health</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Real-time monitoring of all NexusHost infrastructure and services. Get instant updates on service status.
            </p>
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Data Center <span className="gradient-text">Status</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Current status of all global data centers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servers.map((server, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{server.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm text-green-500">Operational</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Uptime</p>
                      <p className="text-lg font-semibold text-foreground">{server.uptime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Latency</p>
                      <p className="text-lg font-semibold text-foreground">{server.latency}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">Locations:</p>
                    <div className="flex flex-wrap gap-2">
                      {server.locations.map((location) => (
                        <span
                          key={location}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service <span className="gradient-text">Status</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Status of all NexusHost services and systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              { service: "Web Hosting", status: "Operational", uptime: "99.99%" },
              { service: "Email Services", status: "Operational", uptime: "99.98%" },
              { service: "DNS Services", status: "Operational", uptime: "99.99%" },
              { service: "Domain Services", status: "Operational", uptime: "99.97%" },
              { service: "Control Panel", status: "Operational", uptime: "99.99%" },
              { service: "API Services", status: "Operational", uptime: "99.96%" },
            ].map((service, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{service.service}</h3>
                      <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="gradient-text">Incidents</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Historical incident log for the last 30 days
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {recentIncidents.map((incident, index) => (
              <Card key={index} className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-xs text-muted-foreground">{incident.date}</p>
                        <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full">
                          {incident.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{incident.title}</h3>
                      <p className="text-sm text-muted-foreground">Duration: {incident.duration}</p>
                    </div>
                    <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Stats */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Platform <span className="gradient-text">Reliability</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Last 30 days of service reliability metrics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card border-border/50">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">99.98%</p>
                  <p className="text-muted-foreground">Average Uptime</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardContent className="p-6 text-center">
                  <AlertCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">2</p>
                  <p className="text-muted-foreground">Incidents</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">45m</p>
                  <p className="text-muted-foreground">Total Downtime</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
