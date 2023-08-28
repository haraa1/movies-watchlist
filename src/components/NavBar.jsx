import Search from "./Search";
import styles from "./NavBar.module.css";
import PageSwap from "./PageSwap";

function NavBar({ query, setQuery }) {
  return (
    <div className={styles.nav}>
      <h1>MovieWatchlist</h1>
      <Search query={query} setQuery={setQuery} />
      <PageSwap />
    </div>
  );
}

export default NavBar;
