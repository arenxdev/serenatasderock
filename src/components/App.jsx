import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { HomeContent } from './HomeContent'

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Hero />
    <HomeContent />
  </>
)

export default App
