import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/features/counter/counterSlice";
import cartReducer from "@/app/redux/features/cart/cartSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
  //add all your reducers here
},);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']