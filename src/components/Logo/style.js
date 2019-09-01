import styled from 'styled-components'

export const Container = styled.div`
  height: ${props => `${(props.width / 2)}px`};
  width: ${props => `${props.width}px`};
`

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
