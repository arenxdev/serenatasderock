import styled from 'styled-components'
import { containerdiv } from '../../styles/Styleutil'
import { greyDarken4, red, brancolor } from '../../styles/Colors'

const textstyle = `
  color: #fff;
  text-align: center;
  height: 22px;
  font-size: 15px;
`

export const Container = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${greyDarken4};
`

export const Data = styled.div`
  ${containerdiv}
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 235px;
`

export const DataTittle = styled.p`
  border-bottom: 1px solid ${red};
  ${textstyle};
`

export const BrandTittle = styled.p`
  border-bottom: 1px solid ${brancolor};
  ${textstyle};
`

export const BoxLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Ancla = styled.a`
  width: 40%;
`

export const Logosimg = styled.img`
  width: 100%;
`

export const Text = styled.p`
  ${textstyle};
`

export const Emojis = styled.span`
  color: ${red};
`

export const Numbers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
`

export const Technologies = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
