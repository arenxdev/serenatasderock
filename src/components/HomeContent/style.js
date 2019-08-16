import styled from 'styled-components'
import { greyLighten3, greyDarken2, greyDarken4 } from '../../styles/Colors'

export const Container = styled.div`
  max-width: 1024px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
`

export const ContentImg = styled.div`
  width: 180px;
  height: 350px;
  position: relative;
  margin-right: 20px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

export const Skull = styled.img`
  position: absolute;
  top: -50px;
  right: -20px;
`

export const Content = styled.div`
  width: 370px;
  height: 385px;
  border-radius: 20px;
  background-color: ${greyLighten3};
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 15px;
  text-align: center;
  color: ${greyDarken4};
  text-transform: uppercase;
`

export const Text = styled.p`
  font-size: 16px;
  color: ${greyDarken2};
`
