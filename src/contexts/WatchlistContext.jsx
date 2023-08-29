import { createContext, useContext, useState } from "react";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  function handleAddWatchlist(movie) {
    setWatchlist((watchlistlist) => [...watchlist, movie]);
    console.log(watchlist);
  }

  function handleRemoveWatchlist(id) {
    setWatchlist((watched) => watchlist.filter((movie) => movie.imdbID !== id));
  }

  return (
    <WatchlistContext.Provider
      value={{ watchlist, handleAddWatchlist, handleRemoveWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

function useWatchlist() {
  const value = useContext(WatchlistContext);

  return value;
}

export { WatchlistProvider, useWatchlist };
