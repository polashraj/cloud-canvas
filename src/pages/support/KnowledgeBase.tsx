import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Video, Code, Settings, Users, AlertCircle } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    icon: BookOpen,
    category: "Getting Started",
    articles: [
      "How to Create a Hosting Account",
      "Domain Setup Guide",
      "Email Configuration",
      "SSL Certificate Installation",
      "DNS Management Basics",
    ],
  },
  {
    icon: Code,
    category: "Development",
    articles: [
      "PHP Configuration",
      "Database Management",
      "Git Integration",
      "API Documentation",
      "Custom Scripts Setup",
    ],
  },
  {
    icon: Settings,
    category: "Administration",
    articles: [
      "Control Panel Guide",
      "User Management",
      "Backup & Restore",
      "Security Settings",
      "Performance Optimization",
    ],
  },
  {
    icon: AlertCircle,
    category: "Troubleshooting",
    articles: [
      "Common Error Messages",
      "Connection Issues",
      "Performance Problems",
      "Email Issues",
      "FTP Access Help",
    ],
  },
  {
    icon: Video,
    category: "Tutorials",
    articles: [
      "WordPress Installation Video",
      "Beginner's Guide Video",
      "Security Setup Video",
      "Migration Guide Video",
      "Optimization Tips Video",
    ],
  },
  {
    icon: Users,
    category: "Account",
    articles: [
      "Billing & Payments",
      "Account Security",
      "Password Reset",
      "Account Upgrade",
      "Account Cancellation",
    ],
  },
];

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState("");

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
              <span className="text-foreground">Knowledge Base</span>
              <br />
              <span className="gradient-text">Find Answers Fast</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Browse our comprehensive documentation, tutorials, and guides to get the most out of NexusHost.
            </p>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2 p-2 bg-card/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg bg-background border-0 rounded-xl"
                  />
                </div>
                <Button variant="hero" size="lg" className="h-14 px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, idx) => (
                        <li key={idx}>
                          <button className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">
                            → {article}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Most <span className="gradient-text">Popular Articles</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Frequently accessed resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "How to Set Up Your Domain", views: "45.2K views" },
              { title: "WordPress Installation Guide", views: "38.9K views" },
              { title: "SSL Certificate Setup", views: "32.1K views" },
              { title: "Email Configuration", views: "28.7K views" },
              { title: "Database Backup Process", views: "24.5K views" },
              { title: "Performance Optimization Tips", views: "21.3K views" },
            ].map((article, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/30 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.views}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Need <span className="gradient-text">Help?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is available 24/7 to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Contact Support
              </Button>
              <Button variant="hero-outline" size="xl">
                View FAQs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
