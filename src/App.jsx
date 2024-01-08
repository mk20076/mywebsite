import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1> Meryem Khadrouni's Portfolio </h1>
      </div>

      <div> 
        <h2> MY PROTFOLIO </h2>
      </div> 

      <ul>
        <a href="default.asp">Home</a>
        <a href="news.asp">Resume</a>
        <a href="contact.asp">Contact</a>
        <a href="about.asp">About</a>
      </ul>

      </>
    ) 
  }



export default App


