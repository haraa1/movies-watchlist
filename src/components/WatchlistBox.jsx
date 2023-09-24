// import { useEffect, useState } from "react";
import { useWatchlist } from "../contexts/WatchlistContext";
// import { useUser } from "../features/authentication/useUser";
// import supabase from "../services/supabase";
import Movie from "./Movie";
import styles from "./WatchlistBox.module.css";

function WatchlistBox() {
  const { watchlist } = useWatchlist();
  /* const { user } = useUser();
  const [watchlist, setWatchlist] = useState([]);
  useEffect(() => {
    async function fetchWatchlist() {
      const { data, error } = await supabase
        .from("watchlist")
        .select("movie_name, poster_path, movie_id")
        .eq("user_id", user.id);
      const renamedData = data.map((item) => ({
        Title: item.movie_name,
        Poster: item.poster_path,
        MovieId: item.movie_id,
      }));

      if (error) {
        console.error("Error fetching watchlist:", error.message);
        return;
      }

      setWatchlist(renamedData);
      console.log(watchlist);
    }
    fetchWatchlist();
  }, [user]); */ //Selecting data from database

  return (
    <>
      <h2>
        {watchlist.length === 0
          ? "Watchlist is currently empty"
          : "Watchlist: "}
      </h2>
      <ul className={styles.watchlist}>
        {watchlist?.map((movie, index) => (
          <Movie
            movie={movie}
            key={movie.movie_id || index}
            showStarAndDelete={true}
          />
        ))}
      </ul>
    </>
  );
}

export default WatchlistBox;
