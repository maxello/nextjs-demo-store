import { Product } from "@/app/lib/definitions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    isOpen: false,
    items: [],
    totalAmount: 0 
  },
  reducers: {
    setModalVisibility: (state, action: PayloadAction) => {
      state.isOpen = action.payload;
    },
    addItem: (state, action: PayloadAction) => {
      if (state.totalAmount == 0) {
        state.items.push({...action.payload, quantity: 1});
      } else {
        let check = false;
        state.items.map((item: Product, key: number) => {
          if (item.id == action.payload.id) {
            state.items[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          state.items.push({...action.payload, quantity: 1});
        }
      }
      state.totalAmount = state.totalAmount + 1;
    },
    removeItem: (state, action: PayloadAction) => {
      const item = state.items.find((item: Product) => item.id === action.payload.id);
      if (item.quantity <= 1) {
        state.items.filter((item: Product) => item.id !== action.payload.id);
      } else {
        item.quantity = item.quantity - 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});
export const { setModalVisibility, addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
