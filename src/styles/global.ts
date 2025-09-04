import { createGlobalStyle } from "styled-components";

// Estilos globais da aplicação
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: #f8f9fa;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;
