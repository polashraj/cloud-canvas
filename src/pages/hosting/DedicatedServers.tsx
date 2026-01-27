import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Server, Cpu, HardDrive, Shield, Zap, Network, Lock, Gauge, Settings } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Enterprise Hardware",
    description: "Latest Intel Xeon & AMD EPYC processors for maximum performance.",
  },
  {
    icon: HardDrive,
    title: "NVMe RAID Storage",
    description: "Enterprise-grade NVMe SSDs in RAID configuration for speed & redundancy.",
  },
  {
    icon: Shield,
    title: "Hardware RAID",
    description: "Dedicated RAID controller with battery backup for data protection.",
  },
  {
    icon: Network,
    title: "10 Gbps Network",
    description: "Premium network connectivity with low latency and high throughput.",
  },
  {
    icon: Settings,
    title: "Full Customization",
    description: "Configure every aspect of your server to meet your exact needs.",
  },
  {
    icon: Zap,
    title: "99.99% Uptime SLA",
    description: "Enterprise-grade reliability with redundant power and network.",
  },
];

const specifications = [
  { label: "Processors", value: "Intel Xeon / AMD EPYC" },
  { label: "Memory", value: "Up to 512 GB DDR5" },
  { label: "Storage", value: "NVMe SSD RAID" },
  { label: "Network", value: "10 Gbps Redundant" },
  { label: "Bandwidth", value: "Unmetered Premium" },
  { label: "IPv4 Addresses", value: "5-29 Included" },
  { label: "Remote Management", value: "IPMI / KVM" },
  { label: "Support", value: "24/7 Hardware + Managed" },
];

const plans = [
  {
    name: "Dedicated Starter",
    price: "$99",
    period: "mo",
    description: "Entry-level dedicated power",
    features: [
      "Intel Xeon E-2236",
      "32 GB DDR4 RAM",
      "2x 500 GB NVMe SSD",
      "Unmetered Bandwidth",
      "5 IPv4 Addresses",
      "IPMI Access",
    ],
  },
  {
    name: "Dedicated Pro",
    price: "$199",
    period: "mo",
    description: "High-performance workloads",
    popular: true,
    features: [
      "Intel Xeon Gold 6226R",
      "128 GB DDR4 RAM",
      "4x 1 TB NVMe SSD",
      "Unmetered Bandwidth",
      "13 IPv4 Addresses",
      "IPMI + KVM Access",
      "Free Managed Services",
    ],
  },
  {
    name: "Dedicated Enterprise",
    price: "$399",
    period: "mo",
    description: "Mission-critical infrastructure",
    features: [
      "Dual AMD EPYC 7543",
      "512 GB DDR5 RAM",
      "8x 2 TB NVMe SSD",
      "Unmetered Premium",
      "29 IPv4 Addresses",
      "IPMI + KVM Access",
      "Full Managed Services",
      "Dedicated Support Team",
    ],
  },
];

const comparisonHeaders = ["Starter", "Pro", "Enterprise"];

const comparisonRows = [
  { feature: "CPU Cores", values: ["6", "16", "64"] },
  { feature: "RAM", values: ["32 GB", "128 GB", "512 GB"] },
  { feature: "Storage", values: ["1 TB", "4 TB", "16 TB"] },
  { feature: "Network", values: ["1 Gbps", "10 Gbps", "10 Gbps"] },
  { feature: "IPv4 Addresses", values: ["5", "13", "29"] },
  { feature: "Hardware RAID", values: [true, true, true] },
  { feature: "Remote Management", values: [true, true, true] },
  { feature: "Managed Services", values: [false, true, true] },
  { feature: "Dedicated Support", values: [false, false, true] },
  { feature: "Custom Hardware", values: [false, false, true] },
];

export default function DedicatedServers() {
  return (
    <HostingPageLayout
      title="Dedicated Servers"
      subtitle="Maximum Performance"
      description="Enterprise-grade bare-metal servers with full root access. Ultimate power, security, and customization for demanding applications."
      icon={Server}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
