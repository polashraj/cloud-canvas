import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Server, Globe, Shield, Building, LifeBuoy, BookOpen, Users } from "lucide-react";

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  icon: typeof Server;
  items: NavSubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Hosting",
    icon: Server,
    items: [
      { label: "Shared Hosting", href: "/hosting/shared" },
      { label: "WordPress Hosting", href: "/hosting/wordpress" },
      { label: "VPS Hosting", href: "/hosting/vps" },
      { label: "Dedicated Servers", href: "/hosting/dedicated" },
      { label: "Reseller Hosting", href: "/hosting/reseller" },
      { label: "Cloud Hosting", href: "/hosting/cloud" },
      { label: "Email Hosting", href: "/hosting/email" },
    ]
  },
  {
    label: "Domains",
    icon: Globe,
    items: [
      { label: "Domain Registration", href: "#" },
      { label: "Domain Transfer", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "DNS Management", href: "#" },
    ]
  },
  {
    label: "Security",
    icon: Shield,
    items: [
      { label: "SSL Certificates", href: "#" },
      { label: "Backup Solutions", href: "#" },
      { label: "DDoS Protection", href: "#" },
    ]
  },
  {
    label: "Business",
    icon: Building,
    items: [
      { label: "Startup Hosting", href: "#" },
      { label: "E-commerce Hosting", href: "#" },
      { label: "Corporate Email", href: "#" },
      { label: "Enterprise Cloud", href: "#" },
    ]
  },
  {
    label: "Support",
    icon: LifeBuoy,
    items: [
      { label: "Knowledge Base", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "Server Status", href: "#" },
    ]
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Server className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">NexusHost</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="card-gradient border border-border rounded-xl p-2 min-w-[200px] shadow-lg">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button variant="default" size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <div className="flex items-center gap-2 px-2 py-2 text-foreground font-medium">
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.label}
                </div>
                <div className="pl-8 space-y-1">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block py-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="outline" className="flex-1">Sign In</Button>
              <Button variant="default" className="flex-1">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
