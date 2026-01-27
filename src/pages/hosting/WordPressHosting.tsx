import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Globe, Zap, Shield, Paintbrush, RefreshCw, Users, Lock, Gauge, Database } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "WordPress Optimized",
    description: "Servers specifically configured for maximum WordPress performance.",
  },
  {
    icon: Shield,
    title: "Auto-Updates",
    description: "Core, theme, and plugin updates handled automatically and safely.",
  },
  {
    icon: Paintbrush,
    title: "Staging Environment",
    description: "Test changes safely before pushing to production.",
  },
  {
    icon: RefreshCw,
    title: "1-Click Restore",
    description: "Instant restore from automatic daily backups.",
  },
  {
    icon: Lock,
    title: "Malware Protection",
    description: "Real-time scanning and automatic malware removal.",
  },
  {
    icon: Gauge,
    title: "WP-CLI Access",
    description: "Full command-line access for advanced WordPress management.",
  },
];

const specifications = [
  { label: "WordPress Version", value: "Latest + Auto-update" },
  { label: "PHP Version", value: "8.1, 8.2, 8.3" },
  { label: "Caching", value: "Object + Page Cache" },
  { label: "CDN", value: "Built-in Global CDN" },
  { label: "Staging", value: "1-Click Deploy" },
  { label: "Backups", value: "Daily + On-demand" },
  { label: "Migration", value: "Free Migration Service" },
  { label: "Support", value: "WordPress Experts 24/7" },
];

const plans = [
  {
    name: "WP Starter",
    price: "$4.99",
    period: "mo",
    description: "For personal blogs",
    features: [
      "1 WordPress Site",
      "15 GB SSD Storage",
      "50,000 Monthly Visits",
      "Free SSL Certificate",
      "Free Domain (1 Year)",
      "Daily Backups",
    ],
  },
  {
    name: "WP Professional",
    price: "$9.99",
    period: "mo",
    description: "For growing blogs & businesses",
    popular: true,
    features: [
      "3 WordPress Sites",
      "50 GB SSD Storage",
      "200,000 Monthly Visits",
      "Free SSL Certificate",
      "Free Domain (1 Year)",
      "Staging Environment",
      "Priority Support",
    ],
  },
  {
    name: "WP Business",
    price: "$24.99",
    period: "mo",
    description: "For WooCommerce & high-traffic",
    features: [
      "Unlimited Sites",
      "100 GB SSD Storage",
      "500,000 Monthly Visits",
      "Wildcard SSL",
      "Free Domain (Lifetime)",
      "Staging Environment",
      "White-label Backups",
      "Dedicated Resources",
    ],
  },
];

const comparisonHeaders = ["Starter", "Professional", "Business"];

const comparisonRows = [
  { feature: "WordPress Sites", values: ["1", "3", "Unlimited"] },
  { feature: "SSD Storage", values: ["15 GB", "50 GB", "100 GB"] },
  { feature: "Monthly Visits", values: ["50K", "200K", "500K"] },
  { feature: "Free SSL", values: [true, true, true] },
  { feature: "Free Domain", values: ["1 Year", "1 Year", "Lifetime"] },
  { feature: "Staging Environment", values: [false, true, true] },
  { feature: "Auto-updates", values: [true, true, true] },
  { feature: "Malware Scanning", values: [true, true, true] },
  { feature: "Dedicated Resources", values: [false, false, true] },
  { feature: "WooCommerce Ready", values: [false, true, true] },
];

export default function WordPressHosting() {
  return (
    <HostingPageLayout
      title="WordPress Hosting"
      subtitle="Optimized for WordPress"
      description="Managed WordPress hosting with automatic updates, staging environments, and expert support. Built for speed, security, and simplicity."
      icon={Globe}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
