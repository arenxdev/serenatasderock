import React from 'react'
import { Container, Avatar, AvatarImg, UserName, Options } from './style'

export const NavUser = ({ name, avatar }) => (
  <Container>
    <UserName>
      {name}
    </UserName>
    <Avatar>
      <AvatarImg src={avatar} alt='avatar' />
    </Avatar>
    <Options>
      ▼
    </Options>
  </Container>
)
