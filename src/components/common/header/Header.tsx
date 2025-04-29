import * as S from "./Header.styled";
import Logo from "../../../assets/icons/Logo.svg";
import Service from "../../../assets/icons/Service.svg";
//import Bell from "../../../assets/icons/Bell.svg";
import User from "../../../assets/icons/User.svg";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoPart>
        <img src={Logo} alt="Logo" />
        <img src={Service} alt="Service Name" />
      </S.LogoPart>
      <S.SidePart>
        {/*<S.AlertIcon src={Bell} alt="alert" />*/}
        <S.ProfileIcon src={User} alt="profile" />
      </S.SidePart>
    </S.HeaderContainer>
  );
};

export default Header;
