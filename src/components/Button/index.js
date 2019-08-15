import React from 'react'
import { ModelButton, ModelLabel } from './style'

export const Button = ({ text }) => (
  <ModelButton >
    <ModelLabel>{text}</ModelLabel>
  </ModelButton>
)
