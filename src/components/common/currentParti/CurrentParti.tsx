import * as S from "./CurrentParti.styled";
import Package from "../../../assets/icons/Package.svg";

interface CurrentPartiProps {
  soldAmount: number;
  totalAmount: number;
  participantCount: number;
}

const CurrentParti = ({
  soldAmount,
  totalAmount,
  participantCount,
}: CurrentPartiProps) => {
  return (
    <S.CurrentParticipation>
      <S.AmountPart>
        <S.Amount>
          {soldAmount}/{totalAmount}
        </S.Amount>
        <img src={Package} alt="박스 아이콘" />
      </S.AmountPart>
      <S.PartCount>
        <S.PartCountMent>{participantCount}명 참여 중!</S.PartCountMent>
        <S.StyledUserIcon />
      </S.PartCount>
    </S.CurrentParticipation>
  );
};

export default CurrentParti;
