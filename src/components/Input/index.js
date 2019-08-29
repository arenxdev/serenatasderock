import React from 'react'
import { Container, InputText, Name, Bar, Highlight } from './style'

export const Input = ({ name, type, required = 'false' }) => (
  <Container>
    <InputText type={type} required={required} />
    <Highlight class='highlight' />
    <Bar />
    <Name>{name}</Name>
  </Container>
)
