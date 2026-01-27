import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Server, Zap, Shield, Clock, Database, Users, Headphones, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "LiteSpeed Web Server",
    description: "Up to 10x faster than Apache with built-in caching for optimal performance.",
  },
  {
    icon: Shield,
    title: "Free SSL Certificate",
    description: "Secure your website with a free Let's Encrypt SSL certificate included.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime Guarantee",
    description: "Industry-leading uptime with automatic failover and redundancy.",
  },
  {
    icon: Database,
    title: "SSD Storage",
    description: "Lightning-fast NVMe SSD storage for quick data access and loading.",
  },
  {
    icon: Users,
    title: "Unlimited Bandwidth",
    description: "No traffic limits - your site can handle as many visitors as needed.",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our hosting experts are available around the clock to help you.",
  },
];

const specifications = [
  { label: "Web Server", value: "LiteSpeed Enterprise" },
  { label: "PHP Version", value: "8.0, 8.1, 8.2, 8.3" },
  { label: "MySQL Version", value: "8.0" },
  { label: "Control Panel", value: "cPanel" },
  { label: "Email Protocol", value: "IMAP, POP3, SMTP" },
  { label: "Backup Frequency", value: "Daily" },
  { label: "Server Location", value: "US, EU, Asia" },
  { label: "CDN", value: "Cloudflare Integration" },
];

const plans = [
  {
    name: "Starter",
    price: "$2.99",
    period: "mo",
    description: "Perfect for personal websites and blogs",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "1 Email Account",
      "Daily Backups",
    ],
  },
  {
    name: "Professional",
    price: "$5.99",
    period: "mo",
    description: "Ideal for growing businesses",
    popular: true,
    features: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Daily Backups",
      "Free Domain (1 Year)",
    ],
  },
  {
    name: "Business",
    price: "$9.99",
    period: "mo",
    description: "For high-traffic websites",
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Unlimited Bandwidth",
      "Wildcard SSL",
      "Unlimited Email Accounts",
      "Hourly Backups",
      "Free Domain (Lifetime)",
      "Priority Support",
    ],
  },
];

const comparisonHeaders = ["Starter", "Professional", "Business"];

const comparisonRows = [
  { feature: "Websites", values: ["1", "Unlimited", "Unlimited"] },
  { feature: "SSD Storage", values: ["10 GB", "50 GB", "100 GB"] },
  { feature: "Bandwidth", values: ["Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Email Accounts", values: ["1", "Unlimited", "Unlimited"] },
  { feature: "Free SSL", values: [true, true, true] },
  { feature: "Free Domain", values: [false, "1 Year", "Lifetime"] },
  { feature: "Daily Backups", values: [true, true, true] },
  { feature: "Hourly Backups", values: [false, false, true] },
  { feature: "LiteSpeed Cache", values: [true, true, true] },
  { feature: "Priority Support", values: [false, false, true] },
];

export default function SharedHosting() {
  return (
    <HostingPageLayout
      title="Shared Hosting"
      subtitle="Most Popular"
      description="Affordable, reliable hosting perfect for personal websites, blogs, and small businesses. Get started in minutes with our easy-to-use control panel."
      icon={Server}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
