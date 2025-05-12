import { useModalStore } from "../../../../stores/useModalStore";
import Modal from "../Modal";
import * as S from "./SuccessModal.styled";
import Box from "../../../../assets/images/Box.png";
import { useOrderStore } from "../../../../stores/useOrderStore";
import { Button } from "../../button/Button.styled";

const SuccessModal = () => {
  const closeModal = useModalStore((s) => s.closeModal);
  const {
    //productName,
    //unitPrice,
    //unitAmount,
    //leftAmount,
    hostAccountBank,
    hostAccountNumber,
  } = useOrderStore();

  return (
    <Modal onClose={closeModal}>
      <S.Container>
        <S.Box src={Box} />
        <S.Title>주문이 성공적으로 완료되었습니다🎉</S.Title>
        <S.Account>
          주최자 계좌번호 : {hostAccountBank} {hostAccountNumber}
        </S.Account>
        <S.Info>
          ⏰ 주문 후 <span>1일 이내</span>에 입금해 주세요. <br />
          ✅ 입금 확인 시 공구 참여가 확정됩니다. <br />❌ 미입금 시 주문은 자동
          취소됩니다.
        </S.Info>
        <Button $buttonStyle="square" onClick={closeModal}>
          확인
        </Button>
      </S.Container>
    </Modal>
  );
};

export default SuccessModal;
