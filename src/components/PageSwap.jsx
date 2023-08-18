import { NavLink } from "react-router-dom";
import styles from "./PageSwap.module.css";

function PageSwap() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">All movies</NavLink>
        </li>
        <li>
          <NavLink to="watchlist">Watchlist</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageSwap;
