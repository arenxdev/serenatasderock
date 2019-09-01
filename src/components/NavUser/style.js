import styled from 'styled-components'
import { greyDarken2 } from '../../styles/Colors'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Avatar = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
`
export const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const UserName = styled.div`
  color: ${greyDarken2};
  margin: 0 10px;
`

export const Options = styled.div`
  color: ${greyDarken2};
`

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: ${greyDarken2};
`
