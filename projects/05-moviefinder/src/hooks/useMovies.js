import responseMovies from "../mocks/with-results.json";
// eslint-disable-next-line no-unused-vars
import withoutResults from "../mocks/no-results.json";

export function useMovies() {
    const movies = responseMovies.Search 
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }))
  
    return {movies: mappedMovies}
  }
