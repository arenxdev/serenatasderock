import React from 'react'
import { Link } from '@reach/router'
import imgLogo from '../../icons/logo.png'
import { Container, Img } from './style'

export const Logo = ({ width = 100 }) => (
  <Container width={width} >
    <Link to='/'>
      <Img src={imgLogo} alt='logo' />
    </Link>
  </Container>
)
