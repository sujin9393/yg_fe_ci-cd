import * as S from "./Loading.Style";

const Loading: React.FC<{ message?: string }> = ({
  message = "로딩중입니다",
}) => (
  <S.LoadingContainer>
    <S.BouncingIcon>
      <S.Img src="/images/로딩달뭉.webp" alt="로딩아이콘" />
    </S.BouncingIcon>
    <S.Message>{message}</S.Message>
  </S.LoadingContainer>
);

export default Loading;
