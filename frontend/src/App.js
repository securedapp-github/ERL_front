import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
