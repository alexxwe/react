import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const[error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if(isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if(search === '') {
      setError('Cant find movie without search term')
      return
    }

    if(search.match(/^\d+$/)) {
      setError('Cant find movie with number')
      return
    }

    if(search.length < 3) {
      setError('The search must be at least 3 characters')
      return
    }
    setError(null)
  },[search])

  return{ search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const{ search, updateSearch, error } = useSearch()
  const {movies, loading, getMovies} = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }
  
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className="page">

      <header>
        <h1>MovieFinder</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input 
          style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }}
          onChange={handleChange} value={search} name="query" placeholder="Inception, Star Wars, Mononoke... " />
          <input type="checkbox" onChange={handleSort} checked={sort} ></input>
          <button type="submit">Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  );
}

export default App;
