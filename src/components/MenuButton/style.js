import styled, { css } from 'styled-components'
import { grey, greyLighten4, greyDarken2, red } from '../../styles/Colors'

export const Container = styled.div`
  height: 60px;
  width: 160px;
  border-bottom: solid 2px ${grey};
  ${props => props.isSelected && css`
    background-color: ${greyLighten4};
    border-bottom: solid 2px ${red};
  `}
`

export const Ancle = styled.a`
  text-decoration: none;
  color: ${greyDarken2};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
