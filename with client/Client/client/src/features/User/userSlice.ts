import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState} from '../../app/store';
import { registerAsync } from './userApi';


export enum Status{
    IDLE = 'idle' ,
    LOADING = 'loading',
    FAILED = 'failed'
}

export interface UserState {
    user:{
       email:string,
       name: string,
      
    } | null;
    status:Status
}

const initialState: UserState = {
  user: null,
  status: Status.IDLE,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(registerAsync.fulfilled, (state, action:PayloadAction<any>) => {
        state.status = Status.IDLE;
        const {user} = action.payload;
        state.user = user;
      })
      .addCase(registerAsync.rejected, (state) => {
        state.status = Status.FAILED;
      });
      
   },
});




export const selectUser = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;



export default userSlice.reducer;
