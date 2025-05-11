import * as S from "./WebBackground.styled";
import Logo from "../../../assets/icons/Logo.svg";
import Service from "../../../assets/icons/Service.svg";
import Moongs from "../../../assets/icons/Moongs.svg";
import Instagram from "../../../assets/icons/Instagram.svg";

const WebBackground = () => {
  return (
    <S.Container>
      <S.LogoPart>
        <img src={Logo} alt="logo" />
        <S.ServiceName src={Service} />
      </S.LogoPart>
      <S.MainPart>
        <S.MainMent>
          혼자보다 <span>뭉쳐야</span> 이득!
        </S.MainMent>
        <S.SubMent>혼밥은 괜찮아도 혼쇼핑은 비싸니까</S.SubMent>
        <img src={Moongs} alt="뭉산 아이콘" />
      </S.MainPart>
      <S.Bottom>
        <img src={Instagram} alt="인스타그램 아이콘" />
      </S.Bottom>
    </S.Container>
  );
};

export default WebBackground;
