import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { logoutAsync } from './userApi';


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

export const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(logoutAsync.pending, (state) => {
      state.status = Status.LOADING;
    })
    .addCase(logoutAsync.fulfilled, (state, action:PayloadAction<any>) => {
      state.status = Status.IDLE;
      const {user} = action.payload;
      state.user = user;
    })
    .addCase(logoutAsync.rejected, (state) => {
      state.status = Status.FAILED;
    });

   },
});

export const selectUser = (state: RootState) => state.logout.user;
export const selectUserStatus = (state: RootState) => state.logout.user;

export default logoutSlice.reducer;