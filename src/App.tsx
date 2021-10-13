import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import HomeRoute from './routes/home'
import AboutRoute from './routes/about'
import theme from './theme'
import styled from '@emotion/styled'

interface AppProps {}

function App({}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Header>
        <Main>
          <Routes>
            <Route path="/334" element={<Navigate to="home" />} />
            <Route path="home" element={<HomeRoute />} />
            <Route path="about" element={<AboutRoute />} />
          </Routes>
        </Main>
      </Router>
    </ThemeProvider>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    text-decoration: none;
    margin: 0 9px;
    color: #ccc;

    &.active {
      color: white;
    }
  }
`

const Main = styled.main`
  margin-top: 45px;
  padding: 9px;
`

export default App
