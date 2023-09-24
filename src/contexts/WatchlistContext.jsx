import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../features/useLocalStorageState";

const WatchlistContext = createContext();

function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useLocalStorageState([], "watched");

  function handleAddWatchlist(movie) {
    setWatchlist((watchlist) => [...watchlist, movie]);
    console.log(watchlist);
  }

  function handleRemoveWatchlist(id) {
    setWatchlist((watchlist) =>
      watchlist.filter((movie) => movie.imdbID !== id)
    );
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        setWatchlist,
        handleAddWatchlist,
        handleRemoveWatchlist,
      }}
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
