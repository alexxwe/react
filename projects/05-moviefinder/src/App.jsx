import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch () {
  const [search, updateSearch] = useState('')
  const[error, setError] = useState(null)

  useEffect(() => {
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
  const {movies} = useMovies()
  const{ search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
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
          <button type="submit">Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  );
}

export default App;
