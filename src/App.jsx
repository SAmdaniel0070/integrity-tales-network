import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Impact from "./pages/Impact";
import Education from "./pages/Education";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";
import AdminDashboard from './pages/admin/Dashboard';

const queryClient = new QueryClient();

// Create a protected route wrapper

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/integrity-tales-network">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:category" element={<Stories />} />
          <Route path="/story/:slug" element={<StoryDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
