import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: initial;
    min-height: 100%;
    width: 100vw;

    font-size: 16px;
    line-height: 1.5;
  }

  body {
    -webkit-overflow-scrolling: touch;
    margin: 0;
    overflow-y: auto;

    background-color: ${p => p.theme.lightGray};
    color: ${p => p.theme.black72};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${p => p.theme.font};
    font-weight: 400;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;

    font-size: 1rem;
    font-weight: 400;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
