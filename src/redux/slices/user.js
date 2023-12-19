import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, logOutUser } from "../../utils/https/login";
// import { registerUser } from "../../utils/https/register";

const initialState = {
  isUserAvailable: false,
  userInfo: null,
  err: {
    login: null,
    register: null,
    logout: null,
  },
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ body, cb, errorCb }, { rejectWithValue }) => {
    try {
      const { data } = await loginUser(body);
      if (cb) cb();
      return data.data;
    } catch (err) {
      const errObj = {
        status: err.response.status,
        message: err.response.data.message,
      };
      console.log(err);
      errorCb(err);
      return rejectWithValue(errObj);
    }
  }
);

const logoutThunk = createAsyncThunk(
  "auth/logout",
  async ({ token, cb }, { rejectWithValue }) => {
    try {
      const { data } = await logOutUser(token);
      if (cb) cb();
      return data.data;
    } catch (err) {
      const errObj = {
        status: err.response.status,
        message: err.response.data.message,
      };
      console.log(err);
      return rejectWithValue(errObj);
    }
  }
);

// const registerThunk = createAsyncThunk(
//   "users/register",
//   async (body, { rejectWithValue }) => {
//     try {
//       const { data } = await registerUser(body);
//       return data.data;
//     } catch (err) {
//       const errObj = {
//         status: err.response.status,
//         message: err.response.data.msg,
//       };
//       return rejectWithValue(errObj);
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (prevState) => {
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
          err: null,
        };
      })
      .addCase(loginThunk.rejected, (prevState, { payload }) => {
        return {
          ...prevState,
          isPending: false,
          isRejected: true,
          err: {
            ...prevState.err,
            login: payload,
          },
        };
      })
      .addCase(loginThunk.fulfilled, (prevState, { payload }) => {
        return {
          ...prevState,
          isUserAvailable: true,
          isPending: false,
          isFulfilled: true,
          userInfo: payload,
        };
      });
  },
});

export const userAction = {
  ...userSlice.actions,
  loginThunk,
  logoutThunk,
};

export default userSlice.reducer;
