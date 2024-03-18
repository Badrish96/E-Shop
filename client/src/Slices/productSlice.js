// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "/eshop/api/v1/findproduct",
  async () => {
    const response = await axios.get(
      "http://localhost:8080/eshop/api/v1/findproduct"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.hasError = true;
        state.error = false;
      });
  },
});

export const selectProduct = (state) => state.products.products;
export const selectLoadingState = (state) => state.products.loading;
export const selectErrorState = (state) => state.products.error;

export default productSlice.reducer;
