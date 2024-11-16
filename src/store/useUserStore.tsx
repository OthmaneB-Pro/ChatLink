import { create } from "zustand";

type UserStoreType = {
  username: string;
  password: string;
  picture: string;
  setUser: (data: Partial<UserStoreType>) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  username: "",
  password: "",
  picture: "",
  setUser: (data) => set((state) => ({ ...state, ...data })),
}));
