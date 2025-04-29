import SubSection from "../../components/main/subSection/SubSection";
import TopSection from "../../components/main/topSection/TopSection";
import * as S from "./Main.styled";

const Main = () => {
  return (
    <>
      <TopSection />
      <S.SectionLine />
      <SubSection />
      <S.SectionLine />
      <SubSection />
    </>
  );
};

export default Main;
