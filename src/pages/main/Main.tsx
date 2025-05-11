import { SectionLine } from "../../components/common/SectionLine.styled";
import SubSection from "../../components/main/subSection/SubSection";
import TopSection from "../../components/main/topSection/TopSection";
import * as S from "./Main.styled";

const Main = () => {
  return (
    <S.Container>
      <TopSection />
      <SectionLine />
      <SubSection title="전체" />
      <SectionLine />
      <SubSection title="뭉산PICK" categoryId={1} />
    </S.Container>
  );
};

export default Main;
