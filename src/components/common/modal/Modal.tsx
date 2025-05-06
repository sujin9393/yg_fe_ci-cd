import { useEffect } from "react";
import * as S from "./Modal.Style";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

/**
 *
 * @param childeren - 모달로 띄울 컴포넌트
 * @param onClose - 모달 닫으면 실행될 함수
 * @returns
 */

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <S.Mask onClick={onClose}>
      <S.ModalBody onClick={(e) => e.stopPropagation()}>{children}</S.ModalBody>
    </S.Mask>
  );
};

export default Modal;
