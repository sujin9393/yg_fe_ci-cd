import ProductCard from "../productCard/ProductCard";
import * as S from "./CardList.styled";

const CardList = () => {
  return (
    <S.ListContainer>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </S.ListContainer>
  );
};

export default CardList;
