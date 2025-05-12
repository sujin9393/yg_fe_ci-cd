import { create } from "zustand";

export interface UserInfo {
  imageUrl: string | null;
  name: string;
  nickname: string;
  accountBank: string;
  accountNumber: string;
  type: "USER" | "ADMIN";
}

interface UserStore {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
