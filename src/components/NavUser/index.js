import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Container, Avatar, AvatarImg, UserName, Options, Link } from './style'

export const NavUser = () => {
  const { isAuth, removeAuth } = useContext(Context)

  const signOut = event => {
    event.preventDefault()
    removeAuth()
  }

  if (isAuth) {
    const { displayName, photoURL } = JSON.parse(window.sessionStorage.getItem('user'))

    return (
      <Container>
        <UserName>
          {displayName}
        </UserName>
        <Avatar onClick={signOut}>
          <AvatarImg src={photoURL} alt='avatar' />
        </Avatar>
        <Options>
        ▼
        </Options>
      </Container>
    )
  } else {
    return (
      <>
        <Link to='/login'>Iniciar sesión</Link>
      </>
    )
  }
}
