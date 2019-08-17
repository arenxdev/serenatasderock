import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { HomeContent } from './HomeContent'
import { ListOfSkills } from './ListOfSkills'
import { Footer } from './Footer'

const App = () => (
  <>
    <GlobalStyle />
    <Navbar />
    <Hero />
    <HomeContent />
    <ListOfSkills />
    <Footer />
  </>
)

export default App
