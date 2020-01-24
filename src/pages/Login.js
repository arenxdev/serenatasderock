import React, { useContext, useState } from 'react'
import { navigate } from '@reach/router'
import { LoginForm } from '../components/LoginForm'
import { Context } from '../Context'
import { auth } from '../util/firebase'

export const Login = () => {
  const { isAuth, activateAuth } = useContext(Context)
  const [isSuccessfull, setSuccessfull] = useState(false)

  if (isAuth) {
    navigate('/serenatas')
  }

  const createAccountEmailPassword = ({ email, password, name }) => {
    auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({ displayName: name })
        const config = { url: 'https://serenatasderock.firebaseapp.com/' }
        result.user.sendEmailVerification(config)
          .catch(error => console.log(error))
        auth().signOut()
        setSuccessfull(true)
      })
      .catch(error => console.log(error))
  }

  const signInWithGoogle = () => {
    const provider = new auth.GoogleAuthProvider()
    signInWithAuth(provider)
  }

  const signInWithFacebok = () => {
    const provider = new auth.FacebookAuthProvider()
    signInWithAuth(provider)
  }

  const signInWithAuth = (provider) => {
    auth().signInWithPopup(provider)
      .then(result => {
        activateAuth(result.user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const signIn = ({ email, password }) => {
    auth().signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerified) {
          activateAuth(result.user)
        } else {
          console.log('No se ha verificado email')
          auth().signOut()
        }
      })
  }
  return (
    <>
      {<LoginForm
        signIn={signIn}
        googleSubmit={signInWithGoogle}
        facebookSubmit={signInWithFacebok}
        createAccount={createAccountEmailPassword}
        isSuccessfull={isSuccessfull}
      />}
    </>
  )
}
