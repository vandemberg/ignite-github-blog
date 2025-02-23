import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }

  input,textarea, body {
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme["base-text"]};
  }

  ${({ theme }) => `
    body {
      background-color: ${theme["base-background"]};
    }
  `}
`
