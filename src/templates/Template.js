import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { GlobalStyle } from '../styles/GlobalStyle'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 45px);
`

export const Template = props => (
  <>
    <Helmet>
      <meta name='description' content='Serenatas de rock y pop' />
    </Helmet>
    <GlobalStyle />
    <Navbar />
    <Container>
      {props.children}
      <Footer />
    </Container>
  </>
)
