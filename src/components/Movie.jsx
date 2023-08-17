import styles from "./Movie.module.css";

function Movie({ movie, handleSelectId }) {
  return (
    <li onClick={() => handleSelectId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.title} poster `}></img>
      <div className={styles.info}>
        <h3>{movie.Title}</h3>
        <button>More info</button>
      </div>
    </li>
  );
}

export default Movie;
