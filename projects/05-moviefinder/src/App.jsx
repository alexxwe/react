import "./App.css";
// eslint-disable-next-line no-unused-vars
import responseMovies from "./mocks/with-results.json";
// eslint-disable-next-line no-unused-vars
import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/Movies";

function App() {
  const movies = responseMovies.Search 

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  }))

  return (
    <div className="page">

      <header>
        <h1>MovieFinder</h1>
        <form className="form">
          <input placeholder="Mononoke Hime, Inception, Star Wars... " />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  );
}

export default App;
