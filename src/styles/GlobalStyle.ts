import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";
import Colors from "./Colors";

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

   /* 스크롤바 트랙 (배경) */
   ::-webkit-scrollbar-track {
    background: ${Colors.Grayscale10};
    border-radius: 12px;
  }

  /* 스크롤바 썸(움직이는 막대) */
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 12px;
  }

  /* 스크롤바 전체 (높이/두께 지정) */
  ::-webkit-scrollbar {
    height: 7px; /* 가로 스크롤 */
    width: 7px; /* 세로 스크롤 */
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
