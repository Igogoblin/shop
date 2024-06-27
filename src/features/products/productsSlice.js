import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error, "Something went wrong");
    }
    // const response = await fetch(
    //   "https://fakestoreapi.com/products/categories"
    // );
    // const data = await response.json();
    // return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { list: [], filtered: [], related: [], isLoading: false },
  reducers: {
    filterByPrice(state, action) {
      state.filtered = state.list.filter(
        ({ price }) => price <= action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      console.log("Something went wrong");
    });
  },
});

export const { filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;
