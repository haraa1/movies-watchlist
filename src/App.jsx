import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import Main from "./components/Main";
import MovieBox from "./components/MovieBox";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import InfoPopup from "./components/InfoPopup";

const KEY = "4956f400";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [popUp, setPopUp] = useState(false);

  function handleSelectId(id) {
    setSelectedId(id);
    setPopUp(true);
  }

  function handleClearPopUp() {
    setPopUp(false);
  }
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Issue with fetching data");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          console.log(data);
          setError("");
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }

        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
      }
      fetchMovies();
    },
    [query]
  );
  console.log(selectedId);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <MovieBox movies={movies} handleSelectId={handleSelectId} />
      )}
      {popUp && (
        <InfoPopup
          selectedId={selectedId}
          handleClearPopUp={handleClearPopUp}
        />
      )}
    </>
  );
}
