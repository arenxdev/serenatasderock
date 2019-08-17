import React from 'react'
import { Container, Data, DataContainer, DataTittle, BoxLogos, Ancla, Logosimg, Text, Emojis, Numbers, Social, BrandTittle, Avatar, Technologies } from './style'
import { Picsvg } from '../Picsvg'
import { Facebook, Twitter, Youtube, Instagram, Whastaap } from '../Socialsvg'
import { Reactlogo, Nodejslogo, Electronjslogo } from '../Technologies'
import ccapitalimg from '../../images/ccapital.png'
import eltiempoimg from '../../images/eltiempo.png'
import aaronavatarimg from '../../images/aaronavatar.png'

export const Footer = () => (
  <Container>
    <Data>
      <DataContainer>
        <DataTittle>¡ Somos noticia !</DataTittle>
        <BoxLogos>
          <Ancla href='#'>
            <Logosimg src={ccapitalimg} />
          </Ancla>
          <Ancla href='#'>
            <Logosimg src={eltiempoimg} />
          </Ancla>
        </BoxLogos>
        <Text>
          Nuestra tarima es tu casa <Emojis>❤🎷🎸</Emojis>
        </Text>
      </DataContainer>
      <DataContainer>
        <DataTittle>Siguenos en las redes</DataTittle>
        <Numbers>
          <Picsvg />
          <div>
            <Text>(57+) 312 277 8286</Text>
            <Text>(57+) 320 257 1662</Text>
          </div>
        </Numbers>
        <Social>
          <Facebook />
          <Twitter />
          <Youtube />
          <Instagram />
          <Whastaap />
        </Social>
      </DataContainer>
      <DataContainer>
        <Avatar src={aaronavatarimg} />
        <BrandTittle>Aaron Isaacs Software</BrandTittle>
        <Technologies>
          <Reactlogo />
          <Nodejslogo />
          <Electronjslogo />
        </Technologies>
      </DataContainer>
    </Data>
  </Container>
)
