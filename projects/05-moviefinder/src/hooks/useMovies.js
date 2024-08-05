// eslint-disable-next-line no-unused-vars
import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";
import { useState } from "react";

export function useMovies({search}) {
    const [responseMovies, setResponseMovies] = useState([])
  
    const movies = responseMovies.Search 
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }))
  
    const getMovies = () => {
      if(search) {
        fetch(`https://www.omdbapi.com/?apikey=28cd683&s=${search}`)
          .then(res => res.json())
          .then(json => {
            setResponseMovies(json)
          })
      } else {
        setResponseMovies(withoutResults)
      }
    }

    return {movies: mappedMovies, getMovies}
  }
