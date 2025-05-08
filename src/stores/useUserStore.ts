import { create } from "zustand";

export interface UserInfo {
  imageUrl: string | null;
  name: string;
  nickname: string;
  type: "USER" | "ADMIN"; // 너희 서비스에 맞춰 수정 가능
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
