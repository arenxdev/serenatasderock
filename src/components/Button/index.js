import React from 'react'
import { ModelButton, ModelLabel } from './style'

export const Button = ({ text, type, onClick, width }) => (
  <ModelButton width={width} type={type} onClick={onClick}>
    <ModelLabel>{text}</ModelLabel>
  </ModelButton>
)
