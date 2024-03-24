import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import productReducer from "../Slices/productSlice";
import categoryReducer from "../Slices/productCategorySlice";
import cartReducer from "../Slices/cartSlice";
import cartDataReducer from "../Slices/cartDataSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
    cartData: cartDataReducer,
  },
});

export default store;
