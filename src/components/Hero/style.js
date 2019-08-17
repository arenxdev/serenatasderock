import styled from 'styled-components'
import { red } from '../../styles/Colors'
import { gradientbg, courtimg } from '../../styles/Styleutil'
import imgHero from '../../images/hero.jpg'

export const Container = styled.div`
  height: 300px;
  background-image: url(${imgHero});
  background-size: cover;
  background-position: center;
  margin-top: 5px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  ${gradientbg}
  ${courtimg}
`

export const HeroMessage = styled.div`
  width: 500px;
  height: 200px;
  position: relative;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px 10px;
`

export const HeroMessageTittle = styled.p`
  color: #fff;
  text-align: center;
  font-size: 25px;
`

export const HeroMessageText = styled.p`
  color: ${red};
  text-align: center;
  font-size: 16px;
`
