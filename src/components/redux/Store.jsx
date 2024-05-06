import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./MenuSlice";
import dataProduct from "./productSlice";
import sessionsReducer from "./loginSice";
const Store = configureStore({
  reducer: {
    menu: dataReducer,
    products: dataProduct,
    sessions: sessionsReducer,
  },
});
export default Store;
