import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import productReducer from "../Slices/productSlice";
import categoryReducer from "../Slices/productCategorySlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    categories: categoryReducer,
  },
});

export default store;
