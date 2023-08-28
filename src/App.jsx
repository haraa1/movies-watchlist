import { lazy } from "react";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Watchlist from "./pages/Watchlist";
import { WatchlistProvider } from "./contexts/WatchlistContext";

const Homepage = lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
}
