import { lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Watchlist from "./pages/Watchlist";

const Homepage = lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="watchlist" element={<Watchlist />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
