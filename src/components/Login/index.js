import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, ButtonGoogle } from './style'
import { Button } from '../Button'
import { Google } from '../Socialsvg'
import { Input } from '../Input'

export const Login = ({ onSubmit, googleSubmit }) => {
  const email = useInputValue()
  const password = useInputValue()

  const handleGoogleAuth = event => {
    event.preventDefault()
    googleSubmit()
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form onSubmit={handleSubmit} >
      <div>
        <ButtonGoogle type='button' onClick={handleGoogleAuth} >
          <Google style={{ width: '25px', height: '25px' }} />
          <span>Continuar con Google</span>
        </ButtonGoogle>
      </div>
      <div style={{ height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <Input name='Usuario' {...email} />
        <Input name='Contraseña' type='password' {...password} />
      </div>
      <Button text='Iniciar sesión' width='270px' />
    </Form>
  )
}
