import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LoveLogin from "./pages/LoveLogin";
import LetterReveal from "./pages/LetterReveal";
import LoveLetter from "./pages/LoveLetter";
import ValentineFinal from "./pages/ValentineFinal";
import "./styles/love-animations.css";

const queryClient = new QueryClient();

const ConditionalNav = () => {
  const location = useLocation();
  const loveRoutes = ["/love", "/letter-reveal", "/love-letter", "/valentine-final"];
  if (loveRoutes.includes(location.pathname)) return null;
  return <Navigation />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ConditionalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/love" element={<LoveLogin />} />
          <Route path="/letter-reveal" element={<LetterReveal />} />
          <Route path="/love-letter" element={<LoveLetter />} />
          <Route path="/valentine-final" element={<ValentineFinal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
