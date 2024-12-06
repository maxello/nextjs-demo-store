import { Product, CartProps } from "@/app/lib/definitions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const calculateTotalAmount = (state: CartProps) => {
  return state.items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
}

const caclulateSubtotal = (state: CartProps) => {
  return Number(state.items.reduce((accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity, 0).toFixed(2));
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    isOpen: false,
    items: [],
    totalAmount: 0,
    subtotal: 0
  },
  reducers: {
    setCart: (state: CartProps, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.totalAmount = calculateTotalAmount(state);
      state.subtotal = caclulateSubtotal(state);
    },
    setModalVisibility: (state: CartProps, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    addItem: (state: CartProps, action: PayloadAction<Product>) => {
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
      state.totalAmount = calculateTotalAmount(state);
      state.subtotal = caclulateSubtotal(state);
    },
    changeQuantity: (state: CartProps, action: PayloadAction<{id: string, flag: string}>) => {
      const item = state.items.find((item: Product) => item.id === action.payload.id);
      if (item) {
        if (action.payload.flag === 'minus') {
          if (item) {
            if (item.quantity <= 1) {
              state.items = state.items.filter((item: Product) => item.id !== action.payload.id);
            } else {
              item.quantity = item.quantity - 1;
            }
          }
        }
        if (action.payload.flag === 'plus') {
          item.quantity = item.quantity + 1;
        }
      }
      state.totalAmount = calculateTotalAmount(state);
      state.subtotal = caclulateSubtotal(state);
    },
    clearCart: (state: CartProps) => {
      state.items = [];
      state.totalAmount = calculateTotalAmount(state);
      state.subtotal = caclulateSubtotal(state);
    }
  },
});
export const { setModalVisibility, addItem, changeQuantity, clearCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
