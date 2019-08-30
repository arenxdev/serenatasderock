import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import { auth } from '../../util/firebase'
import { Container, Avatar, AvatarImg, UserName, Options } from './style'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Login } from '../Login'

export const NavUser = ({ name, avatar }) => {
  const { isAuth, activateAuth, removeAuth } = useContext(Context)
  const [user, setUser] = useState({})
  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal)

  const createAccountEmailPassword = ({ email, password, name = 'Aaron Felipe Isaacs' }) => {
    auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({ displayName: name })
        const config = { url: 'https://serenatasderock.firebaseapp.com/' }
        result.user.sendEmailVerification(config)
          .catch(error => console.log(error))
        auth().signOut()
      })
      .catch(error => console.log(error))
  }

  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider()
    auth().signInWithPopup(provider)
      .then(result => {
        activateAuth()
        setUser(result.user)
        avatar = result.user.photoURL
        setModal(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const signIn = ({ email, password }) => {
    auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        if (result.user.emailVerified) {
          activateAuth()
          setUser(result.user)
          setModal(false)
        } else {
          console.log('No se ha verificado email')
          auth().signOut()
        }
      })
  }

  const signOut = event => {
    event.preventDefault()
    auth().signOut()
    removeAuth()
    setUser({})
  }

  if (isAuth) {
    return (
      <Container>
        <UserName>
          {user.displayName}
        </UserName>
        <Avatar onClick={signOut}>
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
          <Login onSubmit={signIn} googleSubmit={signInWithGoogle} />
        </Modal>
      </>
    )
  }
}
