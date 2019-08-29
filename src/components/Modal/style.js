import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 100vh;
  z-index: 1001;
`
export const ModalWrapper = styled.div`
  transition: all 0.8s;
  position: absolute;
  z-index: 8;
  display: grid;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(-100vh);
  opacity: 0;
  ${props => props.showModal && css`
    transform: translateY(0vh);
    opacity: 1;
  `}
`

export const ModalOverlay = styled.div`
  background-color: rgba(0,0,0,.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
`

// .Modal-login {
//   background-color: #fff;
//   padding: 1em;
//   display: block;
//   width: 420px;
//   position: relative;
// }
