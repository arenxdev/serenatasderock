import styled from 'styled-components'

export const ModelButton = styled.button`
  position: relative;
  display: block;
  margin: 30px auto;
  padding: 0;
  overflow: hidden;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  background-color: #2ecc71;
  color: #ecf0f1;
  transition: background-color .3s;
  &&:hover {
    background-color: #27ae60;
  }
  &&:focus {
    background-color: #27ae60;
  }
`
