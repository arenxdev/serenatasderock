import styled from 'styled-components'
import { redDarken4, black, red } from '../../styles/Colors'
import imgHero from '../../images/hero.jpg'

export const Container = styled.div`
  height: 400px;
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center;
  margin-top: 5px;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(left, ${redDarken4} 0%, ${black} 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, ${redDarken4} 0%,${black} 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, ${redDarken4} 0%,${black} 100%);
    opacity: 0.5;
  }
`

export const HeroMessage = styled.div`
  width: 700px;
  height: 270px;
  position: relative;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 15px;
`

export const HeroMessageTittle = styled.p`
  color: #fff;
  text-align: center;
  font-size: 30px;
`

export const HeroMessageText = styled.p`
  color: ${red};
  text-align: center;
  font-size: 18px;
`
