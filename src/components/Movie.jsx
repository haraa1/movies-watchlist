import styles from "./Movie.module.css";
import { useWatchlist } from "../contexts/WatchlistContext";
import { useState } from "react";
import toast from "react-hot-toast";

function Movie({ movie, handleSelectId, showStarAndDelete }) {
  const { handleRemoveWatchlist } = useWatchlist();
  const [fillColor, setFillColor] = useState("#ffffff");

  const handleSVGClick = () => {
    if (fillColor === "#ffffff") {
      setFillColor("#ffd700");
      toast.success(`Added ${movie.Title} to favorites`, {
        position: "bottom-right",
        icon: "📌",
      });
    } else {
      setFillColor("#ffffff");
      toast.success(`Removed ${movie.Title} from favorites`, {
        position: "bottom-right",
      });
    }
  };

  if (showStarAndDelete) {
    return (
      <li>
        <div className={styles.imgContainer}>
          <img src={movie.Poster} alt={`${movie.title} poster `}></img>
          <span className={styles.textOverlay}>{movie.Title}</span>
          <div className={styles.icons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#ffffff"
              onClick={() => handleRemoveWatchlist(movie.imdbID)}
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              fill={fillColor}
              onClick={handleSVGClick}
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
        </div>
      </li>
    );
  } else {
    return (
      <li onClick={() => handleSelectId(movie.imdbID)}>
        <img src={movie.Poster} alt={`${movie.title} poster `}></img>
        <div className={styles.info}>
          <h3>{movie.Title}</h3>
          <button>More info </button>
        </div>
      </li>
    );
  }
}

export default Movie;
