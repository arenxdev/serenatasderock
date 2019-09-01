import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { grey, greyLighten4, greyDarken2, red } from '../../styles/Colors'

export const Container = styled.div`
  height: 50px;
  width: 120px;
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: ${greyDarken2};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: solid 2px ${grey};
  &[aria-current] {
    background-color: ${greyLighten4};
    border-bottom: solid 2px ${red};
  }
`
