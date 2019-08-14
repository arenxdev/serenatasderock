import React from 'react'
import imgLogo from '../../icons/logo.png'
import { Container, Img } from './style'

export const Logo = () => (
  <Container>
    <Img src={imgLogo} alt='logo' />
  </Container>
)
