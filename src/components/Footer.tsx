import { Server, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  "Hosting Solutions": [
    "Shared Hosting",
    "WordPress Hosting",
    "VPS Hosting",
    "Dedicated Servers",
    "Reseller Hosting",
    "Cloud Hosting",
    "Email Hosting",
  ],
  "Domain Services": [
    "Domain Registration",
    "Domain Transfer",
    "Pricing",
    "DNS Management",
  ],
  "Security": [
    { label: "SSL Certificates", href: "/security/ssl" },
    { label: "Backup Solutions", href: "/security/backup" },
    { label: "DDoS Protection", href: "/security/ddos" },
  ],
  "Company": [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/support/contact" },
    { label: "Blog", href: "#" },
    { label: "Affiliate Program", href: "#" },
  ],
  "Support": [
    { label: "Knowledge Base", href: "/support/knowledge-base" },
    { label: "FAQs", href: "#" },
    { label: "Contact Support", href: "/support/contact" },
    { label: "Server Status", href: "/support/status" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Server className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">NexusHost</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Lightning-fast cloud hosting for developers and enterprises.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const isObj = typeof link === "object";
                  const key = isObj ? link.label : link;
                  const href = isObj ? link.href : "#";
                  return (
                    <li key={key}>
                      <a
                        href={href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {key}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 NexusHost. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
