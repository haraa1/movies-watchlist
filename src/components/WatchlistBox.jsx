import { useWatchlist } from "../contexts/WatchlistContext";
import Movie from "./Movie";
import styles from "./WatchlistBox.module.css";

function WatchlistBox() {
  const { watchlist } = useWatchlist();
  return (
    <ul className={styles.watchlist}>
      {watchlist?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchlistBox;
