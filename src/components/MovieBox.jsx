import styles from "./MovieBox.module.css";
import Movie from "./Movie";

function MovieBox({ movies, handleSelectId }) {
  return (
    <ul className={styles.box}>
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          handleSelectId={handleSelectId}
        />
      ))}
    </ul>
  );
}

export default MovieBox;
