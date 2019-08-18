import React from 'react'
import { GlobalStyle } from '../styles/GlobalStyle'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 50px);
`

export const Template = props => (
  <>
    <GlobalStyle />
    <Navbar />
    <Container>
      {props.children}
      <Footer />
    </Container>
  </>
)
