import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Create a singleton QueryClient with minimized options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // Reduce retry attempts to save memory
      refetchOnWindowFocus: false,
      staleTime: Infinity, // Prevent unnecessary refetches
    },
  },
});

// Use lazy loading for routes to reduce initial load
const Index = lazy(() => import("./pages/Index"));
const ApiSetupGuide = lazy(() => import("./pages/ApiSetupGuide"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simplified loading component
const Loading = () => <div className="p-4 text-center">Loading...</div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/api-setup-guide" element={<ApiSetupGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;