import { create } from "zustand";

type MessagingType = {
  text: string;
  sender: "Moi" | "Lui";
  timestamp: string;
  
  setUser: (data: Partial<MessagingType>) => void;
};

export const useMessagingStore = create<MessagingType>((set) => ({
  text: "",
  sender: "Moi",
  timestamp: "",
  setUser: (data) => set((state) => ({ ...state, ...data })),
}));
