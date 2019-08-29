import styled from 'styled-components'
import { red, redDarken2, greyLighten1, grey } from '../../styles/Colors'

const selectButtonColor = (type = 'primary') => {
  const types = {
    primary: red,
    prymaryDark: redDarken2,
    basic: greyLighten1,
    basicDark: grey
  }
  return types[type]
}

export const ModelButton = styled.button`
  ${props => props.width && { width: props.width }}
  position: relative;
  display: block;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: ${props => selectButtonColor(props.type)};
  color: #ecf0f1;
  transition: background-color .3s;
  cursor: pointer;
  &:hover {
    background-color: ${props => selectButtonColor(`${props.type}Dark`)};
  }
  &:focus {
    background-color: ${props => selectButtonColor(`${props.type}Dark`)};
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, .3);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:active::before {
    width: 120%;
    padding-top: 120%;
    transition: width .2s ease-out, padding-top .2s ease-out;
  }
`
export const ModelLabel = styled.span`
  position: relative;
  display: block;
  padding: 12px 24px;
  font-family: Roboto;
`
