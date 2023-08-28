import { useEffect, useState } from "react";
import styles from "./InfoPopup.module.css";
import Loader from "./Loader";
import { useWatchlist } from "../contexts/WatchlistContext";

const KEY = "4956f400";
function InfoPopup({ selectedId, handleClearPopUp }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const { handleAddWatchlist } = useWatchlist();

  const { Title: title } = movie;
  console.log(title);

  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setLoading(false);
        console.log(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div className={styles.popup}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          (
          <button className={styles.btnClose} onClick={handleClearPopUp}>
            &#10005;
          </button>
          <img src={movie.Poster} alt={`${movie.title} poster `} />
          <div className={styles.info}>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <span>Genre: {movie.Genre}</span>
            <span>Director: {movie.Director}</span>
            <span>Actors: {movie.Actors}</span>
          </div>
          <button
            onClick={() => handleAddWatchlist(movie)}
            className={styles.btnAdd}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="#ffffff"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            ADD TO WATCHLIST
          </button>
          )
        </>
      )}
    </div>
  );
}

export default InfoPopup;
