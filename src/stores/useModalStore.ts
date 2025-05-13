import { create } from "zustand";
import { OrderResponse } from "../types/orderType";

export type ModalType = "login" | "confirm" | "order" | "success";

type ConfirmPayload = {
  confirmTitle?: string;
  confirmDescription?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type ModalPayloadMap = {
  confirm: ConfirmPayload;
  success: OrderResponse;
  login: undefined;
  order: undefined;
  null: undefined;
};

interface ModalState {
  openedModal: ModalType | null;
  payload?: ConfirmPayload | OrderResponse;

  openModal: <T extends ModalType>(
    type: T,
    payload?: ModalPayloadMap[T]
  ) => void;

  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  openedModal: null,
  payload: undefined,

  openModal: (type, payload) => {
    set({ openedModal: type, payload });
  },

  closeModal: () => {
    set({ openedModal: null, payload: undefined });
  },
}));
