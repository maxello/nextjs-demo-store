import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import cartReducer from "@/app/redux/features/cart/cartSlice";
// import { cartMiddleware } from "./features/cart/cartMiddleware";

const rootReducer = combineReducers({
  // counter: counterReducer,
  cart: cartReducer
},);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(cartMiddleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']