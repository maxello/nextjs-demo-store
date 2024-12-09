import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import cartReducer from "@/app/redux/features/cart/cartSlice";

const rootReducer = combineReducers({
  cart: cartReducer
},);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']