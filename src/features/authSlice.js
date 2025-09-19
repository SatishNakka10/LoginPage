// src/features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    register: (state, action) => {
      state.user = {
        loginId: action.payload.loginId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        country: action.payload.country,
        businessPhone: action.payload.businessPhone,
        mobilePhone: action.payload.mobilePhone,
        email: action.payload.email,
        companyName: action.payload.companyName,
        password: action.payload.password,
        confirmPassword: action.payload.confirmPassword,
        captcha: action.payload.captcha,
      };
    },
    logout: (state) => {
      state.user = null;
    },
    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    }
  }
});

export const { login, register, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;
