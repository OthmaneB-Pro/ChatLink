import { create } from "zustand";

type UserStoreType = {
  username: string;
  password: string;
  picture: string;
  status : "Disponible" | "Indisponible";
  setUser: (data: Partial<UserStoreType>) => void;
};

export const useUserStore = create<UserStoreType>((set) => ({
  username: "",
  password: "",
  picture: "",
  status : "Disponible",
  setUser: (data) => set((state) => ({ ...state, ...data })),
}));
