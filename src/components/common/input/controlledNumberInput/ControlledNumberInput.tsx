import { Controller, Control, FieldError, Path } from "react-hook-form";
import InputField from "../inputField/InputField";

const removeComma = (value: string) => value.replace(/[^\d]/g, "");
const formatWithComma = (value: string | number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// ✅ any 금지 → unknown 사용
type ControlledNumberInputProps<T extends Record<string, unknown>> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder: string;
  helperText?: FieldError | string;
  styleType?: "signup" | "post" | "login";
  prefix?: string;
  maxDigits: number;
  disabled?: boolean;
};

// ✅ 함수에도 제네릭 붙이기
const ControlledNumberInput = <T extends Record<string, unknown>>({
  name,
  control,
  label,
  placeholder,
  helperText,
  styleType = "post",
  prefix,
  maxDigits,
  disabled = false,
}: ControlledNumberInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const isAIPlaceholder = field.value === -1;

        const formatted = isAIPlaceholder
          ? "AI 답변 생성중..."
          : formatWithComma((field.value ?? "").toString());

        const handleChange = (input: string) => {
          if (isAIPlaceholder) return;
          const rawValue = removeComma(input);
          const trimmed = rawValue.slice(0, maxDigits);
          field.onChange(Number(trimmed));
        };

        return (
          <InputField
            label={label}
            styleType={styleType}
            placeholder={placeholder}
            value={formatted}
            onChange={(e) => handleChange(e.target.value)}
            prefix={prefix}
            helperText={
              typeof helperText === "string" ? helperText : helperText?.message
            }
            disabled={disabled}
          />
        );
      }}
    />
  );
};

export default ControlledNumberInput;
