import { HostingPageLayout } from "@/components/hosting/HostingPageLayout";
import { Users, Palette, CreditCard, Shield, Headphones, BarChart, Server, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "White-Label Branding",
    description: "Fully rebrand the hosting experience with your company identity.",
  },
  {
    icon: CreditCard,
    title: "WHMCS Integration",
    description: "Automated billing, provisioning, and client management included.",
  },
  {
    icon: Users,
    title: "Unlimited cPanel Accounts",
    description: "Create as many hosting accounts as you need for your clients.",
  },
  {
    icon: Shield,
    title: "Free SSL for All",
    description: "Provide free SSL certificates to all your client accounts.",
  },
  {
    icon: Headphones,
    title: "24/7 Partner Support",
    description: "Priority support channel exclusively for resellers.",
  },
  {
    icon: BarChart,
    title: "Business Analytics",
    description: "Track revenue, growth, and client metrics in real-time.",
  },
];

const specifications = [
  { label: "Control Panel", value: "WHM + cPanel" },
  { label: "Billing", value: "WHMCS Included" },
  { label: "Nameservers", value: "Private Branded" },
  { label: "White-label", value: "100% Rebrandable" },
  { label: "Overselling", value: "Enabled" },
  { label: "API Access", value: "Full REST API" },
  { label: "Migration", value: "Free for Clients" },
  { label: "Partner Tier", value: "Volume Discounts" },
];

const plans = [
  {
    name: "Reseller Starter",
    price: "$19.99",
    period: "mo",
    description: "Start your hosting business",
    features: [
      "50 GB SSD Storage",
      "500 GB Bandwidth",
      "25 cPanel Accounts",
      "WHM Control Panel",
      "Free SSL Certificates",
      "White-label DNS",
    ],
  },
  {
    name: "Reseller Pro",
    price: "$39.99",
    period: "mo",
    description: "Grow your hosting business",
    popular: true,
    features: [
      "120 GB SSD Storage",
      "1.5 TB Bandwidth",
      "75 cPanel Accounts",
      "WHM + WHMCS",
      "Free SSL Certificates",
      "White-label Everything",
      "Priority Support",
    ],
  },
  {
    name: "Reseller Enterprise",
    price: "$79.99",
    period: "mo",
    description: "Scale your hosting empire",
    features: [
      "250 GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited cPanel Accounts",
      "WHM + WHMCS",
      "Wildcard SSL",
      "White-label Everything",
      "Dedicated Account Manager",
      "Volume Discounts",
    ],
  },
];

const comparisonHeaders = ["Starter", "Pro", "Enterprise"];

const comparisonRows = [
  { feature: "SSD Storage", values: ["50 GB", "120 GB", "250 GB"] },
  { feature: "Bandwidth", values: ["500 GB", "1.5 TB", "Unlimited"] },
  { feature: "cPanel Accounts", values: ["25", "75", "Unlimited"] },
  { feature: "WHM Access", values: [true, true, true] },
  { feature: "WHMCS Included", values: [false, true, true] },
  { feature: "White-label DNS", values: [true, true, true] },
  { feature: "Free Migrations", values: [true, true, true] },
  { feature: "Private Nameservers", values: [true, true, true] },
  { feature: "Volume Discounts", values: [false, false, true] },
  { feature: "Dedicated Manager", values: [false, false, true] },
];

export default function ResellerHosting() {
  return (
    <HostingPageLayout
      title="Reseller Hosting"
      subtitle="Start Your Hosting Business"
      description="Launch your own hosting company with our white-label reseller plans. Full branding control, WHMCS billing, and partner support included."
      icon={Users}
      features={features}
      specifications={specifications}
      plans={plans}
      comparisonHeaders={comparisonHeaders}
      comparisonRows={comparisonRows}
    />
  );
}
