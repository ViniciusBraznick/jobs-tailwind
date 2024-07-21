import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { AuthProvider } from "./app/contexts/AuthContext";
import { Toaster } from "react-hot-toast";

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      }
    }
  })

  return(
    <>
    <Toaster />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}