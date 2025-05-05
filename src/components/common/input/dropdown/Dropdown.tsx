import { forwardRef } from "react";
import * as S from "./Dropdown.styled";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  width?: string;
  helperText?: React.ReactNode;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, width, helperText, ...props }, ref) => {
    return (
      <S.Container $width={width}>
        {label && <S.Label>{label}</S.Label>}
        <S.Select ref={ref} {...props}>
          {options.map((option) => (
            <S.Option key={option.value} value={option.value}>
              {option.label}
            </S.Option>
          ))}
        </S.Select>
        {helperText && <S.HelperText>{helperText}</S.HelperText>}
      </S.Container>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
