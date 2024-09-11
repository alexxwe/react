import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
    <h1> Home </h1>
    <p> Exaple page doing react router</p>
    <a href='/about'> About us </a>
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
    <a href='/'> Home </a>
    </>
  )
}

function App() {
  const[currentPath, setCurrentPath ] = useState(window.location.pathname)
  return (
    <main> 
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
