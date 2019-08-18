import React from 'react'
import { Router } from '@reach/router'
import { Template } from '../templates/Template'
import { Home } from '../pages/Home'

const App = () => (
  <>
    <Template>
      <Router>
        <Home path='/' />
      </Router>
    </Template>
  </>
)

export default App
