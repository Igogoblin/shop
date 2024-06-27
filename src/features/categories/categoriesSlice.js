import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
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

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { list: [], isLoading: false },
  reducers: {
    setCategories(state, action) {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false;
      console.log("Something went wrong");
    });
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
