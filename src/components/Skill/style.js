import styled from 'styled-components'
import { greyDarken2 } from '../../styles/Colors'
import imgskill from '../../images/skill1.jpg'
import { gradientbg, boxshadow } from '../../styles/Styleutil'

export const Container = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 15px;
  position: relative;
  margin: 20px;
`

export const Bgimg = styled.div`
  background-image: url(${imgskill});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  ${gradientbg}
  position: absolute;
`

export const Msgbox = styled.div`
  width: 270px;
  height: 90px;
  padding: 20px 15px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  transform: translateY(15px);
  ${boxshadow}
`
export const Text = styled.p`
  color: ${greyDarken2};
  font-size: 15px;
`
