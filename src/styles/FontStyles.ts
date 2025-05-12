import { css } from "styled-components";

const fontSizes = {
  XXL: "1.75rem", // 28px
  XL: "1.5rem", // 24px
  LG: "1.25rem", // 20px
  MD1: "1.125rem", // 18px
  MD2: "1rem", // 16px
  SM: "0.875rem", // 14px
  XS: "0.75rem", // 12px
  XXS: "0.625rem", // 10px
  XXXS: "0.5rem", //8px
};

const fontWeights = {
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400,
  Light: 300,
};

const getFont = (
  size: keyof typeof fontSizes,
  weight: keyof typeof fontWeights
) => css`
  font-family: "Pretendard";
  font-size: ${fontSizes[size]};
  font-weight: ${fontWeights[weight]};
  line-height: 150%;
`;

const FontStyles = {
  // XXL '1.75rem', // 28px
  XXL_Bold: getFont("XXL", "Bold"),
  XXL_SemiBold: getFont("XXL", "SemiBold"),
  XXL_Regular: getFont("XXL", "Regular"),

  // XL '1.5rem', // 24px
  XL_Bold: getFont("XL", "Bold"),
  XL_SemiBold: getFont("XL", "SemiBold"),
  XL_Regular: getFont("XL", "Regular"),

  // LG '1.25rem', // 20px
  LG_Bold: getFont("LG", "Bold"),
  LG_SemiBold: getFont("LG", "SemiBold"),
  LG_Medium: getFont("LG", "Medium"),

  // MD1 '1.125rem', // 18px
  MD1_Bold: getFont("MD1", "Bold"),
  MD1_SemiBold: getFont("MD1", "SemiBold"),
  MD1_Medium: getFont("MD1", "Medium"),
  MD1_Regular: getFont("MD1", "Regular"),

  // MD2 '1rem', // 16px
  MD2_Bold: getFont("MD2", "Bold"),
  MD2_SemiBold: getFont("MD2", "SemiBold"),
  MD2_Medium: getFont("MD2", "Medium"),
  MD2_Regular: getFont("MD2", "Regular"),

  // SM '0.875rem', // 14px
  SM_Bold: getFont("SM", "Bold"),
  SM_SemiBold: getFont("SM", "SemiBold"),
  SM_Medium: getFont("SM", "Medium"),
  SM_Regular: getFont("SM", "Regular"),

  // XS '0.75rem', // 12px
  XS_Bold: getFont("XS", "Bold"),
  XS_SemiBold: getFont("XS", "SemiBold"),
  XS_Medium: getFont("XS", "Medium"),
  XS_Regular: getFont("XS", "Regular"),
  XS_Light: getFont("XS", "Light"),

  XXS_Bold: getFont("XXS", "Bold"),
  XXS_SemiBold: getFont("XXS", "SemiBold"),
  XXS_Medium: getFont("XXS", "Medium"),
  XXS_Regular: getFont("XXS", "Regular"),
  XXS_Light: getFont("XXS", "Light"),

  XXXS_Bold: getFont("XXXS", "Bold"),
  XXXS_SemiBold: getFont("XXXS", "SemiBold"),
  XXXS_Medium: getFont("XXXS", "Medium"),
  XXXS_Regular: getFont("XXXS", "Regular"),
  XXXS_Light: getFont("XXXS", "Light"),
};

export default FontStyles;
