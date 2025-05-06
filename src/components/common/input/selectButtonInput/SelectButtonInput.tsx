import { useEffect, useState } from "react";
import * as S from "./SelectButtonInput.styled";

interface SelectButtonInputProps {
  unit: number; // 수량 증가 단위 (ex: 1, 2, 5 ...)
  min?: number;
  max?: number;
  initial?: number;
  onChange?: (value: number) => void;
}

const SelectButtonInput = ({
  unit,
  min = unit,
  max = 100,
  initial = unit,
  onChange,
}: SelectButtonInputProps) => {
  const [amount, setAmount] = useState(initial);

  const handleDecrease = () => {
    const next = Math.max(min, amount - unit);
    setAmount(next);
    onChange?.(next);
  };

  const handleIncrease = () => {
    const next = Math.min(max, amount + unit);
    setAmount(next);
    onChange?.(next);
  };

  useEffect(() => {
    setAmount(unit); // 또는 setAmount(unit)도 가능
  }, [unit]);

  return (
    <S.Container>
      <S.Button onClick={handleDecrease}>-</S.Button>
      <S.Count>{amount}</S.Count>
      <S.Button onClick={handleIncrease}>+</S.Button>
    </S.Container>
  );
};

export default SelectButtonInput;
