import { create } from "zustand";

export type ModalType = "login" | "confirm" | "order" | "success" | null;

interface ModalState {
  openedModal: ModalType;

  // ✅ ConfirmModal용 payload
  confirmTitle?: string;
  confirmDescription?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;

  openModal: (
    type: ModalType,
    payload?: {
      confirmTitle?: string;
      confirmDescription?: string;
      confirmText?: string;
      cancelText?: string;
      onConfirm?: () => void;
      onCancel?: () => void;
    }
  ) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  openedModal: null,
  openModal: (type, payload) =>
    set({
      openedModal: type,
      confirmTitle: payload?.confirmTitle,
      confirmDescription: payload?.confirmDescription,
      confirmText: payload?.confirmText,
      cancelText: payload?.cancelText,
      onConfirm: payload?.onConfirm,
      onCancel: payload?.onCancel,
    }),
  closeModal: () =>
    set({
      openedModal: null,
      confirmTitle: undefined,
      confirmDescription: undefined,
      confirmText: undefined,
      cancelText: undefined,
      onConfirm: undefined,
      onCancel: undefined,
    }),
}));
