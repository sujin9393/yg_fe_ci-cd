import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";

export const SignupSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  gap: 10px;
  margin: 15px 0px;
  align-items: center;
`;

export const SectionName = styled.p`
  ${FontStyles.MD2_Bold}
`;

export const SectionInfo = styled.p`
  ${FontStyles.XS_Regular}
  color: ${Colors.Grayscale60};
  text-align: center;
`;

export const SignupForm = styled.form`
  width: 272px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  > button {
    margin-top: 10px;
  }
`;

export const ConfirmButton = styled.button`
  border: none;
  background-color: ${Colors.Grayscale0};
  ${FontStyles.XS_Medium};
  color: ${Colors.Grayscale60};
  text-decoration: underline;
  cursor: pointer;

  &:disabled {
    color: ${Colors.Grayscale50};
    cursor: default;
  }
`;
