import styled from 'styled-components'
import { grey } from '../../styles/Colors'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr auto auto;
  -webkit-box-shadow: 0px 5px 5px 0px rgba(224,224,224,0.75);
  -moz-box-shadow: 0px 5px 5px 0px rgba(224,224,224,0.75);
  box-shadow: 0px 5px 5px 0px rgba(224,224,224,0.75);
  padding: 0 60px;
  align-items: center;
`

export const MenuSeparator = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${grey};
  margin: 0 25px;
`
