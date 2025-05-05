import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./DateInput.styed";

interface DateInputProps {
  label?: string;
  value?: Date;
  placeholder?: string;
  onChange?: (date: Date | null) => void;
  helperText?: string;
}

const DateInput = ({
  label,
  value,
  placeholder,
  onChange,
  helperText,
}: DateInputProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <DatePicker
        selected={value}
        onChange={onChange}
        showTimeSelect
        dateFormat="yyyy.MM.dd h:mm aa"
        placeholderText={placeholder}
        customInput={<S.Input />}
      />
      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Container>
  );
};

export default DateInput;
