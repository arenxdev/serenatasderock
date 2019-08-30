import React from 'react'
import { Container, InputText, Name, Bar, Highlight } from './style'

export const Input = ({ name, type, value, onChange }) => (
  <Container>
    <InputText type={type} value={value} onChange={onChange} required />
    <Highlight />
    <Bar />
    <Name>{name}</Name>
  </Container>
)
