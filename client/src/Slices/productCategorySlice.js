// productCategorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductCategory = createAsyncThunk(
  "/eshop/api/v1/getproductcategory",
  async () => {
    const response = await axios.get(
      "http://localhost:8080/eshop/api/v1/getproductcategory"
    );
    return response.data;
  }
);

const productCategorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategory.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchProductCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchProductCategory.rejected, (state, action) => {
        state.hasError = true;
        state.error = false;
      });
  },
});

export const selectCategory = (state) => state.categories.categories;
export const selectLoadingState = (state) => state.categories.loading;
export const selectErrorState = (state) => state.categories.error;

export default productCategorySlice.reducer;
