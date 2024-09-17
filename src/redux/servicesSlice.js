//
//
//
import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//
export const getServicesData = createAsyncThunk(
  "services/getServicesData",
  async () => {
    const options = {
      url: "http://testecommerce.vodoglobal.com/api/v1/ecomm_products?sku=&page=&type=Service&product_kind&min_price&max_price&keyword=&name&view=list",
      method: "GET",
      headers: {
        apikey: "5f28583f26a1a",
        lang: "ar",
        apiconnection: "appmobile",
        "secure-business-key": "728106399db2b289783.89154521",
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
  services: [] ,
  isLoading: false,
  isError: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(getServicesData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = action.payload;
      state.token = action.payload.jwt;
      // console.log(action.payload);
    });
    builder.addCase(getServicesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getServicesData.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
      // console.log(action.error);
    });

  },
  reducers: {
  },
});

export const servicesReducer = servicesSlice.reducer;

