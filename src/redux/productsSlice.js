//
//
//
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//
export const getProductsData = createAsyncThunk(
  "products/getProductsData",
  async () => {
    const options = {
      url: "http://testecommerce.vodoglobal.com/api/v1/ecomm_products?sku=&page=&type=purchases&product_kind&min_price&max_price&keyword=&name&view=",
      method: "GET",
      headers: {
        apikey: "5f28583f26a1a",
        lang: "ar",
        apiconnection: "appmobile",
        "secure-business-key": "4765066450c0bd66325.48403130",
      },
    };

    try {
      const { data } = await axios.request(options);
      // console.log(data);
      return data; 
    } catch (error) {
      // console.log(error);
      return error;
    }
  }
);

const initialValues = {
  products: [] ,
  token: null,
  isLoading: false,
  isError: null ,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getProductsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductsData.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
      // console.log(action.error);
    });
  },
  reducers: {
  },
});

export const productsReducer = productsSlice.reducer;
