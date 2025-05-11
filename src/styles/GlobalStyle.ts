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
   font-family: 'BMJUA'; 
    overflow-x: hidden; 
  }

  /* ✅ 크롬 기준: 스크롤 동작은 유지, 바만 숨김 */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyle;
