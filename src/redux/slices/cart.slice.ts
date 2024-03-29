import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorage";

interface CartAddState {
    id: string | number;
    name: string;
    image: string;
    price: number;
    description: string;
}
interface CartRemoveState {
    id: string | number;  
}

const initialState: CartAddState[] = getItem('cart') || [];


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<CartAddState>) => { 
      const { id } = actions.payload;
      if( 
        state.length === 0 || 
        state.filter((item) =>  item.id === id).length === 0
        ){
          state.push(actions.payload)
        }
      },
      removeToCart: (state, actions: PayloadAction<CartRemoveState>) => { 
        const { id } = actions.payload;
        const updatedCart = state.filter((item) => item.id !== id);
        return updatedCart;
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
