import styled from 'styled-components'
import { red } from '../../styles/Colors'

export const InputText = styled.input`
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:270px;
  border:none;
  border-bottom:1px solid #757575;
  &:focus {
    border: none;
  }
`
export const Name = styled.label`
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
`
export const Bar = styled.span`
  position:relative;
  display:block;
  width:270px;
  &::before, &::after {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:${red}; 
    transition:0.2s ease all; 
  }
  &::before {
    left:50%;
  }
  &::after {
    right:50%; 
  }
`

export const Highlight = styled.span`
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
`

export const Container = styled.div`
  position: relative; 
  & ${InputText}:focus ~ ${Name}, ${InputText}:valid ~ ${Name} {
    top:-20px;
    font-size:14px;
    color:${red};
  }
  & ${InputText}:focus ~ ${Bar}::before, ${InputText}:focus ~ ${Bar}::after {
    width:50%;
  }
  & ${InputText}:focus ~ Highlight{
    animation:inputHighlighter 0.3s ease;
  }
`

/* ANIMATIONS ================ */
// @-webkit-keyframes inputHighlighter {
// 	from { background:${red}; }
//   to 	{ width:0; background:transparent; }
// }
// @-moz-keyframes inputHighlighter {
// 	from { background:${red}; }
//   to 	{ width:0; background:transparent; }
// }
// @keyframes inputHighlighter {
// 	from { background:${red}; }
//   to 	{ width:0; background:transparent; }
// }
