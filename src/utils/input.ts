export const handleDigitLimitedChange = (
  input: string,
  onChange: (value: string) => void,
  maxDigits: number
) => {
  const raw = input.replace(/[^\d]/g, ""); // 숫자만 추출

  if (raw.length > maxDigits) {
    const trimmed = raw.slice(0, maxDigits);
    onChange(trimmed);
    return;
  }

  onChange(raw);
};
