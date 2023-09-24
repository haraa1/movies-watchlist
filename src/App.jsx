import { lazy } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Watchlist from "./pages/Watchlist";
import { WatchlistProvider } from "./contexts/WatchlistContext";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from "../AppLayout";

const queryClient = new QueryClient({});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WatchlistProvider>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" index element={<HomePage />} />
              <Route path="/watchlist" element={<Watchlist />}></Route>
            </Route>

            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster toastOptions={{ style: { fontSize: "14px" } }} />
      </WatchlistProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
