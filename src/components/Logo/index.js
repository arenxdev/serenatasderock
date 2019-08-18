import React from 'react'
import { Link } from '@reach/router'
import imgLogo from '../../icons/logo.png'
import { Container, Img } from './style'

export const Logo = () => (
  <Container>
    <Link to='/'>
      <Img src={imgLogo} alt='logo' />
    </Link>
  </Container>
)
