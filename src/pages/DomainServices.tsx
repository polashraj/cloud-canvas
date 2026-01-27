import { useState } from "react";
import { Search, Globe, Shield, Clock, RefreshCw, Lock, Server, Zap, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const tldPricing = [
  { tld: ".com", register: 12.99, renew: 14.99, transfer: 12.99, popular: true },
  { tld: ".net", register: 14.99, renew: 16.99, transfer: 14.99, popular: true },
  { tld: ".org", register: 13.99, renew: 15.99, transfer: 13.99, popular: false },
  { tld: ".io", register: 39.99, renew: 44.99, transfer: 39.99, popular: true },
  { tld: ".co", register: 29.99, renew: 32.99, transfer: 29.99, popular: false },
  { tld: ".dev", register: 16.99, renew: 18.99, transfer: 16.99, popular: true },
  { tld: ".app", register: 18.99, renew: 20.99, transfer: 18.99, popular: false },
  { tld: ".tech", register: 9.99, renew: 39.99, transfer: 9.99, popular: false },
  { tld: ".online", register: 4.99, renew: 29.99, transfer: 4.99, popular: false },
  { tld: ".store", register: 5.99, renew: 49.99, transfer: 5.99, popular: false },
  { tld: ".xyz", register: 2.99, renew: 12.99, transfer: 2.99, popular: false },
  { tld: ".site", register: 3.99, renew: 29.99, transfer: 3.99, popular: false },
];

const domainFeatures = [
  {
    icon: Shield,
    title: "Free WHOIS Privacy",
    description: "Keep your personal information private with free domain privacy protection included with every domain.",
  },
  {
    icon: Lock,
    title: "Domain Lock Protection",
    description: "Prevent unauthorized transfers with our advanced domain locking security features.",
  },
  {
    icon: Server,
    title: "Free DNS Management",
    description: "Full control over your DNS records with our intuitive management interface.",
  },
  {
    icon: RefreshCw,
    title: "Easy Transfers",
    description: "Seamlessly transfer your domains to NexusHost with our automated transfer process.",
  },
  {
    icon: Clock,
    title: "Auto-Renewal",
    description: "Never lose your domain with automatic renewal reminders and easy renewal options.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Your domain is ready to use immediately after registration with instant DNS propagation.",
  },
];

const DomainServices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ domain: string; available: boolean; price: number }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    // Simulate domain availability check
    setTimeout(() => {
      const baseDomain = searchQuery.replace(/\.[a-z]+$/i, "").toLowerCase();
      const results = tldPricing.slice(0, 6).map((tld) => ({
        domain: `${baseDomain}${tld.tld}`,
        available: Math.random() > 0.3,
        price: tld.register,
      }));
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Domain Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Find Your Perfect Domain
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Search from hundreds of TLDs and secure your online identity with NexusHost's premium domain services.
            </p>
            
            {/* Domain Search Box */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2 p-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your domain name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-12 h-14 text-lg bg-background border-0 rounded-xl"
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="h-14 px-8"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Try: mybusiness, mystore, myportfolio
              </p>
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="max-w-3xl mx-auto mt-8">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Search Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {searchResults.map((result) => (
                    <div
                      key={result.domain}
                      className={`flex items-center justify-between p-4 rounded-xl border ${
                        result.available
                          ? "bg-primary/5 border-primary/20"
                          : "bg-muted/50 border-border"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {result.available ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 text-red-500" />
                        )}
                        <span className="font-medium">{result.domain}</span>
                        {result.available && (
                          <span className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                            Available
                          </span>
                        )}
                      </div>
                      {result.available ? (
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-primary">${result.price}/yr</span>
                          <Button size="sm" variant="hero">Add to Cart</Button>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">Taken</span>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* TLD Pricing Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domain Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Competitive pricing across all popular TLDs with no hidden fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-border/50 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50 hover:bg-transparent">
                    <TableHead className="text-foreground font-semibold">TLD</TableHead>
                    <TableHead className="text-foreground font-semibold text-center">Registration</TableHead>
                    <TableHead className="text-foreground font-semibold text-center">Renewal</TableHead>
                    <TableHead className="text-foreground font-semibold text-center">Transfer</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tldPricing.map((tld) => (
                    <TableRow key={tld.tld} className="border-border/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{tld.tld}</span>
                          {tld.popular && (
                            <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-bold text-primary">${tld.register}</span>
                        <span className="text-muted-foreground">/yr</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-medium">${tld.renew}</span>
                        <span className="text-muted-foreground">/yr</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="font-medium">${tld.transfer}</span>
                        <span className="text-muted-foreground">/yr</span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline">
                          Register
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Your Domain
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium features included with every domain registration at no extra cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {domainFeatures.map((feature, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Claim Your Domain?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started today with free WHOIS privacy and instant activation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Search Domains
              </Button>
              <Button variant="hero-outline" size="xl">
                Transfer Domain
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DomainServices;
