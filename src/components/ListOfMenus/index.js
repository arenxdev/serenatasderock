import React from 'react'
import { Container, List } from './style'
import { MenuButton } from '../MenuButton'

export const ListOfMenus = () => (
  <Container>
    <List>
      <li><MenuButton isSelected url='#' text='Inicio' /></li>
      <li><MenuButton isSelected={false} url='#' text='Serenatas' /></li>
      <li><MenuButton isSelected={false} url='#' text='Galeria' /></li>
      <li><MenuButton isSelected={false} url='#' text='Contactanos' /></li>
    </List>
  </Container>
)
