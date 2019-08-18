import styled from 'styled-components'
import { grey } from '../../styles/Colors'
import { boxshadow } from '../../styles/Styleutil'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr auto auto;
  padding: 0 60px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  ${boxshadow};
`

export const MenuSeparator = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${grey};
  margin: 0 25px;
`
