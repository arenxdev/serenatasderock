import React from 'react'
import { Router } from '@reach/router'
import { Template } from '../templates/Template'
import { Home } from '../pages/Home'
import { Serenade } from '../pages/Serenade'
import { Gallery } from '../pages/Gallery'
import { Contact } from '../pages/Contact'
import { Login } from '../pages/Login'

const App = () => (
  <>
    <Template>
      <Router>
        <Serenade path='/serenatas' />
        <Gallery path='/galeria' />
        <Contact path='/contactanos' />
        <Login path='/login' />
        <Home path='*' />
      </Router>
    </Template>
  </>
)

export default App
