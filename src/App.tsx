import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import WhatsAppButton from "./components/WhatsAppButton.tsx";
import Index from "./pages/Index.tsx";
import ChronicPainPage from "./pages/ChronicPainPage.tsx";
import SportsInjuryPage from "./pages/SportsInjuryPage.tsx";
import HeadachePage from "./pages/HeadachePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chronic-pain" element={<ChronicPainPage />} />
            <Route path="/sports-injury" element={<SportsInjuryPage />} />
            <Route path="/headache" element={<HeadachePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
