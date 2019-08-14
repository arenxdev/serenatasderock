import React from 'react'
import { Container, Ancle } from './style.js'

export const MenuButton = ({ url, text, isSelected }) => (
  <Container isSelected={isSelected} >
    <Ancle href={url} className='MenuButton__ancla' >
      <span>
        {text}
      </span>
    </Ancle>
  </Container>
)
