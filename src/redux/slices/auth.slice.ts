import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "../thunks/auth.thunk";

interface AuthState{ 
  isAuth: boolean;
  success: boolean;
  error:string | null;
  loading: boolean;
  userData: { email: string | null; uid: string | null } | null;
  accessToken: string | null;
  isExpired : boolean | null;
};

const initialState: AuthState ={
  isAuth: false,
  success: false,
  error:null,
  loading: false,
  userData: null,
  accessToken: null,
  isExpired : false,
}
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => { 
    builder.addCase(authThunk.pending, (state) => {  
      return ( state  = {
        ...initialState,
        loading : true,
      })
    });
    builder.addCase(authThunk.fulfilled, (state, actions) => {  
      return ( state  = {
        ...initialState,
        loading : false,
        success: true,
        accessToken: actions.payload.accessToken,
        isAuth: true,
        isExpired: false,
        userData: actions.payload.userData
      })
    });
    builder.addCase(authThunk.rejected, (state, action) => {
      if (action.error) {
        state.error = action.error.message || 'Error desconocido'; 
      } else {
        state.error = 'Error desconocido'; 
      }
      state.loading = false;
    });
  },
});

export const { login, logout } = authSlice.actions
