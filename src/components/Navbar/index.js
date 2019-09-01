import React from 'react'
import { Container, MenuSeparator } from './style'
import { ListOfMenus } from '../ListOfMenus'
import { Logo } from '../Logo'
import { NavUser } from '../NavUser'

export const Navbar = () => (
  <>
    <Container>
      <Logo />
      <ListOfMenus />
      <MenuSeparator />
      <NavUser />
    </Container>
  </>
)
