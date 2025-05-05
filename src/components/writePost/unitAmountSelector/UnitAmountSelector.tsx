import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

import * as S from "./UnitAmountSelector.styled";
import InputField from "../../common/input/inputField/InputField";
import Dropdown from "../../common/input/dropdown/Dropdown";
import SelectButtonInput from "../../common/input/selectButtonInput/SelectButtonInput";

const UnitAmountSelector = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const totalAmount = watch("totalAmount"); // 상품 전체 수량
  const unitAmount = watch("unitAmount"); // 선택한 주문 단위

  const [unitOptions, setUnitOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [unit, setUnit] = useState(1); // SelectButton용 내부 단위

  // 전체 수량 입력에 따라 약수 옵션 자동 계산
  useEffect(() => {
    const total = Number(totalAmount);
    if (!total || isNaN(total) || total < 1) {
      setUnitOptions([]);
      return;
    }

    const divisors = [];
    for (let i = 1; i <= total; i++) {
      if (total % i === 0) divisors.push(i);
    }

    setUnitOptions(
      divisors.map((d) => ({
        value: String(d),
        label: `${d}개`,
      }))
    );
  }, [totalAmount]);

  // unitAmount 값이 변경되면 SelectButton에 반영
  useEffect(() => {
    const unitNum = Number(unitAmount);
    if (!isNaN(unitNum)) {
      setUnit(unitNum);
    }
  }, [unitAmount]);

  return (
    <div>
      <S.TotalAmount>
        <InputField
          label="상품 전체 수량"
          styleType="post"
          placeholder="상품 전체 수량을 입력해주세요."
          {...register("totalAmount")}
        />
        <Dropdown
          options={[{ value: "", label: "주문단위" }, ...unitOptions]}
          width="85px"
          {...register("unitAmount")}
        />
      </S.TotalAmount>
      {(errors.totalAmount || errors.unitAmount) && (
        <S.HelperText>
          {typeof errors.totalAmount?.message === "string"
            ? errors.totalAmount.message
            : typeof errors.unitAmount?.message === "string"
              ? errors.unitAmount.message
              : ""}
        </S.HelperText>
      )}
      {unitAmount && (
        <S.MyParti>
          <S.Label>공구 참여 수량</S.Label>
          <SelectButtonInput unit={unit} />
        </S.MyParti>
      )}
    </div>
  );
};

export default UnitAmountSelector;
