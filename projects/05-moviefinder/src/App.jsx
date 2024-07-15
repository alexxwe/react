import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>MovieFinder</h1>
      <form className='form'>
        <input placeholder='Mononoke Hime, Inception, Star Wars... ' />
        <button type='submit'>Search</button>
      </form>
      </header>
      <main>
        The movies here...
      </main>
    </div>
  )
}

export default App
