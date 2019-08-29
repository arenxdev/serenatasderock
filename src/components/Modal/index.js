import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContainer, ModalWrapper, ModalOverlay } from './style'

export const Modal = props => {
  return ReactDOM.createPortal(
    <ModalContainer showModal={props.show}>
      {props.show &&
        <ModalOverlay onClick={props.close} />
      }
      <ModalWrapper showModal={props.show}>
        {props.show && props.children}
      </ModalWrapper>
    </ModalContainer>,
    document.getElementById('modal'))
}
