import { SectionLine } from "../../components/common/SectionLine.styled";
import SubSection from "../../components/main/subSection/SubSection";
import TopSection from "../../components/main/topSection/TopSection";
import { useUserStore } from "../../stores/useUserStore";
import * as S from "./Main.styled";

const Main = () => {
  const user = useUserStore((s) => s.user);

  if (user) {
    console.log(`닉네임은 ${user.nickname}`);
  } else {
    console.log("로그인 안됨");
  }

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
