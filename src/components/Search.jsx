import styles from "./Search.module.css";
function Search({ query, setQuery }) {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
