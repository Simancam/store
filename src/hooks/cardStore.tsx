import { create } from "zustand";

interface CardItem {
  name: string;
  price: number;
  image: string;
}

interface CardState {
  cartItems: CardItem[];
  addItem: (item: CardItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
}

export const useCardStore = create<CardState>((set) => ({
  cartItems: [],
  addItem: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeItem: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== index),
    })),
  clearCart: () => set({ cartItems: [] }),
}));
