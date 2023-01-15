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
    } | "245995995f1c4a328408b62ec83e8ab7" | null ;
    status: Status;
}

const initialState: KeyState = {
    key:"245995995f1c4a328408b62ec83e8ab7" ,
    status: Status.IDLE,
};

export const authSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(tokenAsync.pending, (state, action:PayloadAction<any>) => {
          state.status = Status.LOADING;
          const {token} = action.payload;
          state.key = token;
        })
        .addCase(tokenAsync.fulfilled, (state, action:PayloadAction<any>) => {
          state.status = Status.IDLE;
          const {token} = action.payload;
          state.key = token;
        })
        .addCase(tokenAsync.rejected, (state) => {
          state.status = Status.FAILED;
        });
        
     },
});

export const selectToken = (state: RootState) => state.token.key;
export const selectTokenStatus = (state: RootState) => state.token.status;

export default authSlice.reducer;


  

  

