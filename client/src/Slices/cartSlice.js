import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addItemStart(state) {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess(state, action) {
      state.loading = false;
      state.items.push(action.payload);
    },
    addItemFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item._id !== itemId);
    },
    clearCart(state) {
      state.items = [];
      state.error = null;
    },
  },
});

// Async action to add item to cart
export const addItemToCart = (productId, quantity) => async (dispatch) => {
  dispatch(addItemStart());
  const token = window.localStorage.getItem("accessToken");
  console.log(token);
  try {
    const response = await axios.post(
      `http://localhost:8080/eshop/api/v1/auth/addtocart/${productId}`,
      {
        quantity,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch(addItemSuccess(response.data));
  } catch (error) {
    dispatch(addItemFailure(error.message));
  }
};

// Selector functions for cart slice
export const selectCartItems = (state) => state.cart.items;
export const selectLoadingState = (state) => state.cart.loading;
export const selectErrorState = (state) => state.cart.error;

export const {
  addItemStart,
  addItemSuccess,
  addItemFailure,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
