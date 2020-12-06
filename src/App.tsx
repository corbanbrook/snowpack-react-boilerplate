import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom'
import './App.css'
import HomeRoute from './routes/home'
import AboutRoute from './routes/about'

interface AppProps {}

function App({}: AppProps) {
  return (
    <Router>
      <div>
        <header>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<HomeRoute />} />
            <Route path="about" element={<AboutRoute />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
