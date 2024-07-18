import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const {movies} = useMovies()
  const[query, setQuery] = useState('')
  const[error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(event.target.value)
  }

  useEffect(() => {
    if(query === '') {
      setError('Cant find movie without search term')
      return
    }

    if(query.match(/^\d+$/)) {
      setError('Cant find movie with number')
      return
    }

    if(query.length < 3) {
      setError('The search must be at least 3 characters')
      return
    }
    setError(null)
  },[query])

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
          onChange={handleChange} value={query} name="query" placeholder="Inception, Star Wars, Mononoke... " />
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
