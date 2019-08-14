import React from 'react'
import { Container, HeroMessage, HeroMessageTittle, HeroMessageText } from './style'
import { Button } from '../Button'

export const Hero = () => (
  <Container>
    <HeroMessage>
      <HeroMessageTittle>
        Convierte un pequeño momento en un eterno y rockero recuerdo
      </HeroMessageTittle>
      <Button text='¡ SOLICITA TU SERENATA DE ROCK AHORA !' />
      <HeroMessageText>
        "Nuestra tarima es tu casa..."
      </HeroMessageText>
    </HeroMessage>
  </Container>
)
