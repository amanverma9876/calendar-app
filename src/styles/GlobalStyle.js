import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #f3ec78, #af4261);
    color: #333;
     @media (max-width: 768px) {
      font-size: 14px;
  }
  * {
    box-sizing: inherit;
  }
  h1, h2 {
    color: #fff;
  }
  a {
    color: #61dafb;
    text-decoration: none;
  }
`;

export default GlobalStyle;
