import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 20px;
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 20px Roboto, sans-serif;
  }
`;
