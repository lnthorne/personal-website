import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    background: #000;
    color: #00ff00;
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  /* Disable text selection for better terminal feel */
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Allow text selection for input */
  input, textarea {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
`;
