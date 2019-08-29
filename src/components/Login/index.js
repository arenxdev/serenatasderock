import React from 'react'
import { Container, ButtonGoogle } from './style'
import { Button } from '../Button'
import { Google } from '../Socialsvg'
import { Input } from '../Input'

export const Login = () => {
  return (
    <Container>
      <div>
        <ButtonGoogle>
          <Google style={{ width: '25px', height: '25px;' }} />
          <span>Continuar con Google</span>
        </ButtonGoogle>
      </div>
      <div style={{ height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%' }}>
        <Input name='Usuario' />
        <Input name='Contraseña' type='password' />
      </div>
      <Button text='Iniciar sesión' width='270px' />
    </Container>
  )
}
