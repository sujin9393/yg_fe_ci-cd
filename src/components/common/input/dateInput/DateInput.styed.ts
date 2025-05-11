import styled from "styled-components";
import { Colors, FontStyles } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: visible;

  .react-datepicker {
    width: auto !important;
    min-width: 350px !important;
    display: block !important;
    z-index: 999;
    background-color: white !important;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }

  .react-datepicker__month-container {
    width: 258px;
  }

  .react-datepicker__time-container {
    width: 90px !important;
    border-left: 1px solid #eee;
  }

  .react-datepicker__time {
    width: 100% !important;
  }

  .react-datepicker__time-box {
    width: 100% !important;
  }
`;

export const Label = styled.label`
  ${FontStyles.MD2_Bold};
  margin-bottom: 5px;
`;

export const Input = styled.input.attrs({ readOnly: true })`
  width: 100%;
  height: 40px;
  border: none;
  text-align: center;
  border-radius: 10px;
  color: ${Colors.Grayscale60};

  ${FontStyles.XS_SemiBold};
  background-color: ${Colors.Grayscale10};
  cursor: pointer;

  &::placeholder {
    color: ${Colors.Grayscale50};
    ${FontStyles.XS_Medium};
  }

  &:focus {
    outline: none;
    border-color: #666;
  }
`;

export const HelperText = styled.span`
  color: ${Colors.Main20};
  ${FontStyles.XXS_Regular};
  margin-top: 2px;
`;
