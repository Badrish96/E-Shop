// cartDataSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartDataSlice = createSlice({
  name: "cartData",
  initialState: {
    cartData: [], // Assuming cart data structure
    loading: false,
    error: null,
  },
  reducers: {
    fetchCartDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartDataSuccess(state, action) {
      state.loading = false;
      state.cartData = action.payload;
    },
    fetchCartDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchCartData = () => async (dispatch) => {
  dispatch(fetchCartDataStart());
  try {
    const token = window.localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:8080/eshop/api/v1/auth/getcartdata",
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    dispatch(fetchCartDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchCartDataFailure(error.message));
  }
};

export const selectCartData = (state) => state.cartData.cartData;
export const selectCartDataLoading = (state) => state.cartData.loading;
export const selectCartDataError = (state) => state.cartData.error;

export const {
  fetchCartDataStart,
  fetchCartDataSuccess,
  fetchCartDataFailure,
} = cartDataSlice.actions;

export default cartDataSlice.reducer;
