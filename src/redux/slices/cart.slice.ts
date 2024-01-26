import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    id: string | number;
    name: string;
    image: string;
    price: number;
    description: string;
}

const initialState: CartState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<CartState>) => { },
    removeToCart: (state, actions: PayloadAction<CartState>) => { },
  },
});

export const {} = cartSlice.actions;
