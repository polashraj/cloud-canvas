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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
