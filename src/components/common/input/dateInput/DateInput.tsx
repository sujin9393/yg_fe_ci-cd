import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as S from "./DateInput.styed";
import { setHours, setMinutes } from "date-fns";

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
  const now = new Date();
  const minSelectableDate = now;
  const minSelectableTime = now;

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
        popperPlacement="bottom-start"
        minDate={minSelectableDate} // ✅ 오늘 이후 날짜만
        minTime={minSelectableTime} // ✅ 오늘이면 지금 이후 시간만
        maxTime={setHours(setMinutes(new Date(), 59), 23)} // ✅ 오늘이면 23:59까지만
      />
      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Container>
  );
};

export default DateInput;
