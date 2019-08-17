import React from 'react'
import { Container } from './style'
import { Skill } from '../Skill'

export const ListOfSkills = () => (
  <Container>
    {[1, 2, 3, 4, 5, 6].map(key => <Skill key={key} />)}
  </Container>
)
