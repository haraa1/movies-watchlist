import Movie from "./Movie";
import styles from "./MovieBox.module.css";

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
