import styled from 'styled-components'
import { containerdiv } from '../../styles/Styleutil'
import { greyDarken4 } from '../../styles/Colors'

export const Container = styled.div`
  width: 100%;
  height: 160px;
  margin-top: 30px;
  background-color: ${greyDarken4};
`

export const Data = styled.div`
  ${containerdiv}
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid red;
`
