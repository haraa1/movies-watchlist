import { useEffect, useState } from "react";
import styles from "./InfoPopup.module.css";

const KEY = "4956f400";
function InfoPopup({ selectedId, handleClearPopUp }) {
  const [movie, setMovie] = useState({});

  const { Title: title } = movie;
  console.log(title);

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button onClick={handleClearPopUp}>&#10005;</button>
        <img src={movie.Poster} alt={`${movie.title} poster `} />
        <div className={styles.info}>
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <span>Genre: {movie.Genre}</span>
          <span>Director: {movie.Director}</span>
          <span>Actors: {movie.Actors}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
