import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, ButtonGoogle, Container, Separator, NewAccount, Title, Text } from './style'
import { Button } from '../Button'
import { Google } from '../Socialsvg'
import { Input } from '../Input'
import { Logo } from '../Logo'

export const LoginForm = ({ signIn, googleSubmit, createAccount, isSuccessfull }) => {
  const name = useInputValue()
  const email = useInputValue()
  const password = useInputValue()
  const [isNew, setNew] = useState(false)

  const handleGoogleAuth = event => {
    event.preventDefault()
    googleSubmit()
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (isNew) {
      createAccount({ name: name.value, email: email.value, password: password.value })
    } else {
      signIn({ email: email.value, password: password.value })
    }
  }

  const signNewUser = () => (
    <>
      <div>
        <ButtonGoogle type='button' onClick={handleGoogleAuth} >
          <Google style={{ width: '30px', height: '30px' }} />
          <span>Continuar con Google</span>
        </ButtonGoogle>
        <Separator>o</Separator>
      </div>
      <div style={{ height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <Input name='Usuario' {...email} />
        <Input name='Contraseña' type='password' {...password} />
      </div>
      <div>
        <Button text='INICIAR SESIÓN' width='270px' />
        <NewAccount type='button' onClick={() => setNew(true)}>crear cuenta</NewAccount>
      </div>
    </>
  )

  const registerNewUser = () => (
    <>
      <div style={{ height: '230px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
        <Input name='Nombre' {...name} />
        <Input name='Usuario' {...email} />
        <Input name='Contraseña' type='password' {...password} />
      </div>
      <div>
        <Button text='REGISTRARSE' width='270px' />
        <NewAccount onClick={() => setNew(false)}>volver</NewAccount>
      </div>
    </>
  )

  const registerSuccesfull = () => (
    <>
      <Title>¡Bienvenido Roquero!</Title>
      <Text>
        Te hemos enviado un correo electrónico para que valides tu correo
      </Text>
      <Logo width={220} />
    </>
  )

  return (
    <Container>
      <Form onSubmit={handleSubmit} >
        {isSuccessfull && registerSuccesfull()}
        {!isNew && !isSuccessfull && signNewUser()}
        {isNew && !isSuccessfull && registerNewUser()}
      </Form>
    </Container>
  )
}
