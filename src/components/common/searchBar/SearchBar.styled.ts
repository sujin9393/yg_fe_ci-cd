import styled from "styled-components";
import { Colors, FontStyles } from "../../../styles";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchLine = styled.hr`
  flex: 1;
  height: 1px;
  border: none;
  background-color: ${Colors.Main10};
`;

export const SearchBox = styled.div`
  width: 100%;
  border: 1px solid ${Colors.Main10};
  width: 240px;
  border-radius: 50px;
  padding: 8px 15px;
  display: flex;
  justify-content: space-between;
`;

export const SearchText = styled.input`
  width: 185px;
  ${FontStyles.SM_Medium};
  border: none;
  outline: none;

  &::placeholder {
    color: ${Colors.Grayscale50};
  }
`;

export const SearchIcon = styled.img`
  width: 17px;
  cursor: pointer;
`;
