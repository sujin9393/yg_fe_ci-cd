import { css } from "styled-components";

const Fonts = css`
  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-style: normal;
    src:
      url("/fonts/Pretendard-Light.woff2") format("woff2"),
      url("/fonts/Pretendard-Light.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-style: normal;
    src:
      url("/fonts/Pretendard-Regular.woff2") format("woff2"),
      url("/fonts/Pretendard-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-style: normal;
    src:
      url("/fonts/Pretendard-Medium.woff2") format("woff2"),
      url("/fonts/Pretendard-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-style: normal;
    src:
      url("/fonts/Pretendard-SemiBold.woff2") format("woff2"),
      url("/fonts/Pretendard-Regular.woff") format("woff");
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-style: normal;
    src:
      url("/fonts/Pretendard-Bold.woff2") format("woff2"),
      url("/fonts/Pretendard-Regular.woff") format("woff");
  }
`;

export default Fonts;
