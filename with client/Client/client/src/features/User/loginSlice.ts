import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { loginAsync } from './userApi';


export enum Status{
    IDLE = 'idle' ,
    LOADING = 'loading',
    FAILED = 'failed'
}

export interface UserState {
    user:{
    
       username: string,
      
    } | null;
    status:Status
}

const initialState: UserState = {
  user: null,
  status: Status.IDLE,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(loginAsync.fulfilled, (state, action:PayloadAction<any>) => {
        state.status = Status.IDLE;
        const {user} = action.payload;
        state.user = user;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });

   },
});




export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;



export default loginSlice.reducer;