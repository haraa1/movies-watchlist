import styles from "./PageSwap.module.css";

function PageSwap() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>All movies</li>
        <li>Watch list</li>
      </ul>
    </div>
  );
}

export default PageSwap;
