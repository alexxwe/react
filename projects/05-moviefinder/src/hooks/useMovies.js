import { useMemo, useRef, useState } from "react"
import { searchMovies } from "../services/movies"

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)

    } catch (e){
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }
  // Se ejecuta cada vez que se utliza, al cambiar letra, al ejecutar, es decir, cada vez que se renderiza algo
  // const getSortedMovies = () => {
  //   const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  //   return sortedMovies
  // }

  //Solo se ejecuta, en este caso, cuando se cambia el sort o cuando cambia movies, nada de por medio.
  const sortedMovies = useMemo(() => {
  return sort 
  ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
  : movies
  }, [sort, movies])  

  return { movies: sortedMovies, getMovies, loading, error }
}
