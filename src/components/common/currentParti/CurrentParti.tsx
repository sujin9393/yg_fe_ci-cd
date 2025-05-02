import * as S from "./CurrentParti.styled";
import Package from "../../../assets/icons/Package.svg";

const CurrentParti = () => {
  return (
    <S.CurrentParticipation>
      <S.AmountPart>
        <S.Amount>45/80</S.Amount>
        <img src={Package} alt="박스 아이콘" />
      </S.AmountPart>
      <S.PartCount>
        <S.PartCountMent>5명 참여 중!</S.PartCountMent>
        <S.StyledUserIcon />
      </S.PartCount>
    </S.CurrentParticipation>
  );
};

export default CurrentParti;
