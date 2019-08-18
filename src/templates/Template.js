import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Template = props => (
  <>
    <GlobalStyle />
    <Navbar />
    {props.children}
    <Footer />
  </>
)
