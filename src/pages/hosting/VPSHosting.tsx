import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Server, Cpu, HardDrive, Gauge, Shield, Terminal, RefreshCw, Zap, Network } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Dedicated Resources",
    description: "Guaranteed CPU, RAM, and storage that's exclusively yours.",
  },
  {
    icon: Terminal,
    title: "Full Root Access",
    description: "Complete control over your server with SSH root access.",
  },
  {
    icon: Gauge,
    title: "Scalable Performance",
    description: "Easily upgrade resources as your needs grow without downtime.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "DDoS protection, firewalls, and regular security updates.",
  },
  {
    icon: RefreshCw,
    title: "Instant Provisioning",
    description: "Your VPS is ready in minutes with your choice of OS.",
  },
  {
    icon: Network,
    title: "High-Speed Network",
    description: "1 Gbps network with premium bandwidth for fast connectivity.",
  },
];

const specifications = [
  { label: "Virtualization", value: "KVM" },
  { label: "Operating Systems", value: "Linux, Windows" },
  { label: "Network Speed", value: "1 Gbps" },
  { label: "Control Panel", value: "Custom + WHM Optional" },
  { label: "IPv4 Addresses", value: "1-5 per VPS" },
  { label: "IPv6 Support", value: "Full /64 Block" },
  { label: "Data Centers", value: "US, EU, Asia, AU" },
  { label: "SLA", value: "99.99% Uptime" },
];

const plans = [
  {
    name: "VPS Starter",
    price: "$14.99",
    period: "mo",
    description: "Entry-level VPS for developers",
    features: [
      "2 vCPU Cores",
      "4 GB RAM",
      "80 GB NVMe SSD",
      "4 TB Bandwidth",
      "1 IPv4 Address",
      "Full Root Access",
    ],
  },
  {
    name: "VPS Professional",
    price: "$29.99",
    period: "mo",
    description: "Perfect for growing applications",
    popular: true,
    features: [
      "4 vCPU Cores",
      "8 GB RAM",
      "160 GB NVMe SSD",
      "6 TB Bandwidth",
      "2 IPv4 Addresses",
      "Full Root Access",
      "Free Managed Support",
    ],
  },
  {
    name: "VPS Enterprise",
    price: "$59.99",
    period: "mo",
    description: "High-performance for demanding workloads",
    features: [
      "8 vCPU Cores",
      "16 GB RAM",
      "320 GB NVMe SSD",
      "10 TB Bandwidth",
      "3 IPv4 Addresses",
      "Full Root Access",
      "Free Managed Support",
      "Priority Hardware",
    ],
  },
];

const comparisonHeaders = ["Starter", "Professional", "Enterprise"];

const comparisonRows = [
  { feature: "vCPU Cores", values: ["2", "4", "8"] },
  { feature: "RAM", values: ["4 GB", "8 GB", "16 GB"] },
  { feature: "NVMe Storage", values: ["80 GB", "160 GB", "320 GB"] },
  { feature: "Bandwidth", values: ["4 TB", "6 TB", "10 TB"] },
  { feature: "IPv4 Addresses", values: ["1", "2", "3"] },
  { feature: "Root Access", values: [true, true, true] },
  { feature: "Managed Support", values: [false, true, true] },
  { feature: "DDoS Protection", values: [true, true, true] },
  { feature: "Automatic Backups", values: [false, true, true] },
  { feature: "Priority Hardware", values: [false, false, true] },
];

export default function VPSHosting() {
  return (
    <HostingPageLayout
      title="VPS Hosting"
      subtitle="Virtual Private Servers"
      description="Get dedicated resources with full root access. Perfect for developers, growing businesses, and applications that need reliable performance."
      icon={Server}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
