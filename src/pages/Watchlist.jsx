import NavBar from "../components/NavBar";
import WatchlistBox from "../components/WatchlistBox";

function Watchlist({ watchlist }) {
  return (
    <>
      <NavBar />
      <WatchlistBox watchlist={watchlist} />
    </>
  );
}

export default Watchlist;
