import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SharedHosting from "./pages/hosting/SharedHosting";
import VPSHosting from "./pages/hosting/VPSHosting";
import CloudHosting from "./pages/hosting/CloudHosting";
import WordPressHosting from "./pages/hosting/WordPressHosting";
import DedicatedServers from "./pages/hosting/DedicatedServers";
import ResellerHosting from "./pages/hosting/ResellerHosting";
import EmailHosting from "./pages/hosting/EmailHosting";
import DomainServices from "./pages/DomainServices";
import SSLCertificates from "./pages/security/SSLCertificates";
import BackupSolutions from "./pages/security/BackupSolutions";
import DDoSProtection from "./pages/security/DDoSProtection";
import ECommerceHosting from "./pages/business/ECommerceHosting";
import StartupHosting from "./pages/business/StartupHosting";
import CorporateEmail from "./pages/business/CorporateEmail";
import EnterpriseCloud from "./pages/business/EnterpriseCloud";
import ContactSupport from "./pages/support/ContactSupport";
import KnowledgeBase from "./pages/support/KnowledgeBase";
import ServerStatus from "./pages/support/ServerStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hosting/shared" element={<SharedHosting />} />
          <Route path="/hosting/vps" element={<VPSHosting />} />
          <Route path="/hosting/cloud" element={<CloudHosting />} />
          <Route path="/hosting/wordpress" element={<WordPressHosting />} />
          <Route path="/hosting/dedicated" element={<DedicatedServers />} />
          <Route path="/hosting/reseller" element={<ResellerHosting />} />
          <Route path="/hosting/email" element={<EmailHosting />} />
          <Route path="/domains" element={<DomainServices />} />
          <Route path="/security/ssl" element={<SSLCertificates />} />
          <Route path="/security/backup" element={<BackupSolutions />} />
          <Route path="/security/ddos" element={<DDoSProtection />} />
          <Route path="/business/ecommerce" element={<ECommerceHosting />} />
          <Route path="/business/startup" element={<StartupHosting />} />
          <Route path="/business/email" element={<CorporateEmail />} />
          <Route path="/business/enterprise" element={<EnterpriseCloud />} />
          <Route path="/support/contact" element={<ContactSupport />} />
          <Route path="/support/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/support/status" element={<ServerStatus />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
