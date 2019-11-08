import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #000;
    -webkit-font-smoothing: antialiased !important;
  }

  /* body, html, #root {
    height: 100%;
  } */
`;