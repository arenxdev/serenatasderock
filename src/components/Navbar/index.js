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
      <NavUser name='Aaron Isaacs' avatar='https://es.gravatar.com/userimage/159727741/b202ede4610fa5c402ee58da070422e8.png?size=200' />
    </Container>
  </>
)
