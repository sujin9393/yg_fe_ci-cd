import * as S from "./FilteringSelector.styled";

export interface FilterSelectorProps<T extends string> {
  options: T[];
  selected: T;
  type?: "postList" | "myList";
  onSelect: (value: T) => void;
}

const FilterSelector = <T extends string>({
  options,
  selected,
  type = "myList",
  onSelect,
}: FilterSelectorProps<T>) => {
  return (
    <S.Container $type={type}>
      {options.map((option) => (
        <S.Button
          key={option}
          $isSelected={selected === option}
          onClick={() => onSelect(option)}
        >
          {option}
        </S.Button>
      ))}
    </S.Container>
  );
};

export default FilterSelector;
