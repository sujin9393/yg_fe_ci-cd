import { SectionLine } from "../../components/common/SectionLine.styled";
import SubSection from "../../components/main/subSection/SubSection";
//import TopSection from "../../components/main/topSection/TopSection";
import * as S from "./Main.styled";

const Main = () => {
  return (
    <S.Container>
      <SubSection title="마감임박" orderBy="due_soon_only" />
      <SectionLine />
      <SubSection title="전체" orderBy="latest" />
      <SectionLine />
      <SubSection title="뭉산PICK" orderBy="latest" categoryId={1} />
    </S.Container>
  );
};

export default Main;
