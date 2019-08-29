import React, { useContext, useState } from 'react'
import { Container, Avatar, AvatarImg, UserName, Options } from './style'
import { Context } from '../../Context'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Login } from '../Login'

export const NavUser = ({ name, avatar }) => {
  const { isAuth } = useContext(Context)
  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal)

  if (isAuth) {
    return (
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
  } else {
    return (
      <>
        <Button text='Iniciar sesión' type='basic' onClick={showModal} />
        <Modal show={modal} close={showModal} >
          <Login />
        </Modal>
      </>
    )
  }
}
