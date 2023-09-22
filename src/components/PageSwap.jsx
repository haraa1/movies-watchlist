import { Link, NavLink } from "react-router-dom";
import styles from "./PageSwap.module.css";
import Logout from "../features/authentication/Logout";

function PageSwap() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.activeLink} to="/home">
            All movies
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.activeLink} to="/watchlist">
            Watchlist
          </NavLink>
        </li>
        <Logout />
      </ul>
    </div>
  );
}

export default PageSwap;
