//
//
//
import axios from "axios";
import Cookies from "js-cookie";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//
export const getLoginData = createAsyncThunk("auth/loginData", async (values) => {
  const options = {
    url: "https://taccounting.vodoerp.com/api/customers/login_business_customer",
    method: "POST",
    data: values,
  };

  try {
    const { data } = await axios.request(options);
    console.log(data?.data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialValues = {
  user:null,
  token: null,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValues,
  extraReducers: (builder) => {
    builder.addCase(getLoginData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.data?.token;
      Cookies.set("token", action.payload.data?.token, { expires: 7 });
      console.log(action.payload);
    });
    builder.addCase(getLoginData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLoginData.rejected, (state, action) => {
      state.isError = action.error;
      state.isLoading = false;
      console.log(action.error);
    });
  },
  reducers: {},
});

export const authReducer = authSlice.reducer;
