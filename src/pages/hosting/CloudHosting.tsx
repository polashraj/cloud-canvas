import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Cloud, Zap, Globe, Shield, RefreshCw, BarChart, Server, Lock, Cpu } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Auto-Scaling",
    description: "Automatically scale resources up or down based on traffic demands.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivered from 200+ edge locations worldwide for speed.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced firewall, DDoS mitigation, and WAF protection included.",
  },
  {
    icon: RefreshCw,
    title: "Zero Downtime Deploys",
    description: "Deploy updates without any interruption to your users.",
  },
  {
    icon: BarChart,
    title: "Real-time Analytics",
    description: "Monitor performance, traffic, and resource usage in real-time.",
  },
  {
    icon: Server,
    title: "Multi-Region Failover",
    description: "Automatic failover across regions for maximum availability.",
  },
];

const specifications = [
  { label: "Infrastructure", value: "Distributed Cloud" },
  { label: "Auto-scaling", value: "Horizontal & Vertical" },
  { label: "Load Balancing", value: "Included" },
  { label: "CDN Nodes", value: "200+ Global" },
  { label: "Container Support", value: "Docker, Kubernetes" },
  { label: "Database Options", value: "MySQL, PostgreSQL, Redis" },
  { label: "API Access", value: "Full REST API" },
  { label: "SLA", value: "99.99% Uptime" },
];

const plans = [
  {
    name: "Cloud Starter",
    price: "$19.99",
    period: "mo",
    description: "For small applications",
    features: [
      "2 vCPU Cores",
      "4 GB RAM",
      "50 GB SSD Storage",
      "1 TB CDN Bandwidth",
      "Auto-scaling",
      "SSL Certificate",
    ],
  },
  {
    name: "Cloud Business",
    price: "$49.99",
    period: "mo",
    description: "For growing applications",
    popular: true,
    features: [
      "4 vCPU Cores",
      "8 GB RAM",
      "150 GB SSD Storage",
      "5 TB CDN Bandwidth",
      "Auto-scaling",
      "SSL Certificate",
      "Multi-region Failover",
      "Priority Support",
    ],
  },
  {
    name: "Cloud Enterprise",
    price: "$149.99",
    period: "mo",
    description: "For mission-critical apps",
    features: [
      "16 vCPU Cores",
      "32 GB RAM",
      "500 GB SSD Storage",
      "Unlimited CDN Bandwidth",
      "Auto-scaling",
      "Wildcard SSL",
      "Multi-region Failover",
      "Dedicated Account Manager",
      "Custom SLA",
    ],
  },
];

const comparisonHeaders = ["Starter", "Business", "Enterprise"];

const comparisonRows = [
  { feature: "vCPU Cores", values: ["2", "4", "16"] },
  { feature: "RAM", values: ["4 GB", "8 GB", "32 GB"] },
  { feature: "SSD Storage", values: ["50 GB", "150 GB", "500 GB"] },
  { feature: "CDN Bandwidth", values: ["1 TB", "5 TB", "Unlimited"] },
  { feature: "Auto-scaling", values: [true, true, true] },
  { feature: "Global CDN", values: [true, true, true] },
  { feature: "Multi-region Failover", values: [false, true, true] },
  { feature: "Load Balancing", values: [true, true, true] },
  { feature: "Dedicated Support", values: [false, false, true] },
  { feature: "Custom SLA", values: [false, false, true] },
];

export default function CloudHosting() {
  return (
    <HostingPageLayout
      title="Cloud Hosting"
      subtitle="Scalable Infrastructure"
      description="Enterprise-grade cloud infrastructure that scales with your business. Deploy globally with auto-scaling, CDN, and multi-region failover."
      icon={Cloud}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
