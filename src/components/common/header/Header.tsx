import * as S from "./Header.styled";
import Logo from "../../../assets/icons/Logo.svg";
import Service from "../../../assets/icons/Service.svg";
//import Bell from "../../../assets/icons/Bell.svg";
import User from "../../../assets/icons/User.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.LogoPart
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt="logo" />
        <img src={Service} alt="service name" />
      </S.LogoPart>
      <S.SidePart>
        {/*<S.AlertIcon src={Bell} alt="alert" />*/}
        <S.ProfileIcon src={User} alt="profile" />
      </S.SidePart>
    </S.HeaderContainer>
  );
};

export default Header;
