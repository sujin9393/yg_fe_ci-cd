import * as S from "./ConfirmModal.styled";
import Modal from "../Modal";
import { useModalStore } from "../../../../stores/useModalStore";
import Button from "../../button/Button";
import Alert from "../../../../assets/icons/Alert.svg?react";

const ConfirmModal = () => {
  const {
    confirmTitle,
    confirmDescription,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    closeModal,
  } = useModalStore();

  return (
    <Modal onClose={closeModal}>
      <S.Container>
        <Alert />
        <S.Message>{confirmTitle}</S.Message>
        <S.Info>{confirmDescription}</S.Info>
        <S.ButtonPart>
          <Button
            onClick={() => {
              onCancel?.();
              closeModal();
            }}
            buttonStyle="square"
            buttonState="cancel"
          >
            {cancelText || "취소"}
          </Button>
          <Button
            onClick={() => {
              onConfirm?.();
              closeModal();
            }}
            buttonStyle="square"
          >
            {confirmText || "확인"}
          </Button>
        </S.ButtonPart>
      </S.Container>
    </Modal>
  );
};

export default ConfirmModal;
