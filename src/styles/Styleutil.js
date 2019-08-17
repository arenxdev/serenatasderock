import { redDarken4, black } from './Colors'

export const boxshadow = `
  -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,.5);
  box-shadow: box-shadow: 0px 5px 5px 0px rgba(0,0,0,.5);
`

export const gradientbg = `
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(left, ${redDarken4} 0%, ${black} 100%);
    background: -webkit-linear-gradient(left, ${redDarken4} 0%,${black} 100%);
    background: linear-gradient(to right, ${redDarken4} 0%,${black} 100%);
    opacity: 0.5;
  }
`

export const courtimg = `
  &::after {
    content: "";
    border-top: 40px solid transparent;
    border-right: 100vw solid #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const containerdiv = `
  max-width: 1024px;
  margin: 0 auto;
`
