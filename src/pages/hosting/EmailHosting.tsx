import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Mail, Shield, Globe, Calendar, Users, Lock, Cloud, Zap, Search } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Advanced Spam Filter",
    description: "AI-powered spam detection with 99.9% accuracy rate.",
  },
  {
    icon: Globe,
    title: "Webmail Access",
    description: "Access your email from anywhere with our modern webmail interface.",
  },
  {
    icon: Calendar,
    title: "Calendar & Contacts",
    description: "Integrated calendar and contact management for productivity.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Your emails are encrypted at rest and in transit.",
  },
  {
    icon: Cloud,
    title: "Unlimited Storage",
    description: "Never worry about running out of email storage space.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Shared mailboxes, calendars, and distribution lists.",
  },
];

const specifications = [
  { label: "Protocols", value: "IMAP, POP3, SMTP" },
  { label: "Mobile Sync", value: "ActiveSync, CalDAV" },
  { label: "Webmail", value: "Modern Responsive UI" },
  { label: "Encryption", value: "TLS 1.3 + AES-256" },
  { label: "Spam Protection", value: "AI + SpamAssassin" },
  { label: "Virus Scanning", value: "ClamAV Real-time" },
  { label: "Attachment Limit", value: "50 MB per email" },
  { label: "Uptime SLA", value: "99.99%" },
];

const plans = [
  {
    name: "Email Starter",
    price: "$1.99",
    period: "user/mo",
    description: "Essential business email",
    features: [
      "10 GB Storage per User",
      "Custom Domain Email",
      "Spam & Virus Protection",
      "Webmail Access",
      "Mobile Sync",
      "Email Forwarding",
    ],
  },
  {
    name: "Email Business",
    price: "$4.99",
    period: "user/mo",
    description: "Complete email solution",
    popular: true,
    features: [
      "50 GB Storage per User",
      "Custom Domain Email",
      "Advanced Spam Filter",
      "Calendar & Contacts",
      "Shared Mailboxes",
      "Email Archiving",
      "Priority Support",
    ],
  },
  {
    name: "Email Enterprise",
    price: "$9.99",
    period: "user/mo",
    description: "Advanced collaboration",
    features: [
      "Unlimited Storage",
      "Custom Domain Email",
      "AI Spam Detection",
      "Full Collaboration Suite",
      "eDiscovery & Compliance",
      "Advanced Analytics",
      "SSO Integration",
      "Dedicated Support",
    ],
  },
];

const comparisonHeaders = ["Starter", "Business", "Enterprise"];

const comparisonRows = [
  { feature: "Storage per User", values: ["10 GB", "50 GB", "Unlimited"] },
  { feature: "Custom Domain", values: [true, true, true] },
  { feature: "Spam Protection", values: ["Basic", "Advanced", "AI-Powered"] },
  { feature: "Webmail", values: [true, true, true] },
  { feature: "Calendar", values: [false, true, true] },
  { feature: "Shared Mailboxes", values: [false, true, true] },
  { feature: "Email Archiving", values: [false, true, true] },
  { feature: "eDiscovery", values: [false, false, true] },
  { feature: "SSO Integration", values: [false, false, true] },
  { feature: "Analytics", values: [false, false, true] },
];

export default function EmailHosting() {
  return (
    <HostingPageLayout
      title="Email Hosting"
      subtitle="Professional Email"
      description="Secure, reliable business email hosting with your custom domain. Advanced spam protection, encryption, and collaboration tools included."
      icon={Mail}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
