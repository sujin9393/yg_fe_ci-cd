import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";

const GlobalStyle = createGlobalStyle`
${Fonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
   font-family: 'Pretendard'; 
    background-color: white;
    overflow-x: hidden; 
  }

  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
  }
`;

export default GlobalStyle;
