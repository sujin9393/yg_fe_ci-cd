import { forwardRef } from "react";
import * as S from "./Dropdown.styled";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  helperText?: string;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, helperText, ...props }, ref) => {
    return (
      <S.Container>
        <S.Label>{label}</S.Label>
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
