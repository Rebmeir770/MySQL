import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store"; 
import { tokenAsync } from "./authApi";


export enum Status{
    IDLE = 'idle' ,
    LOADING = 'loading',
    FAILED = 'failed'
}

export interface KeyState {
    key: {
        token: string;
    } | null;
    status: Status;
}

const initialState: KeyState = {
    key: null,
    status: Status.IDLE,
};

export const authSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(tokenAsync.pending, (state) => {
          state.status = Status.LOADING;
        })
        .addCase(tokenAsync.fulfilled, (state, action:PayloadAction<any>) => {
          state.status = Status.IDLE;
          const {user} = action.payload;
          state.key = user.token;
        })
        .addCase(tokenAsync.rejected, (state) => {
          state.status = Status.FAILED;
        });
        
     },
});

export const selectToken = (state: RootState) => state.token.key;
export const selectTokenStatus = (state: RootState) => state.token.status;

export default authSlice.reducer;


  

  

