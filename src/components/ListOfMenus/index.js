import React from 'react'
import { Container, List } from './style'
import { MenuButton } from '../MenuButton'

export const ListOfMenus = () => (
  <Container>
    <List>
      <li><MenuButton url='/' text='Inicio' /></li>
      <li><MenuButton url='/serenatas' text='Serenatas' /></li>
      <li><MenuButton url='/galeria' text='Galería' /></li>
      <li><MenuButton url='/contactanos' text='Contáctanos' /></li>
    </List>
  </Container>
)
