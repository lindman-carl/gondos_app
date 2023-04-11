import { create } from "zustand";
import { persist } from "zustand/middleware";

import { nanoid } from "nanoid";

export type CartItem = {
  id: string;
  productId: string;
  size: number;
  quantity: number;
  price: number;
};

type CartState = {
  cartId: string;
  items: CartItem[];
  addItemToCart: (productId: string, size: number, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
  changeItemQuantity: (id: string, quantity: number) => void;
};

export const useCart = create<CartState>()((set) => ({
  cartId: nanoid(),
  items: [],
  addItemToCart: (productId, size, quantity) => {
    set((state) => ({
      items: [
        ...state.items,
        {
          id: nanoid(),
          productId,
          size,
          quantity,
          price: 799,
        },
      ],
    }));
  },
  removeItemFromCart: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  changeItemQuantity: (id, quantity) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      }),
    }));
  },
}));
