import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  function handleAddWatchlist(movie) {
    setWatchlist((watchlist) => [...watchlist, movie]);
    console.log(watchlist);
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, handleAddWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

function useWatchlist() {
  const value = useContext(WatchlistContext);

  return value;
}

export { WatchlistProvider, useWatchlist };
