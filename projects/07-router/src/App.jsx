import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './assets/consts'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
    <h1> Home </h1>
    <p> Example page making a react router</p>
    <button onClick={() => navigate('/about')}> About us </button>
    </>
  )
}

function AboutPage() {
  return (
    <>
    <h1> About </h1>
    <div>
    <img src='https://avatars.githubusercontent.com/u/91157929?s=400&u=09341df1b71e23749a0a9f4f255f52d684fe1fa8&v=4' alt='Profile photo' style={{ borderRadius: '50%' }} ></img>
    <p> Hi! Im Alex, software Developer, this is my React Router practice.</p>
    </div>
    <button onClick={() => navigate('/')}> Home </button>
    </>
  )
}

function App() {
  const[currentPath, setCurrentPath ] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return() => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  return (
    <main> 
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
