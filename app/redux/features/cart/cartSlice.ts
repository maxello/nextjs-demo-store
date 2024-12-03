import { Product } from "@/app/lib/definitions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type stateProp = {
  items: Product[],
  isOpen: boolean,
  totalAmount: number;
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    isOpen: false,
    items: [],
    totalAmount: 0 
  },
  reducers: {
    setModalVisibility: (state: stateProp, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    addItem: (state: stateProp, action: PayloadAction<Product>) => {
      console.log("PRODUCT ADDED: ", action.payload);
      if (state.totalAmount == 0) {
        state.items.push({...action.payload, quantity: 1});
      } else {
        let check = false;
        state.items.map((item: Product, key: number) => {
          if (item.id == action.payload.id) {
            state.items[key].quantity += 1;
            check = true;
          }
        });
        if (!check) {
          state.items.push({...action.payload, quantity: 1});
        }
      }
      state.totalAmount = state.totalAmount + 1;
    },
    // removeItem: (state, action: PayloadAction) => {
    //   const item = state.items.find((item: Product) => item.id === action.payload.id);
    //   if (item.quantity <= 1) {
    //     state.items.filter((item: Product) => item.id !== action.payload.id);
    //   } else {
    //     item.quantity = item.quantity - 1;
    //   }
    // },
    // clearCart: (state) => {
    //   state.items = [];
    // }
  },
});
export const { setModalVisibility, addItem } = cartSlice.actions;
export default cartSlice.reducer;
