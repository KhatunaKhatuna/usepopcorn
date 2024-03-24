import MoviesListBox from "./MoviesListBox";
import WatchedBox from "./WatchedBox";

export default function Main({ movies }) {
  return (
    <main className="main">
      <MoviesListBox movies={movies} />
      <WatchedBox />
    </main>
  );
}
