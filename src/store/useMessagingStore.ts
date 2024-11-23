import { create } from "zustand";

type MessagingType = {
  text: string;
  sender: string;
  timestamp: string;
  
  setUser: (data: Partial<MessagingType>) => void;
};

export const useUserStore = create<MessagingType>((set) => ({
  text: "",
  sender: "",
  timestamp: "",
  setUser: (data) => set((state) => ({ ...state, ...data })),
}));
