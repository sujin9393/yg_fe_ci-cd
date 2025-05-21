import styled from "styled-components";
import { Colors, FontStyles } from "../../styles";
import CheckBox from "../../assets/icons/CheckBox.svg?react";
import NonCheckBox from "../../assets/icons/NonCheckBox.svg?react";

export const FilteringContainer = styled.div`
  margin: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectBox = styled.div`
  ${FontStyles.XS_Medium};
  color: ${Colors.Grayscale60};
  display: flex;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
`;

export const StyledCheckBox = styled(CheckBox)`
  width: 24px;
  height: 24px;
`;

export const StyledNonCheckBox = styled(NonCheckBox)`
  width: 24px;
  height: 24px;
`;
