import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Navbar } from './Navbar'
import { Hero } from './Hero'

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Hero />
  </>
)

export default App
