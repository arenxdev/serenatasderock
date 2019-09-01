import styled from 'styled-components'
import { greyDarken4, greyDarken3, red } from '../../styles/Colors'
import bgimage from '../../images/hero.jpg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

export const Form = styled.form`
  width: 375px;
  height: 450px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 50px;
  background: rgba(255,255,255,.9);
  position: absolute;
`
export const ButtonGoogle = styled.button`
  font-family: Roboto;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #dadada;
  height: 50px;
  color: #7b7869;
  font-size: 15px;
  letter-spacing: 0.5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 280px;
  padding: 0 20px;
  &:hover {
    background-color: #f8f8f8;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: ${greyDarken3};
  font-size: 20px;
  &::before, &::after {
    content: "";
    height: 2px;
    width: 120px;
    background: ${greyDarken3};
    display: block;
  }
`

export const NewAccount = styled.button`
  display: block;
  background: transparent;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  color: ${red};
  margin: 10px auto 0;
`
export const Title = styled.h1`
  font-size: 25px;
  border-bottom: 1px solid ${red};
  width: 100%;
  text-align: center;
  height: 40px;
  color: ${greyDarken4};
`

export const Text = styled.p`
  font-size: 20px;
  color: ${greyDarken3};
`
