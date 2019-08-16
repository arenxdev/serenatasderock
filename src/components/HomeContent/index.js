import React from 'react'
import { Container, ContentImg, Img, Content, Title, Text, Skull } from './style'
import guitarimg from '../../images/contentguitar.png'
import addimg from '../../images/contentadd.png'
import skullimg from '../../images/skull.png'

export const HomeContent = () => (
  <Container>
    <ContentImg>
      <Img src={guitarimg} />
    </ContentImg>
    <Content>
      <Title>formar parte de la banda</Title>
      <Text>Crea tu serenata perfecta seleccionando los músicos, instrumentos y canciones favoritas que quieres escuchar!</Text>
      <Text>Tenemos un repertorio de más de 170 canciones</Text>
      <Text>¿las canciones que quieres no están en nuestro repertorio? No te preocupes, Nosotros las ensamblamos para ti!</Text>
    </Content>
    <ContentImg>
      <Img src={addimg} />
      <Skull src={skullimg} />
    </ContentImg>
  </Container>
)
