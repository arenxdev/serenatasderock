import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400");

  html {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #app {
    overflow-x: hidden;
  }
`
