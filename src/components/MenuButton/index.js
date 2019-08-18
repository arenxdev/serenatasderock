import React from 'react'
import { Container, Link } from './style.js'

export const MenuButton = ({ url = '#', text }) => (
  <Container >
    <Link to={url} className='MenuButton__ancla' >
      <span>
        {text}
      </span>
    </Link>
  </Container>
)
